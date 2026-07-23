"use strict";

// Owns pet window Audio elements and sound settings.

function createSounds() {
  const completionMeow = new Audio("../../assets/sound/meow.m4a");
  const reminderMeow = new Audio("../../assets/sound/meow-alert.m4a");
  const purringSound = new Audio("../../assets/sound/purring.m4a");
  let volume = 0.1;
  let muted = false;
  let purrPlayPromise = null;

  completionMeow.volume = volume;
  completionMeow.preload = "auto";
  reminderMeow.volume = volume;
  reminderMeow.preload = "auto";
  purringSound.loop = true;
  purringSound.preload = "auto";
  purringSound.volume = volume;

  function warmAudio() {
    for (const audio of [completionMeow, reminderMeow, purringSound]) {
      try {
        audio.load();
      } catch {
        // Audio preload is an optimization; playback can still proceed without it.
      }
    }
  }

  warmAudio();

  function applyTaskCompleteSoundVolume(nextVolume) {
    volume = Math.max(0, Math.min(1, Number(nextVolume) || 0));
    completionMeow.volume = volume;
    reminderMeow.volume = volume;
    purringSound.volume = volume;
  }

  function applySoundMuted(nextMuted) {
    muted = !!nextMuted;
    if (!muted) return;
    completionMeow.pause();
    reminderMeow.pause();
    purringSound.pause();
  }

  function playCompletionMeow() {
    if (muted) return;
    if (volume <= 0) return;
    completionMeow.volume = volume;
    completionMeow.currentTime = 0;
    completionMeow.play().catch(() => {});
  }

  function playReminderMeow(options = {}) {
    if (muted) return;
    if (volume <= 0) return;
    const repeat = Math.max(1, Math.min(3, Math.round(Number(options.repeat) || 3)));
    const play = () => {
      reminderMeow.volume = volume;
      reminderMeow.currentTime = 0;
      reminderMeow.play().catch(() => {});
    };
    play();
    if (repeat >= 2) setTimeout(play, 1500);
    if (repeat >= 3) setTimeout(play, 3000);
  }

  function startPurringSound({ isPurrWanted, onPurrUnwanted } = {}) {
    if (muted || !purringSound.paused || purrPlayPromise) return;
    purringSound.volume = volume;
    purringSound.currentTime = 0;
    purrPlayPromise = purringSound.play()
      .then(() => {
        purrPlayPromise = null;
        if (typeof isPurrWanted === "function" && !isPurrWanted() && typeof onPurrUnwanted === "function") {
          onPurrUnwanted();
        }
      })
      .catch(() => { purrPlayPromise = null; });
  }

  function stopPurringSound() {
    purringSound.pause();
    purringSound.currentTime = 0;
  }

  return {
    applySoundMuted,
    applyTaskCompleteSoundVolume,
    playCompletionMeow,
    playReminderMeow,
    startPurringSound,
    stopPurringSound,
    warmAudio,
  };
}

module.exports = {
  createSounds,
};
