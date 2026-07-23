"use strict";

// Injects shared SVG parts and heat overlays into pose SVG documents.

const SVG_NS = "http://www.w3.org/2000/svg";
const EAR_LEFT_PATH_D = "M0 7V4H1V2H2V1H3V0H4V2H5V3H6V7H5V8H1V7H0Z";
const EAR_RIGHT_PATH_D = "M1 3H0V7H1V8H4V7H5V2H4V1H3V0H2V1H1V3Z";
const TAIL_PATH_D = "M0 8V7H6V6H8V5H9V4H8V1H9V0H11V1H12V2H13V7H12V8H11V9H9V10H4V9H1V8H0Z";

function createSvgComponents() {
  function getSvgViewBoxRect(doc) {
    const svg = doc && doc.documentElement;
    if (!svg) return null;
    const viewBox = svg.getAttribute("viewBox");
    if (viewBox) {
      const [x, y, width, height] = viewBox.trim().split(/[\s,]+/).map(Number);
      if ([x, y, width, height].every((n) => Number.isFinite(n))) {
        return { x, y, width, height };
      }
    }
    const width = parseFloat(svg.getAttribute("width") || "0");
    const height = parseFloat(svg.getAttribute("height") || "0");
    if (Number.isFinite(width) && Number.isFinite(height) && width > 0 && height > 0) {
      return { x: 0, y: 0, width, height };
    }
    return null;
  }

  function removeHeatOverlays(doc) {
    if (!doc) return;
    for (const overlay of Array.from(doc.querySelectorAll(".heat-overlay"))) {
      overlay.remove();
    }
  }

  function refreshHeatOverlays(doc) {
    removeHeatOverlays(doc);
    installHeatOverlays(doc);
  }

  function installHeatOverlays(doc) {
    const bounds = getSvgViewBoxRect(doc);
    if (!bounds) return;

    const catContent = doc.getElementById("cat-content") || doc.documentElement;
    const maskId = "cat-heat-mask";
    let defs = doc.querySelector("defs");
    if (!defs) {
      defs = doc.createElementNS(SVG_NS, "defs");
      doc.documentElement.insertBefore(defs, doc.documentElement.firstChild);
    }

    let mask = doc.getElementById(maskId);
    if (!mask) {
      mask = doc.createElementNS(SVG_NS, "mask");
      mask.setAttribute("id", maskId);
      defs.appendChild(mask);
    }
    while (mask.firstChild) mask.removeChild(mask.firstChild);
    mask.setAttribute("maskUnits", "userSpaceOnUse");
    mask.setAttribute("x", bounds.x);
    mask.setAttribute("y", bounds.y);
    mask.setAttribute("width", bounds.width);
    mask.setAttribute("height", bounds.height);
    mask.style.setProperty("mask-type", "alpha");

    const sourceSelector = [
      "[data-patch-frame]",
      "[data-heat-overlay]",
      "[id^='seg-wrap-']",
    ].join(",");
    const sources = Array.from(catContent.querySelectorAll(sourceSelector)).filter((source) => {
      if (source.closest("defs") || source.closest(".heat-overlay")) return false;
      if (source.closest("[id^='seg-wrap-']") && !source.id.startsWith("seg-wrap-")) return false;
      if (source.id.startsWith("seg-wrap-") && source.id !== "seg-wrap-0") return false;
      if (source.id === "body" && doc.getElementById("seg-wrap-0")) return false;
      if (!source.id) return false;
      return true;
    });

    for (const source of sources) {
      const use = doc.createElementNS(SVG_NS, "use");
      use.setAttribute("href", `#${source.id}`);
      use.setAttribute("fill", "white");
      use.setAttribute("stroke", "white");
      mask.appendChild(use);
    }

    const overlay = doc.createElementNS(SVG_NS, "rect");
    overlay.setAttribute("class", "heat-overlay cat-heat-overlay");
    overlay.setAttribute("pointer-events", "none");
    overlay.setAttribute("x", bounds.x);
    overlay.setAttribute("y", bounds.y);
    overlay.setAttribute("width", bounds.width);
    overlay.setAttribute("height", bounds.height);
    overlay.setAttribute("mask", `url(#${maskId})`);
    overlay.style.setProperty("fill", "var(--heat-overlay-color, #dc2828)");
    overlay.style.setProperty("opacity", "var(--full-heat-overlay-opacity, 0)");
    catContent.appendChild(overlay);

    const patchSlots = Array.from(doc.querySelectorAll(".patches"));
    const animationTags = new Set(["animate", "animateTransform", "animateMotion", "set"]);
    for (const slot of patchSlots) {
      const parent = slot.parentNode;
      if (!parent || !parent.closest || !parent.closest("[data-patch-frame]")) continue;
      const clipPath = slot.getAttribute("clip-path");
      if (!clipPath) continue;

      if (!parent.hasAttribute("data-patch-frame")) {
        const shapeOverlay = doc.createElementNS(SVG_NS, "g");
        shapeOverlay.setAttribute("class", "heat-overlay legacy-heat-overlay shape-heat-overlay");
        shapeOverlay.setAttribute("pointer-events", "none");
        for (const child of Array.from(parent.children)) {
          if (child === slot) break;
          if (child.classList && child.classList.contains("heat-overlay")) continue;
          if (animationTags.has(child.tagName)) continue;
          const clone = child.cloneNode(true);
          for (const animated of Array.from(clone.querySelectorAll("animate, animateTransform, animateMotion, set"))) {
            animated.remove();
          }
          for (const painted of [clone, ...Array.from(clone.querySelectorAll("*"))]) {
            if (painted.hasAttribute("fill")) painted.setAttribute("fill", "var(--heat-overlay-color, #dc2828)");
            if (painted.hasAttribute("stroke")) painted.setAttribute("stroke", "var(--heat-overlay-color, #dc2828)");
          }
          shapeOverlay.appendChild(clone);
        }
        if (shapeOverlay.childNodes.length > 0) {
          shapeOverlay.style.setProperty("opacity", "var(--legacy-heat-overlay-opacity, 0)");
          parent.appendChild(shapeOverlay);
        }
        continue;
      }

      const patchOverlay = doc.createElementNS(SVG_NS, "rect");
      patchOverlay.setAttribute("class", "heat-overlay legacy-heat-overlay patch-heat-overlay");
      patchOverlay.setAttribute("pointer-events", "none");
      patchOverlay.setAttribute("x", bounds.x);
      patchOverlay.setAttribute("y", bounds.y);
      patchOverlay.setAttribute("width", bounds.width);
      patchOverlay.setAttribute("height", bounds.height);
      patchOverlay.setAttribute("clip-path", clipPath);
      patchOverlay.style.setProperty("fill", "var(--heat-overlay-color, #dc2828)");
      patchOverlay.style.setProperty("opacity", "var(--legacy-heat-overlay-opacity, 0)");
      parent.appendChild(patchOverlay);
    }

    for (const source of Array.from(doc.querySelectorAll("[data-heat-overlay]"))) {
      const parent = source.parentNode;
      if (!parent) continue;

      const legacyOverlay = doc.createElementNS(SVG_NS, "g");
      legacyOverlay.setAttribute("class", "heat-overlay legacy-heat-overlay");
      legacyOverlay.setAttribute("pointer-events", "none");
      for (const child of Array.from(source.children)) {
        const clone = child.cloneNode(true);
        for (const painted of [clone, ...Array.from(clone.querySelectorAll("[fill]"))]) {
          if (painted.hasAttribute("fill")) painted.setAttribute("fill", "var(--heat-overlay-color, #dc2828)");
        }
        legacyOverlay.appendChild(clone);
      }
      legacyOverlay.style.setProperty("opacity", "var(--legacy-heat-overlay-opacity, 0)");
      parent.insertBefore(legacyOverlay, source.nextSibling);
    }
  }

  function earComponentsNeedInstall(doc) {
    if (!doc) return false;
    for (const id of ["ear-left", "ear-right"]) {
      const ear = doc.getElementById(id);
      if (!ear) continue;
      if (!ear.querySelector("path") || !ear.querySelector(".patches")) return true;
    }
    return false;
  }

  function installEarComponents(doc) {
    const earDefs = [
      ["ear-left", EAR_LEFT_PATH_D, "ear-left-clip"],
      ["ear-right", EAR_RIGHT_PATH_D, "ear-right-clip"],
    ];

    let defs = doc.querySelector("defs");
    if (!defs && doc.documentElement) {
      defs = doc.createElementNS(SVG_NS, "defs");
      doc.documentElement.insertBefore(defs, doc.documentElement.firstChild);
    }

    for (const [id, pathD, clipId] of earDefs) {
      const el = doc.getElementById(id);
      if (!el) continue;
      const posAttr = el.getAttribute("data-ear-position");
      if (!posAttr) continue;
      const [x, y] = posAttr.split(/\s+/).map(Number);

      while (el.firstChild) el.removeChild(el.firstChild);

      const path = doc.createElementNS(SVG_NS, "path");
      path.setAttribute("transform", `translate(${x} ${y})`);
      path.setAttribute("d", pathD);
      path.setAttribute("fill", "var(--cat-color)");
      el.appendChild(path);

      if (defs) {
        let clip = doc.getElementById(clipId);
        if (!clip) {
          clip = doc.createElementNS(SVG_NS, "clipPath");
          clip.setAttribute("id", clipId);
          defs.appendChild(clip);
        }
        while (clip.firstChild) clip.removeChild(clip.firstChild);
        const clipPath = doc.createElementNS(SVG_NS, "path");
        clipPath.setAttribute("transform", `translate(${x} ${y})`);
        clipPath.setAttribute("d", pathD);
        clip.appendChild(clipPath);
      }

      const patches = doc.createElementNS(SVG_NS, "g");
      patches.setAttribute("class", "patches");
      patches.setAttribute("clip-path", `url(#${clipId})`);
      patches.setAttribute("shape-rendering", "crispEdges");
      el.appendChild(patches);

      el.setAttribute("data-patch-frame", `${x} ${y} 1 1`);
    }
    placeEarsBehindHead(doc);
  }

  function placeEarsBehindHead(doc) {
    const head = doc.getElementById("head");
    if (!head || !head.parentNode) return;
    for (const id of ["ear-left", "ear-right"]) {
      const ear = doc.getElementById(id);
      const renderNode = directChildUnder(head.parentNode, ear);
      if (!renderNode || renderNode === head) continue;
      head.parentNode.insertBefore(renderNode, head);
    }
  }

  function directChildUnder(parent, node) {
    if (!parent || !node) return null;
    let current = node;
    while (current && current.parentNode && current.parentNode !== parent) {
      current = current.parentNode;
    }
    return current && current.parentNode === parent ? current : null;
  }

  function installTailComponent(doc) {
    const tailEl = doc.getElementById("tail");
    if (!tailEl) return;
    const frameAttr = tailEl.getAttribute("data-patch-frame");
    if (!frameAttr) return;
    const [ox, oy, cw, ch] = frameAttr.split(/\s+/).map(Number);

    while (tailEl.firstChild) tailEl.removeChild(tailEl.firstChild);

    const transformStr = (cw === 1 && ch === 1)
      ? `translate(${ox} ${oy})`
      : `translate(${ox} ${oy}) scale(${cw} ${ch})`;
    const path = doc.createElementNS(SVG_NS, "path");
    path.setAttribute("transform", transformStr);
    path.setAttribute("d", TAIL_PATH_D);
    path.setAttribute("fill", "var(--cat-color)");
    if (tailEl.hasAttribute("data-tail-path-id")) {
      path.setAttribute("id", "tail-path");
    }
    tailEl.appendChild(path);

    let defs = doc.querySelector("defs");
    if (!defs) {
      defs = doc.createElementNS(SVG_NS, "defs");
      doc.documentElement.insertBefore(defs, doc.documentElement.firstChild);
    }
    let clip = doc.getElementById("tail-clip");
    if (!clip) {
      clip = doc.createElementNS(SVG_NS, "clipPath");
      clip.setAttribute("id", "tail-clip");
      defs.appendChild(clip);
    }
    while (clip.firstChild) clip.removeChild(clip.firstChild);
    const clipPath = doc.createElementNS(SVG_NS, "path");
    clipPath.setAttribute("transform", transformStr);
    clipPath.setAttribute("d", TAIL_PATH_D);
    clip.appendChild(clipPath);

    const patches = doc.createElementNS(SVG_NS, "g");
    patches.setAttribute("class", "patches");
    patches.setAttribute("clip-path", "url(#tail-clip)");
    patches.setAttribute("shape-rendering", "crispEdges");
    tailEl.appendChild(patches);
  }

  return {
    earComponentsNeedInstall,
    getSvgViewBoxRect,
    installEarComponents,
    installHeatOverlays,
    installTailComponent,
    refreshHeatOverlays,
    removeHeatOverlays,
  };
}

module.exports = {
  createSvgComponents,
};
