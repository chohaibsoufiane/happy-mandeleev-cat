"use strict";

// Left-button pet drag, stretch release lifecycle, and context menu gating.

const DEFAULT_MAX_UP_OFFSET = 140;
const DEFAULT_DRAG_START_THRESHOLD_PX = 4;
const DEFAULT_PURR_LEAVE_GRACE_MS = 260;

function createDragStretch({
  win = window,
  body = document.body,
  electronAPI = window.electronAPI,
  dragHandle,
  getStretchChain,
  isStretching,
  isCatHitPoint,
  isIdleHeadPoint,
  getPetPeekState,
  setPetMouseEventsEnabled,
  updateMouseEventPassthrough,
  clearMousePassthroughPoint,
  startPurring,
  scheduleStopPurring,
  stopPurring,
  stopHuntingPose,
  maxUpOffset = DEFAULT_MAX_UP_OFFSET,
  dragStartThresholdPx = DEFAULT_DRAG_START_THRESHOLD_PX,
  purrLeaveGraceMs = DEFAULT_PURR_LEAVE_GRACE_MS,
}) {
  let dragging = false;
  let releasing = false;
  let lastX = 0;
  let lastY = 0;
  let dragStartScreenY = 0;
  let dragGrabClientX = 0;
  let dragGrabClientY = 0;
  let pendingDragWindowMove = null;
  let dragWindowMoveRafId = null;
  let stretchT = 0;
  let pendingDrag = null;
  let lastDragMoveAt = 0;
  let pointerDownScreenX = 0;
  let pointerDownScreenY = 0;

  function stretchChain() {
    return getStretchChain && getStretchChain();
  }

  function startChain() {
    const chain = stretchChain();
    if (chain) chain.start();
  }

  function resetChainMotion() {
    const chain = stretchChain();
    if (chain) chain.resetMotion();
  }

  function applyChain() {
    const chain = stretchChain();
    if (chain) chain.apply();
  }

  function flushDragWindowMove() {
    dragWindowMoveRafId = null;
    const move = pendingDragWindowMove;
    pendingDragWindowMove = null;
    if (!move) return;
    if (electronAPI.dragWindowTo) {
      electronAPI.dragWindowTo(move.screenX, move.screenY, dragGrabClientX, dragGrabClientY);
    } else {
      electronAPI.dragWindow(move.dx, move.dy);
    }
  }

  function scheduleDragWindowMove(screenX, screenY, dx, dy) {
    pendingDragWindowMove = { screenX, screenY, dx, dy };
    if (dragWindowMoveRafId === null) dragWindowMoveRafId = requestAnimationFrame(flushDragWindowMove);
  }

  function beginDragStretch(startEvent, currentEvent = startEvent) {
    if (dragging || !startEvent || isStretching()) return;
    stopPurring();
    stopHuntingPose();
    dragging = true;
    releasing = false;
    lastX = currentEvent.screenX;
    lastY = currentEvent.screenY;
    dragGrabClientX = startEvent.clientX;
    dragGrabClientY = startEvent.clientY;
    dragStartScreenY = startEvent.screenY;
    stretchT = 0;
    resetChainMotion();
    body.classList.add("dragging");
    electronAPI.setStretchMode(true);
    startChain();
  }

  function clearPendingDrag() {
    pendingDrag = null;
  }

  function finishDragStretch(event) {
    clearPendingDrag();
    if (dragging) {
      if (dragWindowMoveRafId !== null) {
        cancelAnimationFrame(dragWindowMoveRafId);
        flushDragWindowMove();
      }
      dragging = false;
      electronAPI.dragWindowEnded();
      if (stretchT > 0) {
        releasing = true;
        startChain();
      } else {
        body.classList.remove("dragging");
        electronAPI.setStretchMode(false);
      }
    } else {
      dragging = false;
    }
    updateMouseEventPassthrough(event);
  }

  function handleWindowMouseDown(event) {
    pointerDownScreenX = event.screenX;
    pointerDownScreenY = event.screenY;
  }

  function handleDragHandleMouseDown(event) {
    if (!releasing && !isCatHitPoint(event.clientX, event.clientY)) return;
    if (getPetPeekState()) {
      if (event.button === 0 && electronAPI.unpeekPet) {
        electronAPI.unpeekPet();
        event.preventDefault();
      }
      return;
    }
    if (event.button === 0) {
      if (isStretching()) return;
      setPetMouseEventsEnabled(true);
      pendingDrag = {
        screenX: event.screenX,
        screenY: event.screenY,
        clientX: event.clientX,
        clientY: event.clientY,
        startedAt: Date.now(),
      };
      event.preventDefault();
    }
  }

  function handleWindowMouseMove(event) {
    const pointerMoved = Math.hypot(event.screenX - pointerDownScreenX, event.screenY - pointerDownScreenY);
    if (event.buttons && pointerMoved > dragStartThresholdPx) {
      lastDragMoveAt = Date.now();
    }
    if (pendingDrag) {
      const pendingMoved = Math.hypot(event.screenX - pendingDrag.screenX, event.screenY - pendingDrag.screenY);
      if ((event.buttons & 1) && pendingMoved > dragStartThresholdPx) {
        beginDragStretch(pendingDrag, event);
        clearPendingDrag();
      } else if (!(event.buttons & 1)) {
        clearPendingDrag();
      }
    }
    if (isIdleHeadPoint(event.clientX, event.clientY)) {
      startPurring(event.clientX, event.clientY);
    } else if (!pendingDrag) {
      scheduleStopPurring(purrLeaveGraceMs);
    }
    if (!dragging) return;
    if (!(event.buttons & 1)) {
      finishDragStretch(event);
      return;
    }
    const dx = event.screenX - lastX;
    const dy = event.screenY - lastY;
    if (dx !== 0 || dy !== 0) {
      lastDragMoveAt = Date.now();
      scheduleDragWindowMove(event.screenX, event.screenY, dx, dy);
      const chain = stretchChain();
      if (chain) chain.addPointerImpulse(dx);
      lastX = event.screenX;
      lastY = event.screenY;
    }

    const upOffset = dragStartScreenY - event.screenY;
    const tNow = Math.max(0, Math.min(1, upOffset / maxUpOffset));
    if (tNow > stretchT) stretchT = tNow;
  }

  function handleWindowMouseLeave() {
    clearMousePassthroughPoint();
    if (!dragging && !releasing && !pendingDrag) setPetMouseEventsEnabled(!!body.dataset.accountNudge);
    clearPendingDrag();
    stopPurring();
  }

  function handleWindowBlur() {
    if (dragging) finishDragStretch();
  }

  function handleContextMenu(event) {
    event.preventDefault();
    if (dragging || releasing || Date.now() - lastDragMoveAt < 350) return;
    electronAPI.showContextMenu({ online: navigator.onLine !== false });
  }

  function cancel() {
    dragging = false;
    pendingDrag = null;
    releasing = false;
    stretchT = 0;
    stopPurring();
    stopHuntingPose();
    resetChainMotion();
    body.classList.remove("dragging");
    applyChain();
    electronAPI.setStretchMode(false);
    updateMouseEventPassthrough();
  }

  function bind() {
    win.addEventListener("mousedown", handleWindowMouseDown, { capture: true });
    dragHandle.addEventListener("mousedown", handleDragHandleMouseDown);
    win.addEventListener("mousemove", updateMouseEventPassthrough, { passive: true });
    win.addEventListener("mousemove", handleWindowMouseMove);
    win.addEventListener("mouseup", finishDragStretch);
    win.addEventListener("mouseleave", handleWindowMouseLeave);
    win.addEventListener("blur", handleWindowBlur);
    win.addEventListener("contextmenu", handleContextMenu);
  }

  return {
    bind,
    cancel,
    getStretchT: () => stretchT,
    hasPendingDrag: () => !!pendingDrag,
    isActive: () => dragging || releasing || !!pendingDrag,
    isDragging: () => dragging,
    isReleasing: () => releasing,
    setReleasing: (nextReleasing) => { releasing = !!nextReleasing; },
    setStretchT: (nextStretchT) => { stretchT = nextStretchT; },
  };
}

module.exports = {
  createDragStretch,
};
