"use strict";

// Coordinates pet-window focusability while renderer input fields are open.

function createKeyboardFocus({ electronAPI, setPetMouseEventsEnabled, wantsFocus }) {
  function setMode(enabled) {
    if (!electronAPI || typeof electronAPI.setPetFocusable !== "function") return;
    electronAPI.setPetFocusable(!!enabled);
  }

  function update() {
    setMode(!!(wantsFocus && wantsFocus()));
  }

  function focusInput(input) {
    if (!input) return;
    if (typeof setPetMouseEventsEnabled === "function") setPetMouseEventsEnabled(true);
    setMode(true);
    const focus = () => {
      if (!document.body.contains(input)) return;
      input.focus({ preventScroll: true });
      input.select();
    };
    focus();
    requestAnimationFrame(focus);
    setTimeout(focus, 30);
    setTimeout(focus, 120);
  }

  return {
    focusInput,
    setMode,
    update,
  };
}

module.exports = {
  createKeyboardFocus,
};
