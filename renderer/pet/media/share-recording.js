"use strict";

// Desktop crop recording used by the share action.

function sleep(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

function preferredRecordingMime() {
  const candidates = [
    "video/mp4;codecs=h264",
    "video/mp4",
    "video/webm;codecs=vp9",
    "video/webm;codecs=vp8",
    "video/webm",
  ];
  if (!window.MediaRecorder || !MediaRecorder.isTypeSupported) return "";
  return candidates.find((mime) => MediaRecorder.isTypeSupported(mime)) || "";
}

function blobToUint8Array(blob) {
  return blob.arrayBuffer().then((buffer) => new Uint8Array(buffer));
}

function isSharePermissionError(error) {
  const name = error && error.name ? String(error.name) : "";
  const message = error && error.message ? String(error.message) : "";
  return name === "NotAllowedError" ||
    name === "SecurityError" ||
    /permission|not allowed|denied|No desktop capture source/i.test(message);
}

function isWindowsRuntime() {
  return /Windows/i.test(navigator.userAgent || navigator.platform || "");
}

function createShareRecording({
  badge,
  electronAPI,
  tr,
  getCurrentCatName,
  openDurationEditor,
}) {
  let recording = false;
  let cancelRequested = false;
  let activeRecorder = null;

  function failureMessage(error) {
    if (isSharePermissionError(error)) return tr(isWindowsRuntime() ? "sharePermissionFailedWindows" : "sharePermissionFailed");
    if (error && /conversion-failed|ffmpeg|MP4/i.test(String(error.message || ""))) {
      return tr("shareConversionFailed");
    }
    return tr("shareRecordingFailed");
  }

  function isRecording() {
    return recording;
  }

  function cancel() {
    cancelRequested = true;
    if (activeRecorder && activeRecorder.state !== "inactive") {
      activeRecorder.stop();
    }
  }

  async function start(durationSec = 5) {
    if (recording) return;
    recording = true;
    cancelRequested = false;
    const durationMs = Math.max(5000, Math.min(30000, Math.round(Number(durationSec) || 5) * 1000));

    const catName = (getCurrentCatName && getCurrentCatName()) || "Shanks";

    if (badge) badge.textContent = catName;
    document.body.dataset.sharing = "1";

    let desktopStream = null;

    try {
      await sleep(250);
      const options = await electronAPI.shareCaptureOptions({ durationMs });
      if (!options || !options.sourceId) throw new Error("No desktop capture source.");

      desktopStream = await navigator.mediaDevices.getUserMedia({
        audio: false,
        video: {
          mandatory: {
            chromeMediaSource: "desktop",
            chromeMediaSourceId: options.sourceId,
            maxFrameRate: 30,
          },
        },
      });

      const video = document.createElement("video");
      video.muted = true;
      video.srcObject = desktopStream;
      await new Promise((resolve) => {
        video.onloadedmetadata = resolve;
      });
      await video.play();

      const scaleX = video.videoWidth / options.displayBounds.width;
      const scaleY = video.videoHeight / options.displayBounds.height;
      const cropX = Math.max(0, Math.min(video.videoWidth - 2, options.crop.x * scaleX));
      const cropY = Math.max(0, Math.min(video.videoHeight - 2, options.crop.y * scaleY));
      const crop = {
        x: cropX,
        y: cropY,
        width: Math.min(options.crop.width * scaleX, video.videoWidth - cropX),
        height: Math.min(options.crop.height * scaleY, video.videoHeight - cropY),
      };

      const mimeType = preferredRecordingMime();
      const recorderOptions = {
        videoBitsPerSecond: 24_000_000,
      };
      if (mimeType) recorderOptions.mimeType = mimeType;
      const recorder = new MediaRecorder(desktopStream, recorderOptions);
      activeRecorder = recorder;
      const chunks = [];
      recorder.ondataavailable = (event) => {
        if (event.data && event.data.size > 0) chunks.push(event.data);
      };

      const stopped = new Promise((resolve) => {
        recorder.onstop = resolve;
      });
      recorder.start();
      await electronAPI.shareCaptureStarted().catch(() => {});
      await sleep(options.durationMs || durationMs);
      if (recorder.state !== "inactive") recorder.stop();
      await stopped;
      await electronAPI.shareCaptureOverlayHide().catch(() => {});
      if (cancelRequested) return;

      const blob = new Blob(chunks, { type: recorder.mimeType || mimeType || "video/webm" });
      const bytes = await blobToUint8Array(blob);
      const extension = (blob.type || "").includes("mp4") ? "mp4" : "webm";
      const result = await electronAPI.shareVideoSave({
        bytes,
        extension,
        crop,
        scale: { x: scaleX, y: scaleY },
        source: { width: video.videoWidth, height: video.videoHeight },
        output: options.output,
      });
      if (result && result.ok === false && !result.canceled) {
        throw new Error(result.reason || "share-save-failed");
      }
    } catch (error) {
      console.error("Share recording failed:", error);
      await electronAPI.shareErrorDialog(failureMessage(error)).catch(() => {
        window.alert(failureMessage(error));
      });
    } finally {
      await electronAPI.shareCaptureOverlayHide().catch(() => {});
      if (desktopStream) desktopStream.getTracks().forEach((track) => track.stop());
      delete document.body.dataset.sharing;
      activeRecorder = null;
      cancelRequested = false;
      recording = false;
    }
  }

  function bind() {
    electronAPI.onShareRecord(() => openDurationEditor());
    electronAPI.onShareCaptureCancel(cancel);
  }

  return {
    bind,
    cancel,
    isRecording,
    start,
  };
}

module.exports = {
  createShareRecording,
};
