"use strict";

// Applies pet peek state from the main process and coordinates dependent UI state.

function createPeekState({
  electronAPI,
  body = document.body,
  ensureSvgObjectReady,
  setPressLeftPeekFaceOnly,
  initPeekEyeTracking,
  stopPurring,
  stopHuntingPose,
  stopCompletionJump,
  stopScrollAnimation,
  clearPressPose,
  cancelDragStretch = () => {},
  requestTrackingTick,
  updateMouseEventPassthrough,
}) {
  let state = null;
  let exitTimer = null;

  function getState() {
    return state;
  }

  function apply(nextState) {
    const edge = nextState && typeof nextState.edge === "string" ? nextState.edge : "";
    const wasPeeking = !!state;
    state = edge ? { edge } : null;
    if (state) {
      if (exitTimer) clearTimeout(exitTimer);
      exitTimer = null;
      body.classList.remove("pet-peek-exiting");
      const pressDoc = ensureSvgObjectReady("press-left");
      setPressLeftPeekFaceOnly(true, pressDoc);
      initPeekEyeTracking();
      stopPurring();
      stopHuntingPose();
      stopCompletionJump();
      stopScrollAnimation();
      clearPressPose();
      cancelDragStretch();
    }
    body.dataset.petPeek = edge || "";
    if (!edge) delete body.dataset.petPeek;
    if (!edge && wasPeeking) {
      setPressLeftPeekFaceOnly(false);
      body.classList.remove("pet-peek-exiting");
      void body.offsetWidth;
      body.classList.add("pet-peek-exiting");
      if (exitTimer) clearTimeout(exitTimer);
      exitTimer = setTimeout(() => {
        body.classList.remove("pet-peek-exiting");
        exitTimer = null;
      }, 520);
    }
    requestTrackingTick();
    updateMouseEventPassthrough();
  }

  function bind() {
    if (electronAPI.onPetPeekState) {
      electronAPI.onPetPeekState(apply);
    }
  }

  return {
    apply,
    bind,
    getState,
  };
}

module.exports = {
  createPeekState,
};
