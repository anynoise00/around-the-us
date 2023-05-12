import {
  popupCloseBtnSelector,
  popupOverlaySelector,
  popupVisible,
} from "../utils/constants.js";

export default class Popup {
  constructor(popupSelector) {
    this._isOpen = false;
    this._element = document.querySelector(popupSelector);
  }

  open() {
    this._isOpen = true;
    this._element.classList.add(popupVisible);
  }

  close() {
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

    document.addEventListener("keydown", (ev) => {
      this._handleEscClose(ev);
    });
  }

  _handleEscClose(ev) {
    if (this._isOpen && ev.key === "Escape") {
      this.close();
    }
  }
}
