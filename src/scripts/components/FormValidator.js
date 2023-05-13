export default class FormValidator {
  constructor(config, formSelector) {
    this._inputSelector = config.inputSelector;
    this._submitButtonSelector = config.submitButtonSelector;
    this._inactiveButtonClass = config.inactiveButtonClass;
    this._inputErrorClass = config.inputErrorClass;
    this._errorClass = config.errorClass;

    this._form = document.querySelector(formSelector);
  }

  enableValidation() {
    this._form.addEventListener("submit", (ev) => {
      ev.preventDefault();
    });

    this._setEventListeners();
  }

  clearWarnings() {
    const inputList = Array.from(
      this._form.querySelectorAll(this._inputSelector)
    );

    const buttonElement = this._form.querySelector(this._submitButtonSelector);
    this._toggleButtonState(inputList, buttonElement);

    inputList.forEach((input) => {
      this._hideInputError(input);
    });
  }

  _setEventListeners() {
    const inputList = Array.from(
      this._form.querySelectorAll(this._inputSelector)
    );
    const buttonElement = this._form.querySelector(this._submitButtonSelector);
    this._toggleButtonState(inputList, buttonElement);

    inputList.forEach((input) => {
      input.addEventListener("input", () => {
        this._checkInputValidity(input);
        this._toggleButtonState(inputList, buttonElement);
      });
    });
  }

  _checkInputValidity(input) {
    this._setCustomErrorMessage(input);
    if (!input.validity.valid) {
      this._showInputError(input, input.validationMessage);
    } else {
      this._hideInputError(input);
    }
  }

  _toggleButtonState(inputList, buttonElement) {
    if (this._hasInvalidInput(inputList)) {
      buttonElement.classList.add(this._inactiveButtonClass);
    } else {
      buttonElement.classList.remove(this._inactiveButtonClass);
    }
  }

  _hasInvalidInput(inputList) {
    return inputList.some((inputElement) => !inputElement.validity.valid);
  }

  _showInputError(input, errorMessage) {
    const errorElement = this._form.querySelector(`.${input.id}-error`);
    input.classList.add(this._inputErrorClass);
    /* 
      Boa tarde. Esta é minha primeira vez enviando um comentário pro revisor,
      então minha primeira pergunta é: uma revisão com comentários conta pro limite
      de 4 revisões máximas? (vejo que na lista de checagem isso é marcado como 
      "projeto rejeitado sem revisão")

      E também finalmente acho que resolvi a parte do erro de validação. Eu não
      sei o motivo de pra você estar aparecendo em inglês, talvez tenha algo
      a ver com o navegador. Mas sinto que usar a solução de usar um objeto com
      as mensagens de vallidação como chave causaria problemas mais pra frente.
      Pois mesmo chegando o valor no console, ele estava em português, então não
      seria possível acessar o objeto.
    */
    errorElement.textContent = errorMessage;
    errorElement.classList.add(this._errorClass);
  }

  _hideInputError(input) {
    const errorElement = this._form.querySelector(`.${input.id}-error`);
    input.classList.remove(this._inputErrorClass);
    errorElement.classList.remove(this._errorClass);
    errorElement.textContent = "";
  }

  _setCustomErrorMessage(input) {
    const validityState = input.validity;

    if (validityState.valueMissing) {
      input.setCustomValidity("Preencha este campo.");
    } else if (validityState.tooShort) {
      input.setCustomValidity("Por favor, insira pelo menos 2 caracteres.");
    } else if (validityState.typeMismatch) {
      input.setCustomValidity("Por favor, insira um endereço web.");
    } else {
      input.setCustomValidity("");
    }
  }
}
