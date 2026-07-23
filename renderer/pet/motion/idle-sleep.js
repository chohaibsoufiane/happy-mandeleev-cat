"use strict";

// Idle inactivity sleep state and wake transition.

const IDLE_SLEEP_TIMEOUT_MS = 5000;
const IDLE_SLEEP_RETRY_MS = 1000;
const IDLE_WAKE_RETURN_MS = 620;

function createIdleSleepMotion({
  body = document.body,
  ensureSvgObjectReady,
  shouldBlockSleep,
  setIdleSvgClass,
  stopHuntingPose,
  stopPurring,
} = {}) {
  let idleTimer = null;
  let wakeTimer = null;
  let sleeping = false;

  function clearIdleTimer() {
    if (!idleTimer) return;
    clearTimeout(idleTimer);
    idleTimer = null;
  }

  function schedule(delayMs = IDLE_SLEEP_TIMEOUT_MS) {
    clearIdleTimer();
    idleTimer = setTimeout(() => {
      idleTimer = null;
      sleep();
    }, delayMs);
  }

  function sleep() {
    if (sleeping) return false;
    if (typeof shouldBlockSleep === "function" && shouldBlockSleep()) {
      schedule(IDLE_SLEEP_RETRY_MS);
      return false;
    }
    if (typeof stopHuntingPose === "function") stopHuntingPose();
    if (typeof stopPurring === "function") stopPurring();
    ensureSvgObjectReady("cat");
    clearTimeout(wakeTimer);
    wakeTimer = null;
    delete body.dataset.idleWake;
    body.dataset.idleSleep = "1";
    if (typeof setIdleSvgClass === "function") {
      setIdleSvgClass("idle-sleep-return", false);
      setIdleSvgClass("idle-sleep", true);
    }
    sleeping = true;
    return true;
  }

  function wake() {
    clearIdleTimer();
    if (!sleeping) {
      schedule();
      return false;
    }
    sleeping = false;
    delete body.dataset.idleSleep;
    body.dataset.idleWake = "1";
    if (typeof setIdleSvgClass === "function") {
      setIdleSvgClass("idle-sleep", false);
      setIdleSvgClass("idle-sleep-return", true);
    }
    clearTimeout(wakeTimer);
    wakeTimer = setTimeout(() => {
      wakeTimer = null;
      delete body.dataset.idleWake;
      if (typeof setIdleSvgClass === "function") setIdleSvgClass("idle-sleep-return", false);
    }, IDLE_WAKE_RETURN_MS);
    schedule();
    return true;
  }

  function recordActivity() {
    if (sleeping) return wake();
    schedule();
    return false;
  }

  function stop() {
    clearIdleTimer();
    clearTimeout(wakeTimer);
    wakeTimer = null;
    sleeping = false;
    delete body.dataset.idleSleep;
    delete body.dataset.idleWake;
    if (typeof setIdleSvgClass === "function") {
      setIdleSvgClass("idle-sleep", false);
      setIdleSvgClass("idle-sleep-return", false);
    }
  }

  return {
    isSleeping: () => sleeping,
    recordActivity,
    schedule,
    sleep,
    stop,
    wake,
  };
}

module.exports = {
  createIdleSleepMotion,
};
