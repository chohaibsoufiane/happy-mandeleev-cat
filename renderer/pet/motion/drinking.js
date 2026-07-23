"use strict";

// 물 마시기 모션 — 화면 덮기(main covering-motion)와 함께, 메인 cat SVG에
// 헌팅 시작 포즈를 재활용한 음수 포즈를 적용한다. 잠자기와 동일하게 cat SVG에
// 클래스(drinking)를 토글한다. main이 do-drink/cancel-drink로 lifecycle을 제어한다.

const DRINK_DURATION_MS = 3000;

function createDrinkingMotion({
  electronAPI,
  body = document.body,
  ensureSvgObjectReady,
  setIdleSvgClass,
  onBeforeDrink,
  stopHuntingPose,
  stopPurring,
} = {}) {
  let drinkTimer = null;

  function clearDrinkTimer() {
    if (!drinkTimer) return;
    clearTimeout(drinkTimer);
    drinkTimer = null;
  }

  function start() {
    if (body.dataset.drinking) return;
    if (typeof onBeforeDrink === "function") onBeforeDrink();
    if (typeof stopHuntingPose === "function") stopHuntingPose();
    if (typeof stopPurring === "function") stopPurring();
    clearDrinkTimer();
    ensureSvgObjectReady("cat");
    body.dataset.drinking = "1";
    if (typeof setIdleSvgClass === "function") setIdleSvgClass("drinking", true);
    drinkTimer = setTimeout(stop, DRINK_DURATION_MS);
  }

  function stop() {
    clearDrinkTimer();
    if (!body.dataset.drinking) return;
    delete body.dataset.drinking;
    if (typeof setIdleSvgClass === "function") setIdleSvgClass("drinking", false);
  }

  function bind() {
    if (electronAPI.onDoDrink) electronAPI.onDoDrink(start);
    if (electronAPI.onCancelDrink) electronAPI.onCancelDrink(stop);
  }

  return {
    bind,
    start,
    stop,
    isDrinking: () => !!body.dataset.drinking,
  };
}

module.exports = {
  createDrinkingMotion,
};
