import Popup from "./Popup.js";
import { formFieldSelector, formSelector } from "./utils/constants.js";

export default class PopupWithForm extends Popup {
  constructor({ handleFormSubmit }, popupSelector) {
    super(popupSelector);
    this._handleFormSubmit = handleFormSubmit;
    this._form = this._element.querySelector(formSelector);
  }

  setEventListeners() {
    super.setEventListeners();

    this._form.addEventListener("submit", (ev) => {
      const values = this._getInputValues();
      this._handleFormSubmit(ev, values);
    });
  }

  close() {
    super.close();
    this._form.reset();
  }

  _getInputValues() {
    const formValues = {};
    const formFields = this._form.querySelectorAll(formFieldSelector);

    formFields.forEach((field) => {
      formValues[field.name] = field.value;
    })

    return formValues;
  }
}
