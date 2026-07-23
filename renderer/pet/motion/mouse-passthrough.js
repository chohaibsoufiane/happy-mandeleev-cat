"use strict";

// Hit-tests pet poses and overlays to decide Electron mouse passthrough.

const MOUSE_PASSTHROUGH_CHECK_MS = 50;

function rectContains(rect, x, y) {
  return x >= rect.left && x <= rect.right && y >= rect.top && y <= rect.bottom;
}

function pointInEllipse(nx, ny, cx, cy, rx, ry) {
  const dx = (nx - cx) / rx;
  const dy = (ny - cy) / ry;
  return dx * dx + dy * dy <= 1;
}

function createMousePassthrough({
  domDocument = document,
  body = document.body,
  catObject,
  stretchEndObject,
  overlays,
  ensureSvgObjectReady,
  getPetPeekState,
  isDragging,
  isReleasing,
  hasPendingDrag,
  setPetMouseEventsEnabled,
}) {
  let lastCheckAt = 0;
  let lastClientPoint = null;

  function currentPoseElement() {
    if (body.classList.contains("dragging")) {
      ensureSvgObjectReady("stretch-svg-end");
      return stretchEndObject;
    }
    if (getPetPeekState()) {
      ensureSvgObjectReady("press-left");
      return domDocument.getElementById("press-left");
    }
    if (body.dataset.stretching) {
      ensureSvgObjectReady("stretch-pose-default");
      return domDocument.getElementById("stretch-pose-default");
    }
    if (body.dataset.hunting) {
      ensureSvgObjectReady("cat");
      return domDocument.getElementById("cat");
    }
    if (body.dataset.jump === "start") {
      ensureSvgObjectReady("jump-start");
      return domDocument.getElementById("jump-start");
    }
    if (body.dataset.jump === "ing") {
      ensureSvgObjectReady("jump-ing");
      return domDocument.getElementById("jump-ing");
    }
    if (body.dataset.scroll) {
      ensureSvgObjectReady("scroll-unroll");
      return domDocument.getElementById("scroll-unroll");
    }
    if (body.dataset.press === "left") {
      ensureSvgObjectReady("press-left");
      return domDocument.getElementById("press-left");
    }
    if (body.dataset.press === "right") {
      ensureSvgObjectReady("press-right");
      return domDocument.getElementById("press-right");
    }
    ensureSvgObjectReady("cat");
    return catObject;
  }

  function isCatHitPoint(x, y) {
    const pose = currentPoseElement();
    if (!pose) return false;
    const rect = pose.getBoundingClientRect();
    if (rect.width <= 0 || rect.height <= 0 || !rectContains(rect, x, y)) return false;

    const nx = (x - rect.left) / rect.width;
    const ny = (y - rect.top) / rect.height;

    if (pose === stretchEndObject) {
      return pointInEllipse(nx, ny, 0.5, 0.2, 0.2, 0.14) ||
        pointInEllipse(nx, ny, 0.5, 0.52, 0.18, 0.38);
    }

    return pointInEllipse(nx, ny, 0.4, 0.3, 0.24, 0.22) ||
      pointInEllipse(nx, ny, 0.55, 0.62, 0.3, 0.3) ||
      (nx >= 0.28 && nx <= 0.72 && ny >= 0.3 && ny <= 0.78);
  }

  function visibleElementContains(element, x, y) {
    return element &&
      getComputedStyle(element).display !== "none" &&
      rectContains(element.getBoundingClientRect(), x, y);
  }

  function shouldReceiveMouseAt(x, y) {
    if (getPetPeekState()) return isCatHitPoint(x, y);
    if (isDragging() || isReleasing() || hasPendingDrag()) return true;
    for (const element of overlays) {
      if (visibleElementContains(element, x, y)) return true;
    }
    return isCatHitPoint(x, y);
  }

  function update(event) {
    if (!event) {
      lastCheckAt = 0;
      const shouldReceive = lastClientPoint
        ? shouldReceiveMouseAt(lastClientPoint.x, lastClientPoint.y)
        : Boolean(isDragging() || isReleasing() || hasPendingDrag() || getPetPeekState() || body.dataset.accountNudge);
      setPetMouseEventsEnabled(shouldReceive);
      return;
    }
    lastClientPoint = { x: event.clientX, y: event.clientY };
    const now = performance.now();
    if (!isDragging() && !isReleasing() && now - lastCheckAt < MOUSE_PASSTHROUGH_CHECK_MS) return;
    lastCheckAt = now;
    setPetMouseEventsEnabled(shouldReceiveMouseAt(event.clientX, event.clientY));
  }

  function clearLastPoint() {
    lastClientPoint = null;
  }

  function init() {
    requestAnimationFrame(() => setPetMouseEventsEnabled(false));
  }

  return {
    clearLastPoint,
    init,
    isCatHitPoint,
    update,
  };
}

module.exports = {
  createMousePassthrough,
};
