"use strict";

// Handles SVG layer tracking for idle and peek poses.

const TRACKING_LAYERS = {
  pupils: { ids: ["pupil-left", "pupil-right"], maxOffset: 1.6, ease: 0.42 },
  eyes:   { ids: ["eyes-js"],                    maxOffset: 0.8, ease: 0.30 },
  face:   { ids: ["face-js"],                    maxOffset: 2.2, ease: 0.20 },
  body:   { ids: ["body"],                       maxOffset: 0.7, ease: 0.09 },
};
const MAX_RAW_DIST_PX = 400;

function createSvgTracking({
  catObject,
  electronAPI,
  registerSvgDoc,
  ensureSvgObjectReady,
  getPetPeekState,
  isStretching,
  onCursorMove,
  onStretchingCursorReset,
}) {
  const trackingInitializedDocs = new WeakSet();
  let layers = null;
  let peekLayers = null;
  let targetDx = 0;
  let targetDy = 0;
  let trackingRafId = null;
  let idleAnimationActive = false;

  function initTracking() {
    const doc = catObject && catObject.contentDocument;
    if (!doc) return;
    if (trackingInitializedDocs.has(doc)) {
      ensureSvgObjectReady("cat");
      return;
    }
    trackingInitializedDocs.add(doc);
    registerSvgDoc(doc, "cat-idle-follow-v2");
    if (doc.documentElement) {
      doc.documentElement.classList.toggle("idle-animated", idleAnimationActive);
    }

    layers = createTrackingLayers(doc, TRACKING_LAYERS);
    requestTick();
  }

  function initPeekEyeTracking() {
    const doc = ensureSvgObjectReady("press-left");
    if (!doc) return null;
    setPressLeftPeekFaceOnly(!!getPetPeekState(), doc);
    if (!peekLayers) {
      peekLayers = createTrackingLayers(doc, { pupils: TRACKING_LAYERS.pupils });
    }
    return peekLayers;
  }

  function setPressLeftPeekFaceOnly(enabled, doc = ensureSvgObjectReady("press-left")) {
    if (!doc) return;
    const content = doc.getElementById("cat-content");
    const head = doc.getElementById("head");
    if (!content || !head) return;

    let keepVisible = false;
    const alwaysVisibleIds = new Set(["ear-left", "ear-right", "leg-fr", "leg-fl"]);
    for (const child of Array.from(content.children)) {
      if (child === head) keepVisible = true;
      const isAlwaysVisible = child.id && alwaysVisibleIds.has(child.id);
      child.style.display = enabled && !keepVisible && !isAlwaysVisible ? "none" : "";
    }
    setPressLeftPeekLegPose(enabled, doc);
  }

  function setPressLeftPeekLegPose(enabled, doc) {
    const transforms = {
      "leg-fr": "matrix(0 1 -1 0 48 3)",
      "leg-fl": "matrix(0 1 -1 0 52 26)",
    };
    for (const [id, transform] of Object.entries(transforms)) {
      const leg = doc.getElementById(id);
      if (!leg) continue;
      if (enabled) {
        if (!Object.prototype.hasOwnProperty.call(leg.dataset, "peekOriginalTransform")) {
          leg.dataset.peekOriginalTransform = leg.getAttribute("transform") || "";
        }
        leg.setAttribute("transform", transform);
        continue;
      }
      const original = leg.dataset.peekOriginalTransform === transform ? "" : (leg.dataset.peekOriginalTransform || "");
      if (original) leg.setAttribute("transform", original);
      else leg.removeAttribute("transform");
      delete leg.dataset.peekOriginalTransform;
    }
  }

  function preparePressPoseForTyping() {
    const pressLeftDoc = ensureSvgObjectReady("press-left");
    ensureSvgObjectReady("press-right");
    if (!getPetPeekState()) setPressLeftPeekFaceOnly(false, pressLeftDoc);
  }

  function findTrackingElements(doc, id) {
    const byId = doc.getElementById(id);
    if (byId) return [byId];
    return Array.from(doc.querySelectorAll(`.${id}`));
  }

  function createTrackingLayers(doc, configs) {
    const nextLayers = {};
    for (const [name, cfg] of Object.entries(configs)) {
      const wrappers = [];
      for (const id of cfg.ids) {
        for (const el of findTrackingElements(doc, id)) {
          wrappers.push(wrapElement(doc, el));
        }
      }
      nextLayers[name] = {
        wrappers,
        maxOffset: cfg.maxOffset,
        ease: cfg.ease,
        stretchAxis: cfg.stretchAxis,
        x: 0,
        y: 0,
      };
    }
    return nextLayers;
  }

  function wrapElement(doc, el) {
    const existing = el.parentNode && el.parentNode.getAttribute && el.parentNode.getAttribute("data-tracking-wrapper") === "1"
      ? el.parentNode
      : null;
    if (existing) return existing;
    const wrapper = doc.createElementNS("http://www.w3.org/2000/svg", "g");
    wrapper.setAttribute("data-tracking-wrapper", "1");
    el.parentNode.insertBefore(wrapper, el);
    wrapper.appendChild(el);
    return wrapper;
  }

  function handleCursorPos({ dx, dy }) {
    if (isStretching()) {
      setIdleAnimationActive(false);
      targetDx = 0;
      targetDy = 0;
      onStretchingCursorReset();
      requestTick();
      return;
    }
    onCursorMove(dx, dy);
    const dist = Math.hypot(dx, dy);
    setIdleAnimationActive(dist <= 300);
    if (dist === 0) {
      targetDx = 0;
      targetDy = 0;
      requestTick();
      return;
    }
    const clamped = Math.min(dist, MAX_RAW_DIST_PX) / MAX_RAW_DIST_PX;
    targetDx = (dx / dist) * clamped;
    targetDy = (dy / dist) * clamped;
    requestTick();
  }

  function requestTick() {
    if (trackingRafId !== null) return;
    trackingRafId = requestAnimationFrame(tick);
  }

  function setIdleAnimationActive(active) {
    active = !!active;
    if (idleAnimationActive === active) return;
    idleAnimationActive = active;
    const doc = catObject && catObject.contentDocument;
    if (doc && doc.documentElement) {
      doc.documentElement.classList.toggle("idle-animated", active);
    }
  }

  function tick() {
    trackingRafId = null;
    if (!layers && !peekLayers) return;
    const hasIdleMotion = updateTrackingLayers(layers, targetDx, targetDy);
    const petPeekState = getPetPeekState();
    const peekTargetDx = petPeekState && petPeekState.edge === "left" ? -targetDx : targetDx;
    const hasPeekMotion = petPeekState ? updateTrackingLayers(initPeekEyeTracking(), peekTargetDx, targetDy) : false;
    if (hasIdleMotion || hasPeekMotion) requestTick();
  }

  function updateTrackingLayers(layerSet, dx, dy) {
    if (!layerSet) return false;
    let hasMotion = false;
    for (const layer of Object.values(layerSet)) {
      const tx = dx * layer.maxOffset;
      const ty = dy * layer.maxOffset;

      layer.x += (tx - layer.x) * layer.ease;
      layer.y += (ty - layer.y) * layer.ease;

      if (Math.abs(layer.x - tx) < 0.005) layer.x = tx;
      if (Math.abs(layer.y - ty) < 0.005) layer.y = ty;
      if (Math.abs(layer.x) < 0.005 && Math.abs(layer.y) < 0.005 && tx === 0 && ty === 0) {
        layer.x = 0;
        layer.y = 0;
      }
      if (layer.x !== tx || layer.y !== ty) hasMotion = true;

      const qx = Math.round(layer.x * 8) / 8;
      const qy = Math.round(layer.y * 8) / 8;
      const transform = layer.stretchAxis === "x"
        ? `translate(${qx} 0) scale(${(1 + Math.abs(dx) * 0.08).toFixed(3)} 1)`
        : `translate(${qx} ${qy})`;

      for (const wrapper of layer.wrappers) {
        if (wrapper.__lastTrackingTransform === transform) continue;
        wrapper.setAttribute("transform", transform);
        wrapper.__lastTrackingTransform = transform;
      }
    }
    return hasMotion;
  }

  function resetPeekLayers() {
    peekLayers = null;
  }

  function bind() {
    catObject.addEventListener("load", initTracking);
    requestAnimationFrame(() => {
      if (catObject && catObject.contentDocument) initTracking();
    });
    electronAPI.onCursorPos(handleCursorPos);
  }

  return {
    bind,
    initPeekEyeTracking,
    preparePressPoseForTyping,
    requestTick,
    resetPeekLayers,
    setPressLeftPeekFaceOnly,
  };
}

module.exports = {
  createSvgTracking,
};
