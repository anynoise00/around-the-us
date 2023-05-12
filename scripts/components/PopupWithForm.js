import Popup from "./Popup.js";
import { formFieldSelector, formSelector } from "../utils/constants.js";

export default class PopupWithForm extends Popup {
  constructor({ handleFormSubmit, onOpen = () => {} }, popupSelector) {
    super(popupSelector);
    this._handleFormSubmit = handleFormSubmit;
    this._onOpen = onOpen;
    this._form = this._element.querySelector(formSelector);
  }

  setEventListeners() {
    super.setEventListeners();

    this._form.addEventListener("submit", (ev) => {
      const values = this._getInputValues();
      this._handleFormSubmit(ev, values);
    });
  }

  setFormValues(data) {
    Object.entries(data).forEach(([key, value]) => {
      const field = this._form.querySelector(
        formFieldSelector + `[name="${key}"]`
      );

      field.value = value;
    });
  }

  open() {
    this._onOpen();
    super.open();
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
    });

    return formValues;
  }
}
