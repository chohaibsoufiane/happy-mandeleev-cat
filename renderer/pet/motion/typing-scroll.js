"use strict";

// Typing press pose, scroll-unroll animation, and pomodoro focus-start typing motion.

const PRESS_RELEASE_MS = 180;
const PRESS_POSE_MIN_INTERVAL_MS = 70;
const SCROLL_RELEASE_MS = 360;
const SCROLL_PAPER_START_H = 17;
const SCROLL_PAPER_END_H = 32.5;
const SCROLL_PAPER_UNROLL_MS = 220;
const SCROLL_PAPER_FRAME_MS = 50;
const SCROLL_RELEASE_REFRESH_MS = 90;
const SCROLL_DETAIL_PULSE_INTERVAL_MS = 820;
const SCROLL_DETAIL_PULSE_MS = 700;

function createTypingScrollMotion({
  electronAPI,
  domDocument = document,
  ensureSvgObjectReady,
  preparePressPoseForTyping,
  fmtSvg,
  setAttrIfChanged,
  getPetPeekState,
  isStretching,
  isDragging,
  stopHuntingPose,
  stopCompletionJump,
  wakeIdleSleep,
  addKeyTimestamp,
  scheduleHeatTick,
  clearPomodoroSpeech,
}) {
  let pressIdx = 0;
  let pressReleaseTimer = null;
  let lastPressPoseAt = 0;
  let scrollReleaseTimer = null;
  let scrollPaperRaf = null;
  let scrollDetailPulseInterval = null;
  let scrollDetailPulseTimer = null;
  let lastScrollPaperFrameAt = 0;
  let lastScrollPaperHeight = "";
  let lastScrollReleaseRefreshAt = 0;
  let focusStartTypingTimer = null;
  let pomodoroPoseMarkerTimer = null;

  function clearPress() {
    clearTimeout(pressReleaseTimer);
    pressReleaseTimer = null;
    delete domDocument.body.dataset.press;
  }

  function setPressPose(nextPress) {
    preparePressPoseForTyping();
    domDocument.body.dataset.press = nextPress;
  }

  function nextPressSide() {
    pressIdx += 1;
    return pressIdx % 2 === 0 ? "left" : "right";
  }

  function setPomodoroPoseMarker(kind, durationMs) {
    clearTimeout(pomodoroPoseMarkerTimer);
    pomodoroPoseMarkerTimer = null;
    delete domDocument.body.dataset.pomodoroFocusStart;
    if (kind === "focus") domDocument.body.dataset.pomodoroFocusStart = "1";
    else return;
    pomodoroPoseMarkerTimer = setTimeout(() => {
      delete domDocument.body.dataset.pomodoroFocusStart;
      pomodoroPoseMarkerTimer = null;
    }, durationMs);
  }

  function cancelFocusStartTyping() {
    if (focusStartTypingTimer) {
      clearInterval(focusStartTypingTimer);
      focusStartTypingTimer = null;
    }
  }

  function cancelPomodoroMotion() {
    const hadFocusStartMotion = Boolean(focusStartTypingTimer || domDocument.body.dataset.pomodoroFocusStart);
    cancelFocusStartTyping();
    clearTimeout(pomodoroPoseMarkerTimer);
    pomodoroPoseMarkerTimer = null;
    delete domDocument.body.dataset.pomodoroFocusStart;
    if (hadFocusStartMotion) clearPress();
    clearPomodoroSpeech();
  }

  function scrollSvgObject() {
    return domDocument.getElementById("scroll-unroll");
  }

  function scrollSvgDoc() {
    const scrollObj = scrollSvgObject();
    return scrollObj ? scrollObj.contentDocument : null;
  }

  function clearScrollPaperTimers() {
    if (scrollPaperRaf !== null) {
      cancelAnimationFrame(scrollPaperRaf);
      scrollPaperRaf = null;
    }
    lastScrollPaperFrameAt = 0;
  }

  function setScrollPaperHeight(height) {
    const doc = scrollSvgDoc();
    const mask = doc && doc.getElementById("paper-strip-mask");
    const nextHeight = fmtSvg(height);
    if (mask && nextHeight !== lastScrollPaperHeight) {
      lastScrollPaperHeight = nextHeight;
      setAttrIfChanged(mask, "height", nextHeight);
    }
  }

  function resetScrollSvgAnimation() {
    clearScrollPaperTimers();
    setScrollPaperHeight(SCROLL_PAPER_START_H);
  }

  function setScrollDetailPulse(active) {
    const doc = scrollSvgDoc();
    if (!doc || !doc.documentElement) return false;
    doc.documentElement.classList.toggle("scroll-detail-pulse", !!active);
    return true;
  }

  function pulseScrollDetails() {
    if (!domDocument.body.dataset.scroll) return;
    if (!setScrollDetailPulse(false)) return;
    const doc = scrollSvgDoc();
    if (doc && doc.documentElement) void doc.documentElement.getBoundingClientRect();
    setScrollDetailPulse(true);
    clearTimeout(scrollDetailPulseTimer);
    scrollDetailPulseTimer = setTimeout(() => {
      scrollDetailPulseTimer = null;
      setScrollDetailPulse(false);
    }, SCROLL_DETAIL_PULSE_MS);
  }

  function startScrollDetailPulse() {
    pulseScrollDetails();
    if (scrollDetailPulseInterval !== null) return;
    scrollDetailPulseInterval = setInterval(pulseScrollDetails, SCROLL_DETAIL_PULSE_INTERVAL_MS);
  }

  function stopScrollDetailPulse() {
    if (scrollDetailPulseInterval !== null) {
      clearInterval(scrollDetailPulseInterval);
      scrollDetailPulseInterval = null;
    }
    clearTimeout(scrollDetailPulseTimer);
    scrollDetailPulseTimer = null;
    setScrollDetailPulse(false);
  }

  function restartScrollSvgAnimation() {
    resetScrollSvgAnimation();
    const startedAt = performance.now();
    const step = (now) => {
      if (lastScrollPaperFrameAt && now - lastScrollPaperFrameAt < SCROLL_PAPER_FRAME_MS) {
        scrollPaperRaf = requestAnimationFrame(step);
        return;
      }
      lastScrollPaperFrameAt = now;
      const t = Math.min(1, (now - startedAt) / SCROLL_PAPER_UNROLL_MS);
      const eased = 1 - Math.pow(1 - t, 3);
      const height = SCROLL_PAPER_START_H + (SCROLL_PAPER_END_H - SCROLL_PAPER_START_H) * eased;
      setScrollPaperHeight(height);
      if (t < 1) {
        scrollPaperRaf = requestAnimationFrame(step);
      } else {
        scrollPaperRaf = null;
      }
    };
    scrollPaperRaf = requestAnimationFrame(step);
  }

  function stopScrollAnimation() {
    delete domDocument.body.dataset.scroll;
    clearTimeout(scrollReleaseTimer);
    scrollReleaseTimer = null;
    lastScrollReleaseRefreshAt = 0;
    stopScrollDetailPulse();
    resetScrollSvgAnimation();
  }

  function handleKeyPressed() {
    const now = Date.now();
    if (typeof wakeIdleSleep === "function" && wakeIdleSleep()) return;
    if (getPetPeekState()) return;
    if (isStretching()) return;
    if (!isDragging()) {
      stopHuntingPose();
      stopCompletionJump();
      stopScrollAnimation();
      if (now - lastPressPoseAt >= PRESS_POSE_MIN_INTERVAL_MS) {
        lastPressPoseAt = now;
        setPressPose(nextPressSide());
      }
      clearTimeout(pressReleaseTimer);
      pressReleaseTimer = setTimeout(() => {
        delete domDocument.body.dataset.press;
      }, PRESS_RELEASE_MS);
    }
    addKeyTimestamp(now);
    scheduleHeatTick();
  }

  function handlePomodoroFocusStart() {
    if (isDragging() || isStretching()) return;
    setPomodoroPoseMarker("focus", 1600);
    if (focusStartTypingTimer) clearInterval(focusStartTypingTimer);
    stopCompletionJump();
    stopScrollAnimation();
    clearTimeout(pressReleaseTimer);
    let count = 0;
    focusStartTypingTimer = setInterval(() => {
      setPressPose(nextPressSide());
      addKeyTimestamp(Date.now());
      scheduleHeatTick();
      count++;
      if (count >= 10) {
        clearInterval(focusStartTypingTimer);
        focusStartTypingTimer = null;
        pressReleaseTimer = setTimeout(() => {
          delete domDocument.body.dataset.press;
        }, PRESS_RELEASE_MS);
      }
    }, 110);
  }

  function handleMouseWheel() {
    if (typeof wakeIdleSleep === "function" && wakeIdleSleep()) return;
    if (getPetPeekState()) return;
    if (isStretching() || isDragging() || domDocument.body.dataset.press || domDocument.body.dataset.jump) return;
    ensureSvgObjectReady("scroll-unroll");
    const now = performance.now();
    if (!domDocument.body.dataset.scroll) {
      restartScrollSvgAnimation();
      domDocument.body.dataset.scroll = "unroll";
      startScrollDetailPulse();
    } else if (now - lastScrollReleaseRefreshAt < SCROLL_RELEASE_REFRESH_MS) {
      return;
    }
    lastScrollReleaseRefreshAt = now;
    clearTimeout(scrollReleaseTimer);
    scrollReleaseTimer = setTimeout(() => {
      stopScrollAnimation();
    }, SCROLL_RELEASE_MS);
  }

  function bind() {
    electronAPI.onKeyPressed(handleKeyPressed);
    electronAPI.onPomodoroFocusStart(handlePomodoroFocusStart);
    if (electronAPI.onCancelPomodoroMotion) {
      electronAPI.onCancelPomodoroMotion(cancelPomodoroMotion);
    }
    electronAPI.onMouseWheel(handleMouseWheel);
  }

  return {
    bind,
    cancelFocusStartTyping,
    cancelPomodoroMotion,
    clearPress,
    stopScrollAnimation,
  };
}

module.exports = {
  createTypingScrollMotion,
};
