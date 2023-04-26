export default class FormValidator {
  constructor(config, formSelector) {
    this._config = config;
    this._formSelector = formSelector;
  }

  enableValidation() {
    const formList = Array.from(document.querySelectorAll(this._formSelector));
    formList.forEach((formElement) => {
      formElement.addEventListener("submit", (ev) => {
        ev.preventDefault();
      });
  
      this._setEventListeners(formElement);
    });
  }

  _setEventListeners(formElement) {
    const inputList = Array.from(formElement.querySelectorAll(this._config.inputSelector));
    const buttonElement = formElement.querySelector(this._config.submitButtonSelector);
    this._toggleButtonState(inputList, buttonElement, this._config);
    
    inputList.forEach((inputElement) => {
      inputElement.addEventListener("input", () => {
        this._checkInputValidity(formElement, inputElement, this._config);
        this._toggleButtonState(inputList, buttonElement, this._config);
      });
    });
  };

  _checkInputValidity(formElement, inputElement) {
    if (!inputElement.validity.valid) {
      this._showInputError(formElement, inputElement, inputElement.validationMessage, this._config);
    } else {
      this._hideInputError(formElement, inputElement, this._config);
    }
  };
  
  _toggleButtonState(inputList, buttonElement) {
    if (this._hasInvalidInput(inputList)) {
      buttonElement.classList.add(this._config.inactiveButtonClass);
    } else {
      buttonElement.classList.remove(this._config.inactiveButtonClass);
    }
  };

  _hasInvalidInput(inputList) {
    return inputList.some((inputElement) => {
      return !inputElement.validity.valid;
    });
  };

  _showInputError(formElement, inputElement, errorMessage) {
    const errorElement = formElement.querySelector(`.${inputElement.id}-error`);
    inputElement.classList.add(this._config.inputErrorClass);
    errorElement.textContent = errorMessage;
    errorElement.classList.add(this._config.errorClass);
  };
  
  _hideInputError(formElement, inputElement) {
    const errorElement = formElement.querySelector(`.${inputElement.id}-error`);
    inputElement.classList.remove(this._config.inputErrorClass);
    errorElement.classList.remove(this._config.errorClass);
    errorElement.textContent = "";
  };
}