"use strict";

// Typing intensity heat color and steam state.

const KEY_WINDOW_MS = 1500;
const KPS_MIN = 4;
const KPS_MAX = 14;
const HEAT_CURVE = 1.5;
const HEAT_EASE = 0.10;
const HEAT_FRAME_MS = 66;
const HOT_OVERLAY_MAX = 0.7;
const COOL_OVERLAY_MAX = 0.42;
const HOT_RGB = [220, 40, 40];
const COOL_RGB = [60, 180, 90];

function hexToRgb(hex) {
  const match = /^#?([0-9a-f]{6})$/i.exec(hex || "");
  if (!match) return null;
  const value = parseInt(match[1], 16);
  return [(value >> 16) & 0xff, (value >> 8) & 0xff, value & 0xff];
}

function rgbToCss(rgb) {
  return `rgb(${rgb[0]}, ${rgb[1]}, ${rgb[2]})`;
}

function quantizeUnit(value, step = 0.05) {
  return Math.max(0, Math.min(1, Math.round((Number(value) || 0) / step) * step));
}

function createTypingHeat({
  body = document.body,
  getDragging,
  setCatColorAllSvgs,
  setCatOutlineAllSvgs,
  setHeatOverlayAllSvgs,
}) {
  let baseRgb = [26, 26, 26];
  const keyTimestamps = [];
  let targetHeat = 0;
  let currentHeat = 0;
  let heatTimerId = null;
  let stretchingHeat = 0;
  let stretchingHeatTarget = 0;

  function applyPatternBaseColor(baseColor) {
    const rgb = hexToRgb(baseColor);
    if (!rgb) return;
    baseRgb = rgb;
    setCatColorAllSvgs(rgbToCss(rgb));
    const lum = (0.299 * rgb[0] + 0.587 * rgb[1] + 0.114 * rgb[2]) / 255;
    setCatOutlineAllSvgs(lum > 0.5 ? "#000000" : "#FFFFFF");
  }

  function addKeyTimestamp(time = Date.now()) {
    keyTimestamps.push(time);
  }

  function schedule() {
    if (heatTimerId !== null) return;
    heatTimerId = setTimeout(tick, HEAT_FRAME_MS);
  }

  function tick() {
    heatTimerId = null;
    const now = Date.now();
    while (keyTimestamps.length > 0 && now - keyTimestamps[0] > KEY_WINDOW_MS) {
      keyTimestamps.shift();
    }
    const kps = keyTimestamps.length / (KEY_WINDOW_MS / 1000);
    const raw = Math.min(1, Math.max(0, (kps - KPS_MIN) / (KPS_MAX - KPS_MIN)));
    targetHeat = Math.pow(raw, HEAT_CURVE);

    currentHeat += (targetHeat - currentHeat) * HEAT_EASE;
    if (currentHeat < 0.005 && targetHeat === 0) currentHeat = 0;

    stretchingHeat += (stretchingHeatTarget - stretchingHeat) * 0.12;
    if (stretchingHeat < 0.005 && stretchingHeatTarget === 0) stretchingHeat = 0;

    let overlayColor;
    let legacyOverlayOpacity = 0;
    let fullOverlayOpacity = 0;
    if (getDragging() && currentHeat > 0.005) {
      overlayColor = rgbToCss(HOT_RGB);
      fullOverlayOpacity = quantizeUnit(Math.min(HOT_OVERLAY_MAX, currentHeat * HOT_OVERLAY_MAX));
    } else if (stretchingHeat > 0.005 || stretchingHeatTarget > 0) {
      overlayColor = rgbToCss(COOL_RGB);
      legacyOverlayOpacity = quantizeUnit(Math.min(COOL_OVERLAY_MAX, stretchingHeat * COOL_OVERLAY_MAX));
    } else {
      overlayColor = rgbToCss(HOT_RGB);
      legacyOverlayOpacity = quantizeUnit(Math.min(HOT_OVERLAY_MAX, currentHeat * HOT_OVERLAY_MAX));
    }
    setCatColorAllSvgs(rgbToCss(baseRgb));
    setHeatOverlayAllSvgs(overlayColor, legacyOverlayOpacity.toFixed(3), fullOverlayOpacity.toFixed(3));

    const steamOpacity = quantizeUnit(Math.max(0, Math.min(1, (currentHeat - 0.62) * 2.63)));
    body.style.setProperty("--steam-opacity", steamOpacity.toFixed(2));
    body.toggleAttribute("data-heat-steam", steamOpacity > 0);

    if (currentHeat > 0 || kps > 0 || stretchingHeat > 0 || stretchingHeatTarget > 0) {
      schedule();
    } else {
      body.removeAttribute("data-heat-steam");
    }
  }

  function setStretchingHeatTarget(value) {
    stretchingHeatTarget = value;
  }

  function resetStretchingHeat() {
    stretchingHeatTarget = 0;
    stretchingHeat = 0;
    setHeatOverlayAllSvgs(rgbToCss(HOT_RGB), "0.000", "0.000");
  }

  return {
    addKeyTimestamp,
    applyPatternBaseColor,
    resetStretchingHeat,
    schedule,
    setStretchingHeatTarget,
  };
}

module.exports = {
  createTypingHeat,
};
