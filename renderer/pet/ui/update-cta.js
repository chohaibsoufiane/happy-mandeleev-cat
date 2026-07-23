"use strict";

// Renders update status as a clickable CTA inside the speech bubble.

function createUpdateCta({ bubble, electronAPI, tr, setPetMouseEventsEnabled }) {
  let state = null;

  function textForState(nextState) {
    if (!nextState) return "";
    if (nextState.state === "checking") return tr("updateChecking");
    if (nextState.state === "available") return tr("updateAvailable");
    if (nextState.state === "none") return tr("updateNone");
    if (nextState.state === "downloading") return tr("updateDownloading", nextState.percent ?? null);
    if (nextState.state === "restarting") return tr("updateRestarting");
    return "";
  }

  function render() {
    if (!bubble || !state) return false;
    const text = textForState(state);
    if (!text) return false;

    bubble.textContent = "";
    const button = document.createElement("button");
    button.type = "button";
    button.className = "update-cta-button";
    button.textContent = text;
    button.disabled = state.state === "checking" || state.state === "none" || state.state === "downloading";
    const keepClickable = () => setPetMouseEventsEnabled(true);
    const keepPointer = (event) => {
      keepClickable();
      event.stopPropagation();
    };
    const press = () => {
      button.classList.add("is-pressed");
      setTimeout(() => {
        button.classList.remove("is-pressed");
      }, 160);
    };
    bubble.addEventListener("pointerenter", keepClickable, { once: true });
    bubble.addEventListener("pointermove", keepClickable, { once: true });
    bubble.addEventListener("mouseenter", keepClickable, { once: true });
    button.addEventListener("mouseenter", keepClickable);
    button.addEventListener("mousemove", keepClickable);
    button.addEventListener("pointerenter", keepClickable);
    button.addEventListener("pointermove", keepClickable);
    button.addEventListener("pointerdown", (event) => {
      keepPointer(event);
      press();
    });
    button.addEventListener("mousedown", keepPointer);
    button.addEventListener("click", () => {
      if (state.state === "available") {
        press();
        state = { ...state, state: "downloading", percent: null };
        render();
        electronAPI.updateDownload().catch(() => {});
      }
    });
    bubble.appendChild(button);
    bubble.setAttribute("aria-label", text);
    document.body.dataset.speech = "update";
    keepClickable();
    return true;
  }

  function applyState(nextState, renderBaseSpeech) {
    if (!nextState || nextState.state === "idle") state = null;
    else state = nextState;
    renderBaseSpeech();
    if (nextState && nextState.state === "none") {
      setTimeout(() => {
        if (!state || state.state !== "none") return;
        state = null;
        renderBaseSpeech();
      }, 3000);
    }
  }

  return {
    applyState,
    render,
  };
}

module.exports = {
  createUpdateCta,
};
