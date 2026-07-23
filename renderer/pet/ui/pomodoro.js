"use strict";

// Pomodoro timer speech UI and renderer-side state projection.

function createPomodoroUi({
  bubble,
  electronAPI,
  tr,
  getFixedMessage,
  setBaseSpeech,
  clearTransientUnlessReminder,
}) {
  let currentState = null;

  function formatTime(totalSec) {
    const sec = Math.max(0, Math.floor(Number(totalSec) || 0));
    const min = Math.floor(sec / 60);
    const rest = sec % 60;
    return `${String(min).padStart(2, "0")}:${String(rest).padStart(2, "0")}`;
  }

  function createIcon(kind) {
    const svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
    svg.setAttribute("class", "pomodoro-icon");
    svg.setAttribute("viewBox", "0 0 12 12");
    svg.setAttribute("aria-hidden", "true");
    svg.setAttribute("focusable", "false");

    const addRect = (x, y, width, height) => {
      const rect = document.createElementNS("http://www.w3.org/2000/svg", "rect");
      rect.setAttribute("x", String(x));
      rect.setAttribute("y", String(y));
      rect.setAttribute("width", String(width));
      rect.setAttribute("height", String(height));
      rect.setAttribute("fill", "currentColor");
      svg.appendChild(rect);
    };

    if (kind === "pause") {
      addRect(3, 2, 2, 8);
      addRect(7, 2, 2, 8);
    } else if (kind === "play") {
      addRect(3, 2, 2, 8);
      addRect(5, 3, 2, 6);
      addRect(7, 4, 2, 4);
      addRect(9, 5, 1, 2);
    } else {
      addRect(3, 3, 2, 2);
      addRect(7, 3, 2, 2);
      addRect(5, 5, 2, 2);
      addRect(3, 7, 2, 2);
      addRect(7, 7, 2, 2);
    }

    return svg;
  }

  function renderTimerSpeech(speech) {
    if (!bubble || !speech || speech.kind !== "timer" || !currentState || !currentState.visible) {
      return false;
    }

    bubble.textContent = "";
    const fixedMessage = String(getFixedMessage() || "").trim();
    if (fixedMessage) {
      const message = document.createElement("span");
      message.className = "pomodoro-fixed-message";
      message.textContent = fixedMessage;
      bubble.appendChild(message);
    }

    const timerRow = document.createElement("span");
    timerRow.className = "pomodoro-timer-row";

    const text = document.createElement("span");
    text.className = "pomodoro-timer-text";
    text.textContent = speech.text;
    timerRow.appendChild(text);

    const controls = document.createElement("span");
    controls.className = "pomodoro-controls";

    const pauseButton = document.createElement("button");
    pauseButton.type = "button";
    pauseButton.className = "pomodoro-control";
    pauseButton.appendChild(createIcon(currentState.running ? "pause" : "play"));
    pauseButton.title = currentState.running ? tr("pomodoroPause") : tr("pomodoroResume");
    pauseButton.setAttribute("aria-label", pauseButton.title);
    pauseButton.addEventListener("click", (event) => {
      event.stopPropagation();
      const action = currentState && currentState.running ?
        electronAPI.pomodoroPause() :
        electronAPI.pomodoroStart();
      action.then(applyState).catch(() => {});
    });
    controls.appendChild(pauseButton);

    const resetButton = document.createElement("button");
    resetButton.type = "button";
    resetButton.className = "pomodoro-control";
    resetButton.appendChild(createIcon("reset"));
    resetButton.title = tr("pomodoroReset");
    resetButton.setAttribute("aria-label", resetButton.title);
    resetButton.addEventListener("click", (event) => {
      event.stopPropagation();
      electronAPI.pomodoroReset().then(applyState).catch(() => {});
    });
    controls.appendChild(resetButton);

    timerRow.appendChild(controls);
    bubble.appendChild(timerRow);
    bubble.setAttribute("aria-label", fixedMessage ? `${fixedMessage} ${speech.text}` : speech.text);
    document.body.dataset.speech = "timer";
    return true;
  }

  function refreshBaseSpeech() {
    if (currentState && currentState.visible) {
      setBaseSpeech(formatTime(currentState.remainingSec), "timer");
      return;
    }
    setBaseSpeech(getFixedMessage(), "fixed");
  }

  function applyState(state) {
    currentState = state || null;
    if (!state || !state.visible) {
      currentState = null;
      delete document.body.dataset.pomodoro;
      delete document.body.dataset.pomodoroMode;
      delete document.body.dataset.pomodoroPaused;
      clearTransientUnlessReminder();
      refreshBaseSpeech();
      return;
    }
    const mode = state.mode === "rest" ? "rest" : "focus";
    currentState = state;
    document.body.dataset.pomodoro = "1";
    document.body.dataset.pomodoroMode = mode;
    document.body.toggleAttribute("data-pomodoro-paused", !state.running);
    refreshBaseSpeech();
  }

  function refresh() {
    applyState(currentState);
  }

  function getState() {
    return currentState;
  }

  return {
    applyState,
    formatTime,
    getState,
    refresh,
    refreshBaseSpeech,
    renderTimerSpeech,
  };
}

module.exports = {
  createPomodoroUi,
};
