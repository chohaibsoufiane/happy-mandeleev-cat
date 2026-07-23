"use strict";

// Cursor shake detection and hunting pose state.

const SHAKE_SPEED_THRESHOLD = 11.2;
const SHAKE_TRIGGER_ENERGY = 2.34;
const SHAKE_ENERGY_DECAY = 0.82;
const HUNTING_DURATION_MS = 1100;
const HUNTING_RETURN_DURATION_MS = 420;

function createHuntingMotion({
  electronAPI,
  body = document.body,
  canShow,
  stopPurring,
  setIdleSvgClass,
}) {
  let huntingTimer = null;
  let huntingReturnTimer = null;
  let lastCursorSample = null;
  let shakeEnergy = 0;

  function updateShakeDetection(dx, dy) {
    const now = performance.now();
    if (!lastCursorSample) {
      lastCursorSample = { dx, dy, vx: 0, vy: 0, t: now };
      return;
    }

    const dt = Math.max(1, now - lastCursorSample.t);
    const vx = (dx - lastCursorSample.dx) / dt * 16;
    const vy = (dy - lastCursorSample.dy) / dt * 16;
    const speed = Math.hypot(vx, vy);
    const prevSpeed = Math.hypot(lastCursorSample.vx, lastCursorSample.vy);
    const dot = vx * lastCursorSample.vx + vy * lastCursorSample.vy;
    const reversed = prevSpeed > 0 && speed > 0 && dot / (speed * prevSpeed) < -0.28;
    const acceleration = Math.max(0, speed - prevSpeed);

    shakeEnergy *= SHAKE_ENERGY_DECAY;
    if (canShow() && speed > SHAKE_SPEED_THRESHOLD) {
      shakeEnergy += Math.min(0.22, (speed - SHAKE_SPEED_THRESHOLD) / 42);
      if (reversed && speed > SHAKE_SPEED_THRESHOLD * 1.28) {
        shakeEnergy += Math.min(0.42, (speed - SHAKE_SPEED_THRESHOLD) / 34 + 0.12);
      }
      if (acceleration > 14) shakeEnergy += Math.min(0.18, acceleration / 52);
      if (speed > SHAKE_SPEED_THRESHOLD * 3.2 && acceleration > 18) {
        shakeEnergy += 0.28;
      }
    }

    if (shakeEnergy >= SHAKE_TRIGGER_ENERGY) {
      shakeEnergy = SHAKE_TRIGGER_ENERGY * 0.35;
      start();
    }

    lastCursorSample = { dx, dy, vx, vy, t: now };
  }

  function resetCursorState() {
    lastCursorSample = null;
    shakeEnergy = 0;
  }

  function start() {
    if (!canShow()) return;
    stopPurring();
    clearTimeout(huntingReturnTimer);
    huntingReturnTimer = null;
    delete body.dataset.huntingReturn;
    setIdleSvgClass("hunting-return", false);
    electronAPI.setHuntingMode(true);
    setIdleSvgClass("hunting", true);
    body.dataset.hunting = "1";
    clearTimeout(huntingTimer);
    huntingTimer = setTimeout(stop, HUNTING_DURATION_MS);
  }

  function stop() {
    const wasHunting = !!body.dataset.hunting;
    setIdleSvgClass("hunting", false);
    delete body.dataset.hunting;
    if (wasHunting) electronAPI.setHuntingMode(false);
    clearTimeout(huntingTimer);
    huntingTimer = null;
    if (wasHunting) {
      setIdleSvgClass("hunting-return", true);
      body.dataset.huntingReturn = "1";
      clearTimeout(huntingReturnTimer);
      huntingReturnTimer = setTimeout(() => {
        setIdleSvgClass("hunting-return", false);
        delete body.dataset.huntingReturn;
        huntingReturnTimer = null;
      }, HUNTING_RETURN_DURATION_MS);
    }
  }

  return {
    resetCursorState,
    start,
    stop,
    updateShakeDetection,
  };
}

module.exports = {
  createHuntingMotion,
};
