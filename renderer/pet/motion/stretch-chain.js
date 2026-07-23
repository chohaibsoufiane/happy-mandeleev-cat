"use strict";

// Stretch SVG segment construction and chained horizontal motion.

const STRETCH_SEGMENT_COUNT = 6;

const SPRING = 0.10;
const COUPLING = 0.28;
const DAMPING = 0.84;
const IMPULSE = 0.002;
const MAX_DX = 2.5;
const DEPTH_TAPER = 0.85;
const RELEASE_EASE = 0.32;

function parseFirstMy(d) {
  const m = (d || "").match(/M\s*(-?\d+(?:\.\d+)?)[\s,]+(-?\d+(?:\.\d+)?)/);
  return m ? parseFloat(m[2]) : null;
}

function parseRectY(r) {
  if (r.hasAttribute("y")) return parseFloat(r.getAttribute("y") || 0);
  const t = r.getAttribute("transform") || "";
  const m = t.match(/translate\(\s*[\d.\-]+(?:[\s,]+([\d.\-]+))?\s*\)/);
  return m && m[1] !== undefined ? parseFloat(m[1]) : 0;
}

function parseRectH(r) {
  return parseFloat(r.getAttribute("height") || "0");
}

function parseRectX(r) {
  if (r.hasAttribute("x")) return parseFloat(r.getAttribute("x") || 0);
  const t = r.getAttribute("transform") || "";
  const m = t.match(/translate\(\s*([-\d.]+)/);
  return m && m[1] !== undefined ? parseFloat(m[1]) : 0;
}

function parseRectW(r) {
  return parseFloat(r.getAttribute("width") || "0");
}

function parseTranslateY(transformStr) {
  const m = (transformStr || "").match(/translate\(\s*-?[\d.]+(?:[\s,]+(-?[\d.]+))?/);
  return m && m[1] != null ? parseFloat(m[1]) : 0;
}

function fmtSvg(value, digits = 2) {
  return Number(value).toFixed(digits);
}

function setAttrIfChanged(el, name, value) {
  if (!el) return;
  const stringValue = String(value);
  const cacheKey = `__lastAttr_${name}`;
  if (el[cacheKey] === stringValue) return;
  el[cacheKey] = stringValue;
  el.setAttribute(name, stringValue);
}

function setRectXY(rect, x, y, useTransform) {
  if (useTransform) {
    setAttrIfChanged(rect, "transform", `translate(${fmtSvg(x)} ${fmtSvg(y)})`);
  } else {
    setAttrIfChanged(rect, "x", fmtSvg(x));
    setAttrIfChanged(rect, "y", fmtSvg(y));
  }
}

function isStretchBaseRect(rect) {
  return !rect.classList.contains("heat-overlay") &&
    !rect.closest(".heat-overlay") &&
    !rect.closest(".patches") &&
    !rect.closest("defs") &&
    !rect.closest("clipPath");
}

function createStretchChain({
  body = document.body,
  electronAPI = window.electronAPI,
  patternRenderer,
  refreshHeatOverlays,
  getStretchT,
  setStretchT,
  isDragging,
  isReleasing,
  setReleasing,
  onReleaseComplete,
}) {
  const dxState = new Array(STRETCH_SEGMENT_COUNT).fill(0);
  const velState = new Array(STRETCH_SEGMENT_COUNT).fill(0);
  let endData = null;
  const startYsByIdx = [];
  const startHsByIdx = [];
  const startXsByIdx = [];
  const startWsByIdx = [];
  let pendingEndDoc = null;
  let tailStartY = null;
  let chainRafId = null;

  function setup(svgDoc) {
    const NS = "http://www.w3.org/2000/svg";
    const svg = svgDoc.documentElement;
    svg.setAttribute("viewBox", "-20 -2 80 148");
    svg.setAttribute("width", "80");
    svg.setAttribute("preserveAspectRatio", "xMidYMin meet");

    const allRects = Array.from(svg.querySelectorAll("rect")).filter(isStretchBaseRect);
    const rectInfo = allRects.map((r, idx) => {
      let x = 0, y = 0, useTransform = false;
      if (r.hasAttribute("y") || r.hasAttribute("x")) {
        x = parseFloat(r.getAttribute("x") || 0);
        y = parseFloat(r.getAttribute("y") || 0);
      } else {
        const t = r.getAttribute("transform") || "";
        const m = t.match(/translate\(\s*([\d.\-]+)(?:[\s,]+([\d.\-]+))?\s*\)/);
        if (m) { x = parseFloat(m[1]); y = parseFloat(m[2] || 0); useTransform = true; }
      }
      return {
        rect: r, x, y, useTransform, origIdx: idx,
        w: parseFloat(r.getAttribute("width")),
        h: parseFloat(r.getAttribute("height")),
      };
    });

    const bodyRects = rectInfo.filter((rd) => rd.y + rd.h >= 25);
    if (bodyRects.length === 0) {
      endData = null;
      return null;
    }

    const bodyYmin = Math.min(...bodyRects.map((rd) => rd.y));
    const bodyYmax = Math.max(...bodyRects.map((rd) => rd.y + rd.h));
    const spineRects = bodyRects.filter((rd) => rd.x < 33);
    const sxMin = Math.min(...spineRects.map((rd) => rd.x));
    const sxMax = Math.max(...spineRects.map((rd) => rd.x + rd.w));
    const bodyCenterX = (sxMin + sxMax) / 2;
    const segHeight = (bodyYmax - bodyYmin) / STRETCH_SEGMENT_COUNT;

    const segments = [];
    for (let i = 0; i < STRETCH_SEGMENT_COUNT; i++) {
      segments.push({ idx: i, yTop: bodyYmin + i * segHeight, rects: [] });
    }
    for (const rd of bodyRects) {
      const cy = rd.y + rd.h / 2;
      const idx = Math.min(STRETCH_SEGMENT_COUNT - 1, Math.max(0, Math.floor((cy - bodyYmin) / segHeight)));
      segments[idx].rects.push(rd);
    }

    const lerpData = [];
    for (let i = 0; i < STRETCH_SEGMENT_COUNT; i++) {
      const seg = segments[i];
      const cumulativeY = bodyYmin + i * segHeight;
      for (const rd of seg.rects) {
        const startYGlobal = startYsByIdx[rd.origIdx];
        const endYGlobal = rd.y;
        const startYLocal = ((startYGlobal !== undefined) ? startYGlobal : endYGlobal) - cumulativeY;
        const endYLocal = endYGlobal - cumulativeY;
        const startX = startXsByIdx[rd.origIdx] !== undefined ? startXsByIdx[rd.origIdx] : rd.x;
        const endX = rd.x;
        const startW = startWsByIdx[rd.origIdx] !== undefined ? startWsByIdx[rd.origIdx] : rd.w;
        const endW = rd.w;
        const startH = startHsByIdx[rd.origIdx] !== undefined ? startHsByIdx[rd.origIdx] : rd.h;
        const endH = rd.h;
        lerpData.push({
          rect: rd.rect, useTransform: rd.useTransform,
          startX, endX, startYLocal, endYLocal, startW, endW, startH, endH,
        });
        rd.rect.remove();
      }
    }

    let parent = svgDoc.getElementById("cat-content") || svg;
    const wrappers = [];
    for (let i = 0; i < STRETCH_SEGMENT_COUNT; i++) {
      const seg = segments[i];
      const wrap = svgDoc.createElementNS(NS, "g");
      wrap.setAttribute("id", `seg-wrap-${i}`);
      for (const rd of seg.rects) wrap.appendChild(rd.rect);
      parent.appendChild(wrap);
      parent = wrap;
      wrappers.push({ el: wrap });
    }

    const tailPath = svgDoc.getElementById("tail-path");
    const tailGroup = svgDoc.getElementById("tail") || tailPath;
    const tailLocalY = tailPath ? parseFirstMy(tailPath.getAttribute("d")) : null;
    const tailTy = tailPath ? parseTranslateY(tailPath.getAttribute("transform")) : 0;
    const tailEndY = tailLocalY !== null ? tailLocalY + tailTy : null;
    const bodyWrapper = svgDoc.getElementById("body");

    const catContent = svgDoc.getElementById("cat-content");
    if (catContent && wrappers.length > 0) {
      catContent.insertBefore(wrappers[0].el, catContent.firstChild);
      if (bodyWrapper && bodyWrapper.parentNode === catContent) {
        catContent.insertBefore(bodyWrapper, wrappers[0].el.nextSibling);
      }
      for (const id of ["leg-fl", "leg-fr", "leg-rl", "leg-rr"]) {
        const legEl = svgDoc.getElementById(id);
        if (legEl && legEl.parentNode === catContent) {
          catContent.insertBefore(legEl, bodyWrapper || wrappers[0].el.nextSibling);
        }
      }
      const tailEl = svgDoc.getElementById("tail");
      if (tailEl && tailEl.parentNode === catContent) {
        catContent.insertBefore(tailEl, catContent.firstChild);
      }
    }

    const startYsForBody = bodyRects
      .map((rd) => startYsByIdx[rd.origIdx])
      .filter((y) => y !== undefined && !isNaN(y));
    const startYBotsForBody = bodyRects
      .map((rd) => (startYsByIdx[rd.origIdx] !== undefined ? startYsByIdx[rd.origIdx] : rd.y) + rd.h);
    const startBodyYmin = startYsForBody.length ? Math.min(...startYsForBody) : bodyYmin;
    const startBodyYmax = Math.max(...startYBotsForBody);
    const startBodyHeight = Math.max(1, startBodyYmax - startBodyYmin);
    const endBodyHeight = Math.max(1, bodyYmax - bodyYmin);

    const bodyEndToStartMap = bodyRects.map((rd) => ({
      endX: rd.x,
      endY: rd.y,
      endW: rd.w,
      endH: rd.h,
      startX: startXsByIdx[rd.origIdx] !== undefined ? startXsByIdx[rd.origIdx] : rd.x,
      startY: startYsByIdx[rd.origIdx] !== undefined ? startYsByIdx[rd.origIdx] : rd.y,
      startW: startWsByIdx[rd.origIdx] !== undefined ? startWsByIdx[rd.origIdx] : rd.w,
      startH: startHsByIdx[rd.origIdx] !== undefined ? startHsByIdx[rd.origIdx] : rd.h,
    }));

    const bodyRowRects = bodyEndToStartMap
      .filter((r) => r.endW >= 12 && r.endH >= 5)
      .sort((a, b) => a.endY - b.endY);

    const legGroups = [];
    for (const id of ["leg-fl", "leg-fr", "leg-rl", "leg-rr"]) {
      const el = svgDoc.getElementById(id);
      if (!el) continue;
      const delta = parseFloat(el.getAttribute("data-stretch-y-delta") || "0");
      const frameAttr = el.getAttribute("data-patch-frame");
      let cy = bodyYmin + segHeight;
      if (el.hasAttribute("data-stretch-cy")) {
        cy = parseFloat(el.getAttribute("data-stretch-cy"));
      } else if (frameAttr) {
        const [, oy] = frameAttr.split(/\s+/).map(Number);
        const isFront = id.startsWith("leg-f");
        const legH = isFront ? 11 : 8;
        cy = oy + legH / 2;
      }
      const segIdx = Math.min(STRETCH_SEGMENT_COUNT - 1, Math.max(0, Math.floor((cy - bodyYmin) / segHeight)));
      legGroups.push({ el, delta, segIdx });
    }

    const result = {
      wrappers, segHeight, bodyYmin, bodyCenterX, lerpData,
      tailGroup, tailEndY,
      bodyWrapper, startBodyHeight, endBodyHeight,
      bodyEndToStartMap,
      bodyRowRects,
      legGroups,
    };
    endData = result;
    patternRenderer.applyCurrentBodyToChain(svgDoc);
    refreshHeatOverlays(svgDoc);
    return result;
  }

  function loadStartDoc(svgDoc) {
    const rects = Array.from(svgDoc.querySelectorAll("rect")).filter(isStretchBaseRect);
    startYsByIdx.length = 0;
    startHsByIdx.length = 0;
    startXsByIdx.length = 0;
    startWsByIdx.length = 0;
    rects.forEach((r, idx) => {
      startYsByIdx[idx] = parseRectY(r);
      startHsByIdx[idx] = parseRectH(r);
      startXsByIdx[idx] = parseRectX(r);
      startWsByIdx[idx] = parseRectW(r);
    });

    const startTail = svgDoc.getElementById("tail-path");
    if (startTail) tailStartY = parseFirstMy(startTail.getAttribute("d"));
    if (pendingEndDoc) {
      setup(pendingEndDoc);
      pendingEndDoc = null;
      apply();
    }
  }

  function loadEndDoc(svgDoc) {
    if (startYsByIdx.length === 0) {
      pendingEndDoc = svgDoc;
      return;
    }
    setup(svgDoc);
    apply();
  }

  function apply() {
    if (!endData) return;
    const { wrappers, segHeight, bodyYmin, lerpData, tailGroup, tailEndY, legGroups } = endData;
    const stretchT = getStretchT();

    for (let i = 0; i < wrappers.length; i++) {
      const ty = (i === 0) ? bodyYmin : segHeight;
      const transform = `translate(${fmtSvg(dxState[i])} ${fmtSvg(ty)})`;
      setAttrIfChanged(wrappers[i].el, "transform", transform);
    }

    for (const ld of lerpData) {
      const x = (ld.startX !== undefined ? ld.startX : ld.endX) +
        ((ld.endX - (ld.startX !== undefined ? ld.startX : ld.endX)) * stretchT);
      const y = ld.startYLocal + (ld.endYLocal - ld.startYLocal) * stretchT;
      setRectXY(ld.rect, x, y, ld.useTransform);
      if (ld.startW !== undefined && ld.endW !== undefined) {
        const w = ld.startW + (ld.endW - ld.startW) * stretchT;
        setAttrIfChanged(ld.rect, "width", fmtSvg(w));
      }
      if (ld.startH !== undefined && ld.endH !== undefined) {
        const h = ld.startH + (ld.endH - ld.startH) * stretchT;
        setAttrIfChanged(ld.rect, "height", fmtSvg(h));
      }
    }

    if (legGroups) {
      for (const lg of legGroups) {
        const ty = lg.delta * (1 - stretchT);
        let dx = 0;
        for (let i = 0; i <= lg.segIdx; i++) dx += dxState[i];
        setAttrIfChanged(lg.el, "transform", `translate(${fmtSvg(dx)} ${fmtSvg(ty)})`);
      }
    }

    if (tailGroup && tailEndY !== null && tailStartY !== null) {
      let tailDx = 0;
      for (let i = 0; i < dxState.length; i++) tailDx += dxState[i];
      const offsetY = (tailStartY - tailEndY) * (1 - stretchT);
      setAttrIfChanged(tailGroup, "transform", `translate(${fmtSvg(tailDx)} ${fmtSvg(offsetY)})`);
    }
  }

  function resetMotion() {
    for (let i = 0; i < STRETCH_SEGMENT_COUNT; i++) {
      dxState[i] = 0;
      velState[i] = 0;
    }
    apply();
  }

  function addPointerImpulse(dx) {
    velState[0] -= dx * IMPULSE;
  }

  function tick() {
    if (!endData) {
      chainRafId = null;
      return;
    }

    if (isReleasing()) {
      let stretchT = getStretchT();
      stretchT += (0 - stretchT) * RELEASE_EASE;
      if (stretchT < 0.01) stretchT = 0;
      setStretchT(stretchT);
    }

    let maxMotion = 0;
    for (let i = 0; i < STRETCH_SEGMENT_COUNT; i++) {
      const parentDx = i === 0 ? 0 : dxState[i - 1];
      velState[i] += (parentDx - dxState[i]) * COUPLING;
      velState[i] += -dxState[i] * SPRING;
      velState[i] *= DAMPING;
      dxState[i] += velState[i];
      const localMax = MAX_DX * Math.pow(DEPTH_TAPER, i);
      dxState[i] = Math.max(-localMax, Math.min(localMax, dxState[i]));
      maxMotion = Math.max(maxMotion, Math.abs(dxState[i]), Math.abs(velState[i]));
    }

    apply();

    if (isReleasing() && getStretchT() === 0 && maxMotion < 0.15) {
      setReleasing(false);
      resetMotion();
      body.classList.remove("dragging");
      electronAPI.setStretchMode(false);
      onReleaseComplete();
      chainRafId = null;
      return;
    }

    if (isDragging() || isReleasing() || maxMotion > 0.01) {
      chainRafId = requestAnimationFrame(tick);
    } else {
      resetMotion();
      chainRafId = null;
    }
  }

  function start() {
    if (chainRafId === null) chainRafId = requestAnimationFrame(tick);
  }

  return {
    addPointerImpulse,
    apply,
    getEndData: () => endData,
    getSegmentCount: () => STRETCH_SEGMENT_COUNT,
    loadEndDoc,
    loadStartDoc,
    resetMotion,
    start,
  };
}

module.exports = {
  STRETCH_SEGMENT_COUNT,
  createStretchChain,
};
