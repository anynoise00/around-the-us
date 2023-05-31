import {
  popupCloseBtnSelector,
  popupOverlaySelector,
  popupVisible,
} from "../utils/constants.js";

export default class Popup {
  constructor(popupSelector) {
    this._isOpen = false;
    this._element = document.querySelector(popupSelector);

    this._handleEscClose = (ev) => {
      if (ev.key === "Escape" && this._isOpen) {
        this.close();
      }
    };
  }

  open() {
    document.addEventListener("keydown", this._handleEscClose);

    this._isOpen = true;
    this._element.classList.add(popupVisible);
  }

  close() {
    document.removeEventListener("keydown", this._handleEscClose);

    this._isOpen = false;
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
}
