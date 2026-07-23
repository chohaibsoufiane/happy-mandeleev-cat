"use strict";

// Applies persistent color and eye state to every loaded SVG document.

function createSvgColors({ registry, defaultEyePupilScale = 100 }) {
  let currentCatColor = "#1A1A1A";
  let currentOutlineColor = "#FFFFFF";
  let currentHeatOverlayColor = "#dc2828";
  let currentLegacyHeatOverlayOpacity = "0";
  let currentFullHeatOverlayOpacity = "0";
  let currentEyeColor = null;
  let currentEyeBgColor = null;
  let currentEyeColorLeft = null;
  let currentEyeColorRight = null;
  let currentEyePupilScale = defaultEyePupilScale;

  function normalizeEyePupilScale(scale) {
    return Math.max(40, Math.min(140, Math.round(Number(scale) || defaultEyePupilScale)));
  }

  function applyEyePupilScaleToSvg(doc, scale) {
    if (!doc) return;
    const normalizedScale = normalizeEyePupilScale(scale);
    const factor = normalizedScale / 100;
    for (const pupil of doc.querySelectorAll(".pupil-left, .pupil-right")) {
      if (!pupil || pupil.tagName.toLowerCase() !== "rect") continue;
      if (!pupil.dataset.baseX) {
        pupil.dataset.baseX = pupil.getAttribute("x") || "0";
        pupil.dataset.baseY = pupil.getAttribute("y") || "0";
        pupil.dataset.baseWidth = pupil.getAttribute("width") || "0";
        pupil.dataset.baseHeight = pupil.getAttribute("height") || "0";
      }

      const width = Number(pupil.dataset.baseWidth) || 0;
      const height = Number(pupil.dataset.baseHeight) || 0;
      const nextWidth = width * factor;
      const nextHeight = height * factor;
      const nextX = (Number(pupil.dataset.baseX) || 0) + (width - nextWidth) / 2;
      const nextY = (Number(pupil.dataset.baseY) || 0) + (height - nextHeight) / 2;

      pupil.setAttribute("x", Number(nextX.toFixed(3)));
      pupil.setAttribute("y", Number(nextY.toFixed(3)));
      pupil.setAttribute("width", Number(nextWidth.toFixed(3)));
      pupil.setAttribute("height", Number(nextHeight.toFixed(3)));
    }
  }

  function applyToSvg(doc) {
    if (!doc || !doc.documentElement) return;
    const root = doc.documentElement;
    root.style.setProperty("--cat-color", currentCatColor);
    root.style.setProperty("--cat-outline", currentOutlineColor);
    root.style.setProperty("--heat-overlay-color", currentHeatOverlayColor);
    root.style.setProperty("--legacy-heat-overlay-opacity", currentLegacyHeatOverlayOpacity);
    root.style.setProperty("--full-heat-overlay-opacity", currentFullHeatOverlayOpacity);
    if (currentEyeColor) root.style.setProperty("--eye-color", currentEyeColor);
    if (currentEyeBgColor) root.style.setProperty("--eye-bg-color", currentEyeBgColor);
    if (currentEyeColorLeft) root.style.setProperty("--eye-color-left", currentEyeColorLeft);
    if (currentEyeColorRight) root.style.setProperty("--eye-color-right", currentEyeColorRight);
    applyEyePupilScaleToSvg(doc, currentEyePupilScale);
  }

  function forEachSvg(callback) {
    registry.forEach((doc) => {
      if (doc && doc.documentElement) callback(doc, doc.documentElement);
    });
  }

  function setCatColorAllSvgs(color) {
    if (currentCatColor === color) return;
    currentCatColor = color;
    forEachSvg((doc, root) => root.style.setProperty("--cat-color", color));
  }

  function setCatOutlineAllSvgs(color) {
    if (currentOutlineColor === color) return;
    currentOutlineColor = color;
    forEachSvg((doc, root) => root.style.setProperty("--cat-outline", color));
  }

  function setHeatOverlayAllSvgs(color, legacyOpacity, fullOpacity = legacyOpacity) {
    legacyOpacity = String(legacyOpacity);
    fullOpacity = String(fullOpacity);
    if (
      currentHeatOverlayColor === color &&
      currentLegacyHeatOverlayOpacity === legacyOpacity &&
      currentFullHeatOverlayOpacity === fullOpacity
    ) {
      return;
    }
    currentHeatOverlayColor = color;
    currentLegacyHeatOverlayOpacity = legacyOpacity;
    currentFullHeatOverlayOpacity = fullOpacity;
    forEachSvg((doc, root) => {
      root.style.setProperty("--heat-overlay-color", color);
      root.style.setProperty("--legacy-heat-overlay-opacity", currentLegacyHeatOverlayOpacity);
      root.style.setProperty("--full-heat-overlay-opacity", currentFullHeatOverlayOpacity);
    });
  }

  function setEyeColorAllSvgs(color) {
    currentEyeColor = color;
    forEachSvg((doc, root) => root.style.setProperty("--eye-color", color));
  }

  function setEyeBgColorAllSvgs(color) {
    currentEyeBgColor = color;
    forEachSvg((doc, root) => root.style.setProperty("--eye-bg-color", color));
  }

  function setEyeColorLeftAllSvgs(color) {
    currentEyeColorLeft = color;
    forEachSvg((doc, root) => {
      if (color) root.style.setProperty("--eye-color-left", color);
      else root.style.removeProperty("--eye-color-left");
    });
  }

  function setEyeColorRightAllSvgs(color) {
    currentEyeColorRight = color;
    forEachSvg((doc, root) => {
      if (color) root.style.setProperty("--eye-color-right", color);
      else root.style.removeProperty("--eye-color-right");
    });
  }

  function setEyePupilScaleAllSvgs(scale) {
    currentEyePupilScale = normalizeEyePupilScale(scale);
    registry.forEach((doc) => applyEyePupilScaleToSvg(doc, currentEyePupilScale));
  }

  return {
    applyEyePupilScaleToSvg,
    applyToSvg,
    getEyePupilScale: () => currentEyePupilScale,
    normalizeEyePupilScale,
    setCatColorAllSvgs,
    setCatOutlineAllSvgs,
    setEyeBgColorAllSvgs,
    setEyeColorAllSvgs,
    setEyeColorLeftAllSvgs,
    setEyeColorRightAllSvgs,
    setEyePupilScaleAllSvgs,
    setHeatOverlayAllSvgs,
  };
}

module.exports = {
  createSvgColors,
};
