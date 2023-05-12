export default class Popup {
  constructor(popupSelector) {
    this._element = document.querySelector(popupSelector);
  }

  open() {
    this._element.classList.add("popup_visible");
  }

  close() {
    this._element.classList.remove("popup_visible");
  }

  setEventListeners() {
    const closeBtn = this._element.querySelector(".popup__button-close");
    closeBtn.addEventListener("click", () => {
      this.close();
    });

    const popupOverlay = this._element.querySelector(".popup__overlay");
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