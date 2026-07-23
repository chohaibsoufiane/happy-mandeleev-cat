"use strict";

// Reminder panel, reminder form, reminder list, and reminder trigger UI wiring.

function createReminderPanel({
  clockButton,
  panel,
  panelTitle,
  form,
  timeInput,
  repeatInput,
  repeatButtons,
  dayPicker,
  messageInput,
  saveButton,
  cancelButton,
  addButton,
  closeButton,
  listEl,
  userNameGuide,
  userNameInput,
  electronAPI,
  keyboardFocus,
  tr,
  getLanguage,
  getPetPeekState,
  showReminderNotification,
}) {
  let currentReminders = [];
  let editingReminderId = null;

  function reminderRepeatLabel(repeat) {
    if (repeat === "daily") return tr("reminderDaily");
    if (repeat === "weekdays") return tr("reminderWeekdays");
    if (repeat === "weekends") return tr("reminderWeekends");
    if (repeat === "custom") return tr("reminderCustomDays");
    return tr("reminderOnce");
  }

  function reminderDaysLabel(days) {
    const names = tr("reminderDaysShort");
    const selected = Array.isArray(days) ? days : [];
    const separator = getLanguage() === "en" ? " " : "";
    return selected.map((day) => names[Number(day)]).filter(Boolean).join(separator);
  }

  function selectedReminderDays() {
    if (!dayPicker) return [];
    return Array.from(dayPicker.querySelectorAll("input[type='checkbox']:checked"))
      .map((input) => Number(input.value))
      .filter((day) => Number.isInteger(day) && day >= 0 && day <= 6);
  }

  function updateDayPickerVisibility() {
    if (!dayPicker || !repeatInput) return;
    dayPicker.hidden = repeatInput.value !== "custom";
  }

  function setRepeat(value) {
    if (!repeatInput) return;
    repeatInput.value = value === "custom" ? "custom" : "none";
    if (repeatButtons) {
      for (const button of repeatButtons.querySelectorAll("button[data-repeat]")) {
        button.classList.toggle("is-selected", button.dataset.repeat === repeatInput.value);
      }
    }
    updateDayPickerVisibility();
  }

  function updateSaveButtonText() {
    if (saveButton) saveButton.textContent = editingReminderId ? tr("reminderUpdate") : tr("reminderSave");
  }

  function applyI18n() {
    if (clockButton) clockButton.setAttribute("aria-label", tr("reminderOpen"));
    if (userNameGuide) userNameGuide.textContent = tr("userNameGuide");
    if (userNameInput) userNameInput.placeholder = tr("userNamePlaceholder");
    if (panelTitle) panelTitle.textContent = tr("reminderTitle");
    if (panel) panel.setAttribute("aria-label", tr("reminderPanelLabel"));
    if (messageInput) messageInput.placeholder = tr("reminderMessagePlaceholder");
    if (addButton) addButton.textContent = tr("reminderAdd");
    if (cancelButton) cancelButton.textContent = tr("reminderCancel");
    if (closeButton) closeButton.textContent = tr("reminderClose");
    if (repeatButtons) repeatButtons.setAttribute("aria-label", tr("reminderRepeatGroupLabel"));
    if (repeatButtons) {
      const once = repeatButtons.querySelector('button[data-repeat="none"]');
      const custom = repeatButtons.querySelector('button[data-repeat="custom"]');
      if (once) once.textContent = tr("reminderOnce");
      if (custom) custom.textContent = tr("reminderCustomDays");
    }
    if (dayPicker) {
      dayPicker.setAttribute("aria-label", tr("reminderDayPickerLabel"));
      const names = tr("reminderDaysShort");
      for (const label of dayPicker.querySelectorAll("label")) {
        const input = label.querySelector("input");
        const day = input ? Number(input.value) : -1;
        const text = names[day] || "";
        for (const node of Array.from(label.childNodes)) {
          if (node.nodeType === 3) node.remove();
        }
        label.appendChild(document.createTextNode(text));
      }
    }
    updateSaveButtonText();
    renderReminders(currentReminders);
  }

  function openPanel() {
    // 창이 화면 밖(또는 빼꼼)이면 리마인더 폼이 안 보이므로 먼저 화면 안으로 들인다.
    if (electronAPI && electronAPI.bringPetIntoView) electronAPI.bringPetIntoView();
    document.body.dataset.reminderPanel = "1";
  }

  function applySettings(settings) {
    const showButtonOutside = !!(settings && settings.showButtonOutside);
    document.body.toggleAttribute("data-reminder-button", showButtonOutside);
  }

  function openForm() {
    document.body.dataset.reminderForm = "1";
    keyboardFocus.setMode(true);
    if (timeInput && !timeInput.value) {
      const now = new Date();
      now.setMinutes(now.getMinutes() + 10);
      timeInput.value = `${String(now.getHours()).padStart(2, "0")}:${String(now.getMinutes()).padStart(2, "0")}`;
    }
    requestAnimationFrame(() => {
      if (messageInput) messageInput.focus();
    });
  }

  function closePanel() {
    delete document.body.dataset.reminderPanel;
    closeForm();
  }

  function closeForm() {
    delete document.body.dataset.reminderForm;
    keyboardFocus.update();
  }

  function clearDaySelection() {
    if (!dayPicker) return;
    for (const input of dayPicker.querySelectorAll("input[type='checkbox']")) input.checked = false;
  }

  function setDaySelection(days) {
    clearDaySelection();
    if (!dayPicker || !Array.isArray(days)) return;
    const selected = new Set(days.map((day) => Number(day)));
    for (const input of dayPicker.querySelectorAll("input[type='checkbox']")) {
      input.checked = selected.has(Number(input.value));
    }
  }

  function resetForm() {
    editingReminderId = null;
    updateSaveButtonText();
    if (timeInput) timeInput.value = "";
    if (messageInput) messageInput.value = "";
    setRepeat("none");
    clearDaySelection();
    closeForm();
  }

  function editReminder(reminder) {
    if (!reminder || !reminder.id) return;
    editingReminderId = reminder.id;
    document.body.dataset.reminderPanel = "1";
    document.body.dataset.reminderForm = "1";
    keyboardFocus.setMode(true);
    if (timeInput) timeInput.value = reminder.time || "";
    if (messageInput) messageInput.value = reminder.message || "";
    updateSaveButtonText();
    setRepeat(reminder.repeat === "custom" ? "custom" : "none");
    setDaySelection(reminder.days);
    requestAnimationFrame(() => {
      if (messageInput) {
        messageInput.focus();
        messageInput.select();
      }
    });
  }

  function currentReminderTimeKey() {
    const now = new Date();
    return `${String(now.getHours()).padStart(2, "0")}:${String(now.getMinutes()).padStart(2, "0")}`;
  }

  function isReminderVisuallyDisabled(reminder) {
    if (!reminder) return false;
    return reminder.repeat === "none" && String(reminder.time || "") < currentReminderTimeKey();
  }

  function renderReminders(reminders) {
    currentReminders = Array.isArray(reminders) ? reminders : [];
    if (!listEl) return;
    listEl.textContent = "";
    if (!currentReminders.length) {
      const empty = document.createElement("div");
      empty.className = "reminder-empty";
      empty.textContent = tr("reminderEmpty");
      listEl.appendChild(empty);
      return;
    }
    for (const reminder of currentReminders.slice().sort((a, b) => String(a.time).localeCompare(String(b.time)))) {
      const item = document.createElement("div");
      item.className = `reminder-item${isReminderVisuallyDisabled(reminder) ? " is-disabled" : ""}`;

      const time = document.createElement("span");
      time.textContent = reminder.time || "--:--";

      const message = document.createElement("span");
      message.className = "reminder-message";
      message.textContent = reminder.message || "";
      message.title = reminder.message || "";

      const repeat = document.createElement("span");
      repeat.className = "reminder-repeat";
      const dayLabel = reminder.repeat === "custom" ? reminderDaysLabel(reminder.days) : "";
      repeat.textContent = dayLabel ? dayLabel : reminderRepeatLabel(reminder.repeat);

      const edit = document.createElement("button");
      edit.type = "button";
      edit.textContent = tr("reminderEdit");
      edit.addEventListener("click", () => editReminder(reminder));

      const remove = document.createElement("button");
      remove.type = "button";
      remove.textContent = tr("reminderDelete");
      remove.addEventListener("click", () => {
        electronAPI.reminderDelete(reminder.id).catch(() => {});
      });

      item.appendChild(time);
      item.appendChild(message);
      item.appendChild(repeat);
      item.appendChild(edit);
      item.appendChild(remove);
      listEl.appendChild(item);
    }
  }

  function bindDom() {
    if (clockButton) {
      clockButton.addEventListener("click", (event) => {
        event.stopPropagation();
        if (document.body.dataset.reminderPanel) closePanel();
        else openPanel();
      });
    }

    if (closeButton) {
      closeButton.addEventListener("click", () => {
        closePanel();
        resetForm();
      });
    }

    if (addButton) {
      addButton.addEventListener("click", () => {
        resetForm();
        openForm();
      });
    }

    if (cancelButton) {
      cancelButton.addEventListener("click", () => resetForm());
    }

    if (repeatButtons) {
      repeatButtons.addEventListener("click", (event) => {
        const button = event.target && event.target.closest ? event.target.closest("button[data-repeat]") : null;
        if (!button) return;
        setRepeat(button.dataset.repeat);
      });
      setRepeat(repeatInput ? repeatInput.value : "none");
    }

    if (form && timeInput && repeatInput && messageInput) {
      form.addEventListener("submit", async (event) => {
        event.preventDefault();
        const message = messageInput.value.trim();
        if (!timeInput.value || !message) return;
        const repeat = repeatInput.value;
        const days = repeat === "custom" ? selectedReminderDays() : [];
        if (repeat === "custom" && days.length === 0) return;
        const payload = {
          time: timeInput.value,
          message,
          repeat,
          days,
        };
        const result = editingReminderId
          ? await electronAPI.reminderUpdate({ ...payload, id: editingReminderId })
          : await electronAPI.reminderAdd(payload);
        if (result && result.ok) {
          resetForm();
          renderReminders(await electronAPI.remindersGet());
        }
      });
    }
  }

  function bindElectron() {
    applyI18n();
    electronAPI.remindersGet().then(renderReminders).catch(() => {});
    setInterval(() => renderReminders(currentReminders), 30 * 1000);
    electronAPI.onRemindersChanged(renderReminders);
    electronAPI.onReminderSettingsChanged(applySettings);
    electronAPI.onReminderPanelOpen(() => {
      openPanel();
    });
    electronAPI.onReminderTriggered((payload) => {
      const text = payload && typeof payload.text === "string" ? payload.text.trim() : "";
      if (!text) return;
      const petPeekState = getPetPeekState();
      if (petPeekState && electronAPI.unpeekPet) {
        const returnPeekEdge = petPeekState.edge;
        electronAPI.unpeekPet();
        setTimeout(() => showReminderNotification(text), 180);
        if (returnPeekEdge && electronAPI.peekPet) {
          setTimeout(() => {
            if (!getPetPeekState()) electronAPI.peekPet(returnPeekEdge);
          }, 6000);
        }
        return;
      }
      showReminderNotification(text);
    });
  }

  function bind() {
    bindDom();
    bindElectron();
  }

  return {
    applyI18n,
    applySettings,
    bind,
    closePanel,
    openPanel,
    renderReminders,
    resetForm,
  };
}

module.exports = {
  createReminderPanel,
};
