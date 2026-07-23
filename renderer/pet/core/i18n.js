"use strict";

// Renderer-only translations for the pet window UI.

const I18N = {
  en: {
    agentComplete: "Task complete!",
    needsAttention: (name) => `${name || "Human"}, needs your attention!`,
    focusLabel: "Focus",
    restLabel: "Break",
    startBreak: (name) => `${name || "Human"}, take a break!`,
    startFocus: (name) => `${name || "Human"}, back to focus!`,
    drinkPrompt: (name) => `${name || "Human"}, time to drink water, meow!`,
    stretchPrompt: (name) => `${name || "Human"}, time to stretch, meow!`,
    updateChecking: "Checking...",
    updateAvailable: "Update",
    updateNone: "No updates",
    updateDownloading: (percent) => percent === null ? "Updating..." : `Updating ${percent}%`,
    updateRestarting: "Restarting...",
    userNameGuide: "Tell Shanks your name, and Shanks will call you for reminders and other moments.",
    userNamePlaceholder: "Enter your name",
    userGreeting: (name) => `Hi, ${name}!`,
    pomodoroPause: "Pause",
    pomodoroResume: "Resume",
    pomodoroReset: "Reset",
    reminderOnce: "Once",
    reminderCustomDays: "Choose days",
    reminderDaily: "Daily",
    reminderWeekdays: "Weekdays",
    reminderWeekends: "Weekends",
    reminderDaysShort: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
    reminderOpen: "Open reminders",
    reminderTitle: "Reminder",
    reminderPanelLabel: "Reminders",
    reminderRepeatGroupLabel: "Repeat",
    reminderDayPickerLabel: "Choose days",
    reminderMessagePlaceholder: "What should Shanks remind you?",
    reminderAdd: "Add",
    reminderCancel: "Cancel",
    reminderSave: "Save",
    reminderUpdate: "Update",
    reminderClose: "Close",
    reminderEmpty: "Add a reminder and Shanks will tell you on time.",
    reminderEdit: "Edit",
    reminderDelete: "Delete",
    sharePermissionFailed: "Could not record the screen. Please check macOS screen recording permission.",
    sharePermissionFailedWindows: "Could not record the screen. Please check Windows privacy or security settings for screen capture.",
    shareConversionFailed: "Could not convert the share video to MP4.",
    shareRecordingFailed: "Could not make the share video.",
  },
  ko: {
    agentComplete: "작업 완료냥!",
    needsAttention: (name) => `${name || "집사야"}, 확인이 필요하다냥!`,
    focusLabel: "집중냥",
    restLabel: "휴식냥",
    startBreak: (name) => `${name || "집사야"}, 쉬자냥!`,
    startFocus: (name) => `${name || "집사야"}, 다시 집중하자냥!`,
    drinkPrompt: (name) => `${name || "집사야"}, 물마시자냥!`,
    stretchPrompt: (name) => `${name || "집사야"}, 스트레칭하라냥!`,
    updateChecking: "업데이트 확인 중...",
    updateAvailable: "업데이트하기",
    updateNone: "최신 버전이다냥",
    updateDownloading: (percent) => percent === null ? "업데이트 중..." : `업데이트 중 ${percent}%`,
    updateRestarting: "재시작 중...",
    userNameGuide: "이름을 알려주면 콤냥이가 알림을 주거나 다양한 상황에서 사용자를 불러줄거예요.",
    userNamePlaceholder: "사용자 이름을 입력해주세요",
    userGreeting: (name) => `안녕, ${name}!`,
    pomodoroPause: "일시정지",
    pomodoroResume: "다시 시작",
    pomodoroReset: "초기화",
    reminderOnce: "한 번",
    reminderCustomDays: "요일 선택",
    reminderDaily: "매일",
    reminderWeekdays: "평일",
    reminderWeekends: "주말",
    reminderDaysShort: ["일", "월", "화", "수", "목", "금", "토"],
    reminderOpen: "알림 열기",
    reminderTitle: "알림",
    reminderPanelLabel: "알림장",
    reminderRepeatGroupLabel: "반복 설정",
    reminderDayPickerLabel: "요일 선택",
    reminderMessagePlaceholder: "무엇을 알려줄까냥?",
    reminderAdd: "추가",
    reminderCancel: "취소",
    reminderSave: "저장",
    reminderUpdate: "수정",
    reminderClose: "닫기",
    reminderEmpty: "알림을 등록하면 시간 맞춰 알려주겠다냥.",
    reminderEdit: "수정",
    reminderDelete: "삭제",
    sharePermissionFailed: "화면을 녹화할 수 없어요. macOS 화면 기록 권한을 확인해 주세요.",
    sharePermissionFailedWindows: "화면을 녹화할 수 없어요. Windows 개인정보 또는 보안 설정에서 화면 캡처 권한을 확인해 주세요.",
    shareConversionFailed: "자랑 영상을 MP4로 변환할 수 없어요.",
    shareRecordingFailed: "자랑 영상을 만들 수 없어요.",
  },
  ja: {
    agentComplete: "タスク完了にゃ！",
    needsAttention: (name) => `${name ? `${name}さん` : "ご主人"}、確認が必要だにゃ！`,
    focusLabel: "集中にゃ",
    restLabel: "休憩にゃ",
    startBreak: (name) => `${name ? `${name}さん` : "ご主人"}、休憩するにゃ！`,
    startFocus: (name) => `${name ? `${name}さん` : "ご主人"}、また集中するにゃ！`,
    drinkPrompt: (name) => `${name ? `${name}さん` : "ご主人"}、お水を飲むにゃ！`,
    stretchPrompt: (name) => `${name ? `${name}さん` : "ご主人"}、ストレッチするにゃ！`,
    updateChecking: "確認中...",
    updateAvailable: "アップデート",
    updateNone: "最新バージョンだにゃ",
    updateDownloading: (percent) => percent === null ? "アップデート中..." : `アップデート中 ${percent}%`,
    updateRestarting: "再起動中...",
    userNameGuide: "名前を教えると、Shanks が通知やいろいろな場面であなたを呼んでくれます。",
    userNamePlaceholder: "ユーザー名を入力してください",
    userGreeting: (name) => `こんにちは、${name}さん！`,
    pomodoroPause: "一時停止",
    pomodoroResume: "再開",
    pomodoroReset: "リセット",
    reminderOnce: "1回",
    reminderCustomDays: "曜日選択",
    reminderDaily: "毎日",
    reminderWeekdays: "平日",
    reminderWeekends: "週末",
    reminderDaysShort: ["日", "月", "火", "水", "木", "金", "土"],
    reminderOpen: "通知を開く",
    reminderTitle: "通知",
    reminderPanelLabel: "通知",
    reminderRepeatGroupLabel: "繰り返し",
    reminderDayPickerLabel: "曜日選択",
    reminderMessagePlaceholder: "何を知らせるにゃ？",
    reminderAdd: "追加",
    reminderCancel: "キャンセル",
    reminderSave: "保存",
    reminderUpdate: "更新",
    reminderClose: "閉じる",
    reminderEmpty: "通知を登録したら時間に合わせて知らせるにゃ。",
    reminderEdit: "編集",
    reminderDelete: "削除",
    sharePermissionFailed: "画面を録画できませんでした。macOS の画面収録権限を確認してください。",
    sharePermissionFailedWindows: "画面を録画できませんでした。Windows のプライバシーまたはセキュリティ設定で画面キャプチャ権限を確認してください。",
    shareConversionFailed: "自慢動画を MP4 に変換できませんでした。",
    shareRecordingFailed: "自慢動画を作成できませんでした。",
  },
};

function normalizeLanguage(language) {
  const lang = String(language || "").toLowerCase().split("-")[0];
  return I18N[lang] ? lang : "en";
}

function createI18n({ initialLanguage = "en" } = {}) {
  let currentLanguage = normalizeLanguage(initialLanguage);

  function setLanguage(language) {
    currentLanguage = normalizeLanguage(language);
    return currentLanguage;
  }

  function getLanguage() {
    return currentLanguage;
  }

  function tr(key, ...args) {
    const table = I18N[currentLanguage] || I18N.en;
    const value = table[key] || I18N.en[key] || key;
    return typeof value === "function" ? value(...args) : value;
  }

  return {
    getLanguage,
    normalizeLanguage,
    setLanguage,
    tr,
  };
}

module.exports = {
  createI18n,
  normalizeLanguage,
};
