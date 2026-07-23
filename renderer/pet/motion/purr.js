"use strict";

// Idle head stroke purr interaction.

const PURR_IDLE_TIMEOUT_MS = 420;
const PURR_ANALYTICS_THRESHOLD_MS = 2000;
const PURR_UPDATE_MIN_INTERVAL_MS = 66;
const PURR_TIMEOUT_REFRESH_MS = 180;

function rectContains(rect, x, y) {
  return x >= rect.left && x <= rect.right && y >= rect.top && y <= rect.bottom;
}

function normalizedPointInElement(el, x, y) {
  if (!el) return null;
  const rect = el.getBoundingClientRect();
  if (rect.width <= 0 || rect.height <= 0 || !rectContains(rect, x, y)) return null;
  return {
    nx: (x - rect.left) / rect.width,
    ny: (y - rect.top) / rect.height,
  };
}

function createPurrInteraction({
  body = document.body,
  catObject,
  isIdlePoseInteractive,
  setIdleSvgClass,
  captureAnalytics,
  startPurringSound,
  stopPurringSound,
}) {
  let purrStopTimer = null;
  let purrAnalyticsTimer = null;
  let purrWanted = false;
  let purrStartedAt = 0;
  let purrStrokeCaptured = false;
  let lastPurrUpdateAt = 0;
  let lastPurrTimeoutRefreshAt = 0;
  let lastPurrFaceX = 0;
  let lastPurrFaceY = 0;

  function idleSvgRoot() {
    const doc = catObject && catObject.contentDocument;
    return doc && doc.documentElement ? doc.documentElement : null;
  }

  function setPurrFaceOffset(x, y) {
    const root = idleSvgRoot();
    if (!root) return;
    if (Math.abs(x - lastPurrFaceX) < 0.08 && Math.abs(y - lastPurrFaceY) < 0.08) return;
    lastPurrFaceX = x;
    lastPurrFaceY = y;
    root.style.setProperty("--purr-face-x", `${x.toFixed(2)}px`);
    root.style.setProperty("--purr-face-y", `${y.toFixed(2)}px`);
  }

  function purrFaceOffsetForPoint(x, y) {
    const point = normalizedPointInElement(catObject, x, y);
    if (!point) return { x: 0, y: 0 };
    const dx = Math.max(-1, Math.min(1, (point.nx - 0.40) / 0.25));
    const dy = Math.max(-1, Math.min(1, (point.ny - 0.33) / 0.23));
    return {
      x: dx * 1.15,
      y: dy * 0.75,
    };
  }

  function start(clientX, clientY) {
    if (!isIdlePoseInteractive()) return;
    const now = performance.now();
    const shouldRefreshPose = !purrWanted || now - lastPurrUpdateAt >= PURR_UPDATE_MIN_INTERVAL_MS;
    if (shouldRefreshPose) {
      lastPurrUpdateAt = now;
      const offset = purrFaceOffsetForPoint(clientX, clientY);
      setPurrFaceOffset(offset.x, offset.y);
    }
    if (!purrWanted) {
      setIdleSvgClass("purring", true);
      body.dataset.purring = "1";
      purrStartedAt = now;
      purrStrokeCaptured = false;
      clearTimeout(purrAnalyticsTimer);
      purrAnalyticsTimer = setTimeout(() => {
        const purrDurationMs = performance.now() - purrStartedAt;
        if (!purrWanted || purrStrokeCaptured || purrDurationMs < PURR_ANALYTICS_THRESHOLD_MS) return;
        purrStrokeCaptured = true;
        captureAnalytics("pet_stroked", { duration_bucket: "2s+" });
      }, PURR_ANALYTICS_THRESHOLD_MS);
    }
    purrWanted = true;
    startPurringSound({
      isPurrWanted: () => purrWanted,
      onPurrUnwanted: stop,
    });
    if (now - lastPurrTimeoutRefreshAt >= PURR_TIMEOUT_REFRESH_MS) {
      lastPurrTimeoutRefreshAt = now;
      scheduleStop(PURR_IDLE_TIMEOUT_MS);
    }
  }

  function scheduleStop(delayMs) {
    clearTimeout(purrStopTimer);
    purrStopTimer = setTimeout(stop, delayMs);
  }

  function stop() {
    purrWanted = false;
    purrStartedAt = 0;
    purrStrokeCaptured = false;
    lastPurrUpdateAt = 0;
    lastPurrTimeoutRefreshAt = 0;
    setIdleSvgClass("purring", false);
    delete body.dataset.purring;
    setPurrFaceOffset(0, 0);
    clearTimeout(purrStopTimer);
    purrStopTimer = null;
    clearTimeout(purrAnalyticsTimer);
    purrAnalyticsTimer = null;
    stopPurringSound();
  }

  return {
    scheduleStop,
    start,
    stop,
  };
}

module.exports = {
  createPurrInteraction,
};
