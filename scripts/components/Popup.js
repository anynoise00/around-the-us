import {
  popupCloseBtnSelector,
  popupOverlaySelector,
  popupVisible,
} from "../utils/constants.js";

export default class Popup {
  constructor(popupSelector) {
    this._element = document.querySelector(popupSelector);
  }

  open() {
    this._element.classList.add(popupVisible);
  }

  close() {
    this._element.classList.remove(popupVisible);
  }

  setEventListeners() {
    const closeBtn = this._element.querySelector(popupCloseBtnSelector);
    closeBtn.addEventListener("click", () => {
      this.close();
    });

    const popupOverlay = this._element.querySelector(popupOverlaySelector);
    popupOverlay.addEventListener("click", () => {
      this.close();
    });
  }

  _handleEscClose(key) {
    if (key === "Escape") {
      this.close();
    }
  }
}
