import { popupConfirmBtnSelector } from "../utils/constants.js";
import Popup from "./Popup.js";

export default class ConfirmationPopup extends Popup {
  constructor(popupSelector) {
    super(popupSelector);
  }

  setEventListeners() {
    super.setEventListeners();

    this._element
      .querySelector(popupConfirmBtnSelector)
      .addEventListener("click", (ev) => {
        ev.preventDefault();
        this._handleConfirm();
      });
  }

  setConfirmAction(handler) {
    this._handleConfirm = handler;
  }
}
