"use strict";

// Completion and reminder jump frame sequencing.

const SVG_NS = "http://www.w3.org/2000/svg";

function createJumpMotion({
  domDocument = document,
  ensureSvgObjectReady,
  applyEyePupilScaleToSvg,
  getEyePupilScale,
  shouldSkipJump,
  onBeforeJump,
  playReminderMeow,
}) {
  let completionJumpTimers = [];

  function clearTimers() {
    for (const timer of completionJumpTimers) clearTimeout(timer);
    completionJumpTimers = [];
  }

  function stop() {
    clearTimers();
    delete domDocument.body.dataset.jump;
    delete domDocument.body.dataset.reminderJump;
    domDocument.body.style.removeProperty("--jump-y");
    domDocument.body.style.removeProperty("--bubble-jump-y");
    setReminderJumpEyesActive(false);
  }

  function ensureReminderJumpEyes(doc, frame) {
    if (!doc || !doc.documentElement) return;
    const existingStyle = doc.getElementById("reminder-jump-eye-style");
    if (!existingStyle) {
      const style = doc.createElementNS(SVG_NS, "style");
      style.setAttribute("id", "reminder-jump-eye-style");
      style.textContent = [
        ":root:not(.reminder-jump) .reminder-idle-eyes{display:none}",
        ":root.reminder-jump .jump-closed-eye{display:none}",
      ].join("\n");
      doc.documentElement.insertBefore(style, doc.documentElement.firstChild);
    }

    if (doc.getElementById("reminder-idle-eyes")) return;

    if (frame === "ing") {
      for (const path of doc.querySelectorAll("path[stroke]")) {
        const d = path.getAttribute("d") || "";
        if (d === "M13 12L17 14L13 16" || d === "M27 12L23 14L27 16") {
          path.classList.add("jump-closed-eye");
        }
      }
    }

    const y = frame === "ing" ? 11 : 22;
    const eyes = doc.createElementNS(SVG_NS, "g");
    eyes.setAttribute("id", "reminder-idle-eyes");
    eyes.setAttribute("class", "reminder-idle-eyes");

    const addRect = (attrs) => {
      const rect = doc.createElementNS(SVG_NS, "rect");
      for (const [key, value] of Object.entries(attrs)) rect.setAttribute(key, String(value));
      eyes.appendChild(rect);
    };

    const bg = "var(--eye-bg-color, #FFFFFF)";
    const leftPupil = "var(--eye-color-left, var(--eye-color, var(--cat-color)))";
    const rightPupil = "var(--eye-color-right, var(--eye-color, var(--cat-color)))";
    addRect({ x: 13, y: y + 1, width: 1, height: 3, fill: bg });
    addRect({ x: 17, y: y + 1, width: 1, height: 3, fill: bg });
    addRect({ x: 14, y, width: 3, height: 5, fill: bg });
    addRect({ class: "pupil-left", x: 14, y: y + 1, width: 3, height: 3, fill: leftPupil });
    addRect({ x: 22, y: y + 1, width: 1, height: 3, fill: bg });
    addRect({ x: 26, y: y + 1, width: 1, height: 3, fill: bg });
    addRect({ x: 23, y, width: 3, height: 5, fill: bg });
    addRect({ class: "pupil-right", x: 23, y: y + 1, width: 3, height: 3, fill: rightPupil });

    const content = doc.getElementById("cat-content") || doc.documentElement;
    content.appendChild(eyes);
    applyEyePupilScaleToSvg(doc, getEyePupilScale());
  }

  function setReminderJumpEyesActive(active) {
    for (const id of ["jump-start", "jump-ing"]) {
      const element = domDocument.getElementById(id);
      const doc = element && element.contentDocument;
      if (doc && doc.documentElement) {
        doc.documentElement.classList.toggle("reminder-jump", !!active);
      }
    }
  }

  function playReminderJump() {
    playCompletionJump({ idleEyes: true });
  }

  function playReminderJumpSequence() {
    playReminderJump();
    setTimeout(playReminderJump, 1500);
    setTimeout(playReminderJump, 3000);
  }

  function playReminderAlertOnce() {
    playReminderJump();
    playReminderMeow({ repeat: 1 });
  }

  function warmJumpAssets() {
    const startDoc = ensureSvgObjectReady("jump-start");
    const ingDoc = ensureSvgObjectReady("jump-ing");
    ensureReminderJumpEyes(startDoc, "start");
    ensureReminderJumpEyes(ingDoc, "ing");
    setReminderJumpEyesActive(false);
  }

  function playCompletionJump(options = {}) {
    if (shouldSkipJump(options)) return;
    const useIdleEyes = !!options.idleEyes;
    onBeforeJump();
    clearTimers();
    domDocument.body.toggleAttribute("data-reminder-jump", useIdleEyes);
    ensureSvgObjectReady("jump-start");
    ensureSvgObjectReady("jump-ing");
    setReminderJumpEyesActive(useIdleEyes);

    const frames = [
      ["start", 0, "0px", "0px"],
      ["start", 140, "0px", "0px"],
      ["ing", 300, "-16px", "-18px"],
      ["ing", 500, "-26px", "-26px"],
      ["ing", 660, "-24px", "-24px"],
      ["start", 860, "-5px", "-8px"],
      ["start", 1040, "0px", "0px"],
      ["ing", 1240, "-16px", "-18px"],
      ["ing", 1440, "-26px", "-26px"],
      ["ing", 1600, "-24px", "-24px"],
      ["start", 1800, "-5px", "-8px"],
      ["start", 1980, "0px", "0px"],
      [null, 2220, "0px", "0px"],
    ];
    for (const [frame, delay, jumpY, bubbleJumpY] of frames) {
      completionJumpTimers.push(setTimeout(() => {
        domDocument.body.style.setProperty("--jump-y", jumpY);
        domDocument.body.style.setProperty("--bubble-jump-y", bubbleJumpY);
        if (frame) {
          const svgId = frame === "start" ? "jump-start" : "jump-ing";
          ensureSvgObjectReady(svgId);
          if (useIdleEyes) {
            const element = domDocument.getElementById(svgId);
            ensureReminderJumpEyes(element && element.contentDocument, frame);
            setReminderJumpEyesActive(true);
          }
          domDocument.body.dataset.jump = frame;
        } else {
          stop();
        }
      }, delay));
    }
  }

  return {
    ensureReminderJumpEyes,
    playCompletionJump,
    playReminderAlertOnce,
    playReminderJumpSequence,
    setReminderJumpEyesActive,
    stop,
    warmJumpAssets,
  };
}

module.exports = {
  createJumpMotion,
};
