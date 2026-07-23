"use strict";

// Cat name, user name, and fixed-message editor forms.

function createNameEditors({
  catNameEditor,
  catNameInput,
  catNameCancel,
  userNameEditor,
  userNameGuide,
  userNameInput,
  userNameCancel,
  fixedMessageEditor,
  fixedMessageInput,
  fixedMessageCancel,
  electronAPI,
  keyboardFocus,
  tr,
  getCurrentCatName,
  getCurrentFixedMessage,
  applyCatNameSettings,
  applyUserNameSettings,
  applyFixedMessageSettings,
  onUserNameSaved,
}) {
  function openCatNameEditor(initialName) {
    if (!catNameEditor || !catNameInput) return;
    if (electronAPI.catNamePromptShown) {
      electronAPI.catNamePromptShown().catch(() => {});
    }
    catNameInput.value = (initialName || getCurrentCatName() || "Comnyang").trim();
    document.body.dataset.editingName = "1";
    keyboardFocus.focusInput(catNameInput);
  }

  function closeCatNameEditor() {
    delete document.body.dataset.editingName;
    keyboardFocus.update();
  }

  function openUserNameEditor(initialName) {
    if (!userNameEditor || !userNameInput) return;
    userNameInput.value = String(initialName || "").trim();
    if (userNameGuide) userNameGuide.textContent = tr("userNameGuide");
    document.body.dataset.editingUserName = "1";
    keyboardFocus.focusInput(userNameInput);
  }

  function closeUserNameEditor() {
    delete document.body.dataset.editingUserName;
    keyboardFocus.update();
  }

  function openFixedMessageEditor(initialMessage) {
    if (!fixedMessageEditor || !fixedMessageInput) return;
    // 창이 화면 밖(또는 빼꼼)이면 입력 폼이 안 보이므로 먼저 화면 안으로 들인다.
    if (electronAPI && electronAPI.bringPetIntoView) electronAPI.bringPetIntoView();
    fixedMessageInput.value = String(initialMessage || getCurrentFixedMessage() || "").trim();
    document.body.dataset.editingFixedMessage = "1";
    keyboardFocus.focusInput(fixedMessageInput);
  }

  function closeFixedMessageEditor() {
    delete document.body.dataset.editingFixedMessage;
    keyboardFocus.update();
  }

  function bind() {
    if (catNameEditor && catNameInput) {
      catNameEditor.addEventListener("submit", async (event) => {
        event.preventDefault();
        const settings = await electronAPI.catNameSet(catNameInput.value);
        applyCatNameSettings(settings);
        closeCatNameEditor();
      });
    }

    if (catNameCancel) {
      catNameCancel.addEventListener("click", () => closeCatNameEditor());
    }

    if (userNameEditor && userNameInput) {
      userNameEditor.addEventListener("submit", async (event) => {
        event.preventDefault();
        const settings = await electronAPI.userNameSet(userNameInput.value);
        applyUserNameSettings(settings);
        closeUserNameEditor();
        if (typeof onUserNameSaved === "function") onUserNameSaved();
      });
    }

    if (userNameCancel) {
      userNameCancel.addEventListener("click", () => closeUserNameEditor());
    }

    if (fixedMessageEditor && fixedMessageInput) {
      fixedMessageEditor.addEventListener("submit", async (event) => {
        event.preventDefault();
        const settings = await electronAPI.fixedMessageSet(fixedMessageInput.value);
        applyFixedMessageSettings(settings);
        closeFixedMessageEditor();
      });
    }

    if (fixedMessageCancel) {
      fixedMessageCancel.addEventListener("click", () => closeFixedMessageEditor());
    }
  }

  return {
    bind,
    closeCatNameEditor,
    closeFixedMessageEditor,
    closeUserNameEditor,
    openCatNameEditor,
    openFixedMessageEditor,
    openUserNameEditor,
  };
}

module.exports = {
  createNameEditors,
};
