"use strict";

// Legacy license users see this small account-link nudge until they link or dismiss it.

const ACCOUNT_NUDGE_DISMISSED_DATE_KEY = "shanks.accountNudgeDismissedDate";
const ACCOUNT_NUDGE_LABELS = {
  en: "Connect Shanks account",
  ko: "콤냥이 계정 연결",
  ja: "Shanks アカウント連携",
};

function todayLocalDateKey() {
  const now = new Date();
  return `${now.getFullYear()}-${String(now.getMonth() + 1).padStart(2, "0")}-${String(now.getDate()).padStart(2, "0")}`;
}

function createAccountNudge({
  button,
  closeButton,
  electronAPI,
  getLanguage,
  setPetMouseEventsEnabled,
  shouldKeepMouseEventsEnabled,
}) {
  async function isDismissedToday() {
    const today = todayLocalDateKey();
    if (electronAPI.accountNudgeDismissedDateGet) {
      try {
        if (await electronAPI.accountNudgeDismissedDateGet() === today) return true;
      } catch {}
    }
    try {
      if (localStorage.getItem(ACCOUNT_NUDGE_DISMISSED_DATE_KEY) === today) {
        if (electronAPI.accountNudgeDismissedDateSet) {
          try { await electronAPI.accountNudgeDismissedDateSet(today); } catch {}
        }
        return true;
      }
    } catch {
      // Ignore storage failures; the button can still be dismissed for this session.
    }
    return false;
  }

  function setVisible(visible) {
    document.body.toggleAttribute("data-account-nudge", !!visible);
    if (typeof setPetMouseEventsEnabled === "function") {
      setPetMouseEventsEnabled(!!visible || !!(shouldKeepMouseEventsEnabled && shouldKeepMouseEventsEnabled()));
    }
  }

  async function refresh() {
    if (!electronAPI.accountStateGet) return;
    try {
      const state = await electronAPI.accountStateGet();
      setVisible(!!state && state.state === "legacy-license-only" && !(await isDismissedToday()));
    } catch {}
  }

  async function applyLanguage(language) {
    if (!button) return;
    try {
      let lang = language;
      if (!lang && electronAPI.languageGet) lang = await electronAPI.languageGet();
      if (!lang && getLanguage) lang = getLanguage();
      const label = ACCOUNT_NUDGE_LABELS[lang] || ACCOUNT_NUDGE_LABELS.en;
      button.setAttribute("aria-label", label);
      button.setAttribute("title", label);
    } catch {}
  }

  function bind() {
    if (button) {
      button.addEventListener("pointerdown", (event) => {
        event.stopPropagation();
      });
      button.addEventListener("click", (event) => {
        event.preventDefault();
        event.stopPropagation();
        if (electronAPI.accountOpenLinkWindow) electronAPI.accountOpenLinkWindow();
      });
    }
    if (closeButton) {
      closeButton.addEventListener("pointerdown", (event) => {
        event.stopPropagation();
      });
      closeButton.addEventListener("click", (event) => {
        event.preventDefault();
        event.stopPropagation();
        const today = todayLocalDateKey();
        if (electronAPI.accountNudgeDismissedDateSet) {
          electronAPI.accountNudgeDismissedDateSet(today).catch(() => {});
        }
        try {
          localStorage.setItem(ACCOUNT_NUDGE_DISMISSED_DATE_KEY, today);
        } catch {}
        setVisible(false);
      });
    }
    if (electronAPI.onAccountFlow) {
      electronAPI.onAccountFlow((payload) => {
        if (payload && payload.step === "linked") {
          setVisible(false);
        }
      });
    }
  }

  return {
    applyLanguage,
    bind,
    refresh,
    setVisible,
  };
}

module.exports = {
  createAccountNudge,
};
