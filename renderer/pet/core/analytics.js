"use strict";

// Thin renderer-side wrapper around the preload analytics API.

function createAnalytics(electronAPI) {
  function capture(event, properties = {}) {
    if (!electronAPI || typeof electronAPI.analyticsCapture !== "function") return;
    electronAPI.analyticsCapture(event, properties).catch(() => {});
  }

  return {
    capture,
  };
}

module.exports = {
  createAnalytics,
};
