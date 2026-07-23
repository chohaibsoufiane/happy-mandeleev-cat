"use strict";

// Owns speech bubble timers, base speech, thinking dots, and AI task speech.

const AI_TASK_WATCHDOG_DEFAULT_MS = 180000;
const AI_TASK_WATCHDOG_BY_AGENT = { antigravity: 3000 };
const AI_COMPLETE_VISUAL_HOLD_MS = 1600;

function createSpeech({
  bubble,
  thinkingDots,
  updateCta,
  isPetPeek,
  renderPomodoroTimerSpeech,
  tr,
  getCurrentUserName,
  playCompletionJump,
  playCompletionMeow,
  playReminderAlertOnce,
}) {
  let speechTimer = null;
  let activeSpeechKind = null;
  let baseSpeech = null;
  let layoutRaf = null;
  let aiTaskStaleTimer = null;
  let aiCompleteHoldUntil = 0;
  let aiCompleteHoldAgentId = "";

  function resetOverflow() {
    document.body.style.removeProperty("--bubble-overflow-y");
  }

  function scheduleLayout() {
    if (!bubble) return;
    if (layoutRaf) cancelAnimationFrame(layoutRaf);
    layoutRaf = requestAnimationFrame(() => {
      layoutRaf = null;
      if (!document.body.dataset.speech || bubble.offsetParent === null) {
        resetOverflow();
        return;
      }
      const top = bubble.getBoundingClientRect().top;
      const minTop = 4;
      const currentOverflow = Math.max(0, Number.parseFloat(document.body.style.getPropertyValue("--bubble-overflow-y")) || 0);
      const nextOverflow = Math.max(0, Math.ceil(currentOverflow + minTop - top));
      if (Math.abs(nextOverflow - currentOverflow) >= 1) {
        if (nextOverflow > 0) {
          document.body.style.setProperty("--bubble-overflow-y", `${nextOverflow}px`);
        } else {
          resetOverflow();
        }
      }
    });
  }

  function renderSpeech(speech) {
    if (!bubble) return;
    if (activeSpeechKind === "reminder" && (!speech || speech.kind !== "reminder")) return;
    if (updateCta && updateCta.render()) {
      resetOverflow();
      return;
    }
    if (!speech || !speech.text) {
      bubble.textContent = "";
      bubble.removeAttribute("aria-label");
      delete document.body.dataset.speech;
      resetOverflow();
      return;
    }
    if (!renderPomodoroTimerSpeech(speech)) {
      bubble.textContent = speech.kind === "thinking" ? "" : speech.text;
      bubble.setAttribute("aria-label", speech.text);
      document.body.dataset.speech = speech.kind || "notice";
    }
    scheduleLayout();
  }

  function renderBaseSpeech() {
    renderSpeech(baseSpeech);
  }

  function clearSpeech() {
    if (activeSpeechKind === "reminder") return;
    if (speechTimer) {
      clearTimeout(speechTimer);
      speechTimer = null;
    }
    activeSpeechKind = null;
    renderBaseSpeech();
  }

  function showSpeech(text, { duration = 1800, kind = "notice" } = {}) {
    if (isPetPeek() && kind !== "reminder") return;
    if (activeSpeechKind === "reminder" && kind !== "reminder") return;
    if (speechTimer) clearTimeout(speechTimer);
    activeSpeechKind = kind;
    delete document.body.dataset.speech;
    void document.body.offsetWidth;
    renderSpeech({ text, kind });
    speechTimer = setTimeout(() => {
      speechTimer = null;
      activeSpeechKind = null;
      renderBaseSpeech();
    }, duration);
  }

  function setBaseSpeech(text, kind = "timer") {
    baseSpeech = text ? { text, kind } : null;
    if (!speechTimer) renderBaseSpeech();
  }

  function clearTransientUnlessReminder() {
    if (speechTimer && activeSpeechKind !== "reminder") {
      clearTimeout(speechTimer);
      speechTimer = null;
      activeSpeechKind = null;
    }
  }

  function clearIfActiveKind(kinds) {
    const kindSet = new Set(Array.isArray(kinds) ? kinds : [kinds]);
    if (!kindSet.has(activeSpeechKind)) return;
    if (speechTimer) clearTimeout(speechTimer);
    speechTimer = null;
    activeSpeechKind = null;
    renderBaseSpeech();
  }

  function setThinkingDotsVisible(visible) {
    // dataset 값이 truthy("1")여야 shouldBlockIdleSleep의 !!dataset.thinking 체크가 동작한다.
    // (toggleAttribute는 빈 속성 data-thinking=""을 만들어 dataset.thinking이 falsy가 됨 → 잠듦 버그)
    if (visible) document.body.dataset.thinking = "1";
    else delete document.body.dataset.thinking;
    if (thinkingDots) thinkingDots.setAttribute("aria-hidden", visible ? "false" : "true");
  }

  function clearAiTaskStaleTimer() {
    if (!aiTaskStaleTimer) return;
    clearTimeout(aiTaskStaleTimer);
    aiTaskStaleTimer = null;
  }

  function playAiComplete(event) {
    if (isPetPeek()) return;
    aiCompleteHoldUntil = Date.now() + AI_COMPLETE_VISUAL_HOLD_MS;
    aiCompleteHoldAgentId = event && event.agentId ? event.agentId : "";
    setThinkingDotsVisible(false);
    playCompletionJump();
    playCompletionMeow();
    showSpeech(tr("agentComplete"), { kind: "complete" });
  }

  function playAiNotification() {
    if (isPetPeek()) return;
    setThinkingDotsVisible(false);
    playReminderAlertOnce();
    showSpeech(tr("needsAttention", getCurrentUserName()), { duration: 5200, kind: "agent-notification" });
  }

  function applyAiTaskState(event) {
    const state = event && typeof event.state === "string" ? event.state : "";
    const active = state === "thinking" || state === "working";
    const agentId = event && event.agentId;
    if (active && Date.now() < aiCompleteHoldUntil && (!aiCompleteHoldAgentId || aiCompleteHoldAgentId === agentId)) {
      return;
    }
    setThinkingDotsVisible(active);
    clearAiTaskStaleTimer();
    if (active) {
      const timeout = AI_TASK_WATCHDOG_BY_AGENT[agentId] || AI_TASK_WATCHDOG_DEFAULT_MS;
      aiTaskStaleTimer = setTimeout(() => {
        aiTaskStaleTimer = null;
        setThinkingDotsVisible(false);
      }, timeout);
    }
  }

  return {
    applyAiTaskState,
    clearIfActiveKind,
    clearSpeech,
    clearTransientUnlessReminder,
    playAiComplete,
    playAiNotification,
    renderBaseSpeech,
    renderSpeech,
    setBaseSpeech,
    setThinkingDotsVisible,
    showSpeech,
  };
}

module.exports = {
  createSpeech,
};
