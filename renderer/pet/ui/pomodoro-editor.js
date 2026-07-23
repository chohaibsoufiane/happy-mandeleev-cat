"use strict";

// Focus/rest minute editor for the pomodoro timer.

function createPomodoroEditor({
  editor,
  input,
  cancelButton,
  electronAPI,
  keyboardFocus,
  applyPomodoroState,
}) {
  let mode = "focus";

  function open(initialMin, nextMode = "focus") {
    if (!editor || !input) return;
    mode = nextMode === "rest" ? "rest" : "focus";
    const max = mode === "rest" ? 60 : 180;
    const fallback = mode === "rest" ? 5 : 25;
    const min = Math.max(1, Math.min(max, Math.round(Number(initialMin) || fallback)));
    input.max = String(max);
    input.value = String(min);
    document.body.dataset.editingPomodoroFocus = "1";
    keyboardFocus.focusInput(input);
  }

  function close() {
    delete document.body.dataset.editingPomodoroFocus;
    keyboardFocus.update();
  }

  function bind() {
    if (editor && input) {
      editor.addEventListener("submit", async (event) => {
        event.preventDefault();
        const max = mode === "rest" ? 60 : 180;
        const fallback = mode === "rest" ? 5 : 25;
        const min = Math.max(1, Math.min(max, Math.round(Number(input.value) || fallback)));
        const state = mode === "rest" ?
          await electronAPI.pomodoroRestSet(min) :
          await electronAPI.pomodoroFocusSet(min);
        applyPomodoroState(state);
        close();
      });
    }

    if (cancelButton) {
      cancelButton.addEventListener("click", () => close());
    }
  }

  return {
    bind,
    close,
    open,
  };
}

module.exports = {
  createPomodoroEditor,
};
