"use strict";

// Duration picker shown before renderer-side share recording starts.

function createShareDurationEditor({
  editor,
  input,
  cancelButton,
  keyboardFocus,
  isShareRecording,
  startShareRecording,
}) {
  function open() {
    if (!editor || !input || (isShareRecording && isShareRecording())) return;
    input.value = input.value || "5";
    document.body.dataset.editingShareDuration = "1";
    keyboardFocus.focusInput(input);
  }

  function close() {
    delete document.body.dataset.editingShareDuration;
    keyboardFocus.update();
  }

  function bind() {
    if (editor && input) {
      editor.addEventListener("submit", (event) => {
        event.preventDefault();
        const durationSec = Math.max(5, Math.min(30, Math.round(Number(input.value) || 5)));
        close();
        startShareRecording(durationSec);
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
  createShareDurationEditor,
};
