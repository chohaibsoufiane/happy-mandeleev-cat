"use strict";

// Right-click stretch break animation sequence.

const STRETCH_DURATION_MS = 3000;

function createBreakStretchMotion({
  electronAPI,
  domDocument = document,
  ensureSvgObjectReady,
  onBeforeStretch,
  onStretchHeatStart,
  onStretchHeatCooldown,
  onStretchHeatReset,
}) {
  let stretchingTimers = [];
  let pendingStretchAnimation = 0;
  let pendingStretchLoadListener = null;

  function clearPendingStretchLoadListener() {
    if (pendingStretchLoadListener) {
      const obj = domDocument.getElementById("stretch-pose-default");
      if (obj) obj.removeEventListener("load", pendingStretchLoadListener);
      pendingStretchLoadListener = null;
    }
  }

  function clearStretchingTimers() {
    pendingStretchAnimation += 1;
    for (const timer of stretchingTimers) clearTimeout(timer);
    stretchingTimers = [];
    clearPendingStretchLoadListener();
  }

  function requestStretchPoseAnimation() {
    const token = ++pendingStretchAnimation;
    if (pendingStretchLoadListener) {
      const obj = domDocument.getElementById("stretch-pose-default");
      if (obj) obj.removeEventListener("load", pendingStretchLoadListener);
      pendingStretchLoadListener = null;
    }
    const startedAt = performance.now();
    const tryStart = () => {
      if (token !== pendingStretchAnimation || !domDocument.body.dataset.stretching) return;
      if (setStretchPoseAnimating(true)) {
        clearPendingStretchLoadListener();
        return;
      }
      if (performance.now() - startedAt < STRETCH_DURATION_MS) requestAnimationFrame(tryStart);
    };
    const obj = domDocument.getElementById("stretch-pose-default");
    if (obj) {
      pendingStretchLoadListener = () => {
        if (token !== pendingStretchAnimation || !domDocument.body.dataset.stretching) return;
        requestAnimationFrame(tryStart);
      };
      obj.addEventListener("load", pendingStretchLoadListener, { once: true });
    }
    requestAnimationFrame(() => requestAnimationFrame(tryStart));
  }

  function setStretchPoseAnimating(active) {
    const obj = domDocument.getElementById("stretch-pose-default");
    if (!obj) return false;
    const doc = ensureSvgObjectReady("stretch-pose-default");
    if (!doc || !doc.documentElement) return false;
    const root = doc.documentElement;
    if (active) {
      root.classList.remove("stretching");
      void root.getBoundingClientRect();
      root.classList.add("stretching");
    } else {
      root.classList.remove("stretching");
    }
    return true;
  }

  function cancel() {
    clearStretchingTimers();
    pendingStretchAnimation += 1;
    clearPendingStretchLoadListener();
    setStretchPoseAnimating(false);
    delete domDocument.body.dataset.stretching;
    onStretchHeatReset();
  }

  function start() {
    onBeforeStretch();
    clearStretchingTimers();
    ensureSvgObjectReady("stretch-pose-default");
    domDocument.body.dataset.stretching = "ing";
    requestStretchPoseAnimation();
    onStretchHeatStart();
    stretchingTimers.push(setTimeout(() => {
      onStretchHeatCooldown();
    }, STRETCH_DURATION_MS * 0.7));
    stretchingTimers.push(setTimeout(() => {
      pendingStretchAnimation += 1;
      clearPendingStretchLoadListener();
      setStretchPoseAnimating(false);
      delete domDocument.body.dataset.stretching;
    }, STRETCH_DURATION_MS));
  }

  function bind() {
    electronAPI.onDoStretch(start);
    if (electronAPI.onCancelStretch) {
      electronAPI.onCancelStretch(cancel);
    }
  }

  return {
    bind,
    cancel,
    start,
  };
}

module.exports = {
  createBreakStretchMotion,
};
