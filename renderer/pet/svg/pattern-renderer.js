"use strict";

// Renders custom pattern spots into each pose SVG.

const SVG_NS = "http://www.w3.org/2000/svg";
const PATTERN_PART_MAPPING = {
  legFl: ["leg-fl"],
  legFr: ["leg-fr"],
  legRl: ["leg-rl"],
  legRr: ["leg-rr"],
  earL: ["ear-left"],
  earR: ["ear-right"],
};

function createPatternRenderer({
  registry,
  refreshHeatOverlays,
  getEndData,
  getSegmentCount,
}) {
  let currentPattern = { head: [] };

  function applyToSvg(doc, pattern = currentPattern) {
    if (!doc || !pattern) return;
    for (const [partKey, spots] of Object.entries(pattern)) {
      if (!Array.isArray(spots)) continue;
      const elemIds = PATTERN_PART_MAPPING[partKey] || [partKey];
      for (const elemId of elemIds) {
        applyPatternSpotsToElement(doc, elemId, spots);
      }
    }
  }

  function applyPatternSpotsToElement(doc, elemId, spots) {
    if (elemId === "body" && doc.getElementById("seg-wrap-0")) {
      distributeBodyPatchesToChain(doc, spots);
      return;
    }

    const partEl = doc.getElementById(elemId);
    if (!partEl) return;
    const frameAttr = partEl.getAttribute("data-patch-frame");
    if (!frameAttr) return;
    const [ox, oy, cw, ch] = frameAttr.split(/\s+/).map(Number);
    const mirrorXCells = parseFloat(partEl.getAttribute("data-patch-mirror-x") || "0");
    const slot = partEl.querySelector(".patches");
    if (!slot) return;
    slot.setAttribute("shape-rendering", "crispEdges");
    while (slot.firstChild) slot.removeChild(slot.firstChild);
    for (const spot of spots) {
      const cellX = mirrorXCells > 0 ? (mirrorXCells - 1 - spot.x) : spot.x;
      const mappedPixels = getMappedPixelsForSpot(doc, elemId, cellX, spot.y);
      if (mappedPixels) {
        for (const pixel of mappedPixels) {
          const rect = doc.createElementNS(SVG_NS, "rect");
          rect.setAttribute("x", pixel.x);
          rect.setAttribute("y", pixel.y);
          rect.setAttribute("width", 1);
          rect.setAttribute("height", 1);
          rect.setAttribute("fill", spot.color);
          rect.setAttribute("shape-rendering", "crispEdges");
          slot.appendChild(rect);
        }
        continue;
      }

      const rect = doc.createElementNS(SVG_NS, "rect");
      rect.setAttribute("x", ox + cellX * cw);
      rect.setAttribute("y", oy + spot.y * ch);
      rect.setAttribute("width", cw);
      rect.setAttribute("height", ch);
      rect.setAttribute("fill", spot.color);
      rect.setAttribute("shape-rendering", "crispEdges");
      slot.appendChild(rect);
    }
  }

  function getMappedPixelsForSpot(doc, elemId, cellX, cellY) {
    const api = window.cellMappings;
    if (!api || typeof api.getPixelsForCell !== "function") return null;
    const svgName = registry.getName(doc);
    if (!svgName) return null;
    const pixels = api.getPixelsForCell(svgName, elemId, cellX, cellY);
    if (Array.isArray(pixels) && pixels.length === 0 &&
        (svgName === "jump-ing" || svgName === "jump-start") &&
        (elemId === "leg-fl" || elemId === "leg-fr")) {
      return null;
    }
    return Array.isArray(pixels) ? pixels : null;
  }

  function distributeBodyPatchesToChain(doc, spots) {
    const endData = getEndData && getEndData();
    if (!endData) return;
    const bodyWrapper = doc.getElementById("body");
    if (!bodyWrapper) return;

    const segmentCount = getSegmentCount();
    const { bodyYmin, segHeight, lerpData, bodyRowRects } = endData;
    if (!bodyRowRects || bodyRowRects.length === 0) return;

    for (let i = 0; i < segmentCount; i++) {
      const wrapEl = doc.getElementById(`seg-wrap-${i}`);
      if (!wrapEl) continue;
      for (const child of Array.from(wrapEl.children)) {
        if (child.classList && child.classList.contains("body-patch")) {
          wrapEl.removeChild(child);
        }
      }
    }
    for (let i = lerpData.length - 1; i >= 0; i--) {
      if (lerpData[i].rect && lerpData[i].rect.classList &&
          lerpData[i].rect.classList.contains("body-patch")) {
        lerpData.splice(i, 1);
      }
    }
    const slot = bodyWrapper.querySelector(".patches");
    if (slot) while (slot.firstChild) slot.removeChild(slot.firstChild);

    function addBodyPatchRect({ color, endX, endY, endW, endH, startX, startY, startW, startH }) {
      const cy = endY + endH / 2;
      const segIdx = Math.min(segmentCount - 1, Math.max(0, Math.floor((cy - bodyYmin) / segHeight)));
      const cumulativeY = bodyYmin + segIdx * segHeight;
      const startYLocal = startY - cumulativeY;
      const endYLocal = endY - cumulativeY;

      const rect = doc.createElementNS(SVG_NS, "rect");
      rect.setAttribute("class", "body-patch");
      rect.setAttribute("x", endX);
      rect.setAttribute("y", endYLocal);
      rect.setAttribute("width", endW);
      rect.setAttribute("height", endH);
      rect.setAttribute("fill", color);
      rect.setAttribute("shape-rendering", "crispEdges");

      const wrapEl = doc.getElementById(`seg-wrap-${segIdx}`);
      if (wrapEl) wrapEl.appendChild(rect);

      lerpData.push({
        rect, useTransform: false,
        startX, endX, startYLocal, endYLocal, startW, endW, startH, endH,
      });
    }

    const CELLS_X = 22;
    const chainMapping = window.cellMappings &&
      window.cellMappings.MAPPINGS &&
      window.cellMappings.MAPPINGS["stretch-chain:body"];

    function addBodyBlockPatch(blockX, blockY, color) {
      if (blockY < 0 || blockY >= bodyRowRects.length) return;
      const targetRect = bodyRowRects[blockY];
      if (blockX < 0 || blockX >= CELLS_X) return;

      const startMaxCol = Math.max(0, targetRect.startW - 1);
      const endMaxCol = Math.max(0, targetRect.endW - 1);
      const cellsMaxCol = CELLS_X - 1;
      const startColInRow = Math.round(blockX * startMaxCol / cellsMaxCol);
      const endColInRow = Math.round(blockX * endMaxCol / cellsMaxCol);
      const startX = targetRect.startX + startColInRow;
      const endX = targetRect.endX + endColInRow;
      const startW = 1;
      const endW = 1;
      const startH = targetRect.startH;
      const endH = targetRect.endH;
      const endY = targetRect.endY;

      addBodyPatchRect({
        color,
        endX,
        endY,
        endW,
        endH,
        startX,
        startY: targetRect.startY,
        startW,
        startH,
      });
    }

    for (const spot of spots) {
      const mappedBlocks = chainMapping &&
        chainMapping.cells &&
        Array.isArray(chainMapping.cells[`${spot.x},${spot.y}`]) &&
        chainMapping.cells[`${spot.x},${spot.y}`].length > 0
        ? chainMapping.cells[`${spot.x},${spot.y}`]
        : [[spot.x, spot.y]];
      for (const [blockX, blockY] of mappedBlocks) {
        addBodyBlockPatch(blockX, blockY, spot.color);
      }
    }
  }

  function applyAll(pattern) {
    currentPattern = pattern || {};
    registry.forEach((doc) => {
      applyToSvg(doc, currentPattern);
      refreshHeatOverlays(doc);
    });
  }

  function applyCurrentBodyToChain(doc) {
    if (Array.isArray(currentPattern && currentPattern.body)) {
      distributeBodyPatchesToChain(doc, currentPattern.body);
    }
  }

  return {
    applyAll,
    applyCurrentBodyToChain,
    applyToSvg,
    getCurrentPattern: () => currentPattern,
  };
}

module.exports = {
  createPatternRenderer,
};
