import Popup from "./Popup.js";
import {
  formFieldSelector,
  formSelector,
  formSubmitSelector,
} from "../utils/constants.js";

export default class PopupWithForm extends Popup {
  constructor(
    {
      handleFormSubmit,
      submitDefaultText = "Enviar",
      submitSendText = "Enviando...",
      onOpen = () => {},
      onClose = () => {},
    },
    popupSelector
  ) {
    super(popupSelector);
    this._handleFormSubmit = handleFormSubmit;
    this._onOpen = onOpen;
    this._onClose = onClose;
    this._form = this._element.querySelector(formSelector);

    this._submitBtn = this._form.querySelector(formSubmitSelector);
    this._submitDefaultText = submitDefaultText;
    this._submitSendText = submitSendText;
  }

  setEventListeners() {
    super.setEventListeners();

    this._form.addEventListener("submit", (ev) => {
      const values = this._getInputValues();
      this._submitBtn.textContent = this._submitSendText;
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
    this._submitBtn.textContent = this._submitDefaultText;
    this._form.reset();
    this._onClose();
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
