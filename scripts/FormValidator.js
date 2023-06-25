export class FormValidator {
  constructor(validaitionConfig, formElement) {
    this._formElement = formElement;
    this._inputErrorClass = validaitionConfig.inputErrorClass;
    this.__buttonSubmit = formElement.querySelector(
      validaitionConfig.submitButtonSelector
    );
    this._inactiveButtonClass = validaitionConfig.inactiveButtonClass;
    this._inputList = formElement.querySelectorAll(
      validaitionConfig.inputSelector
    );
    this._inputElement = formElement.querySelector(
      validaitionConfig.inputSelector
    );
  }

  _hideInputError(inputElement) {
    const errorElement = document.querySelector(`.${inputElement.id}-error`);
    errorElement.textContent = "";
    inputElement.classList.remove(this._inputErrorClass);
  }

  _showInputError(inputElement) {
    const errorElement = document.querySelector(`.${inputElement.id}-error`);
    errorElement.textContent = inputElement.validationMessage;
    inputElement.classList.add(this._inputErrorClass);
  }
  _removeDisabledButtonState() {
    this.__buttonSubmit.removeAttribute("disabled", true);
    this.__buttonSubmit.classList.remove(this._inactiveButtonClass);
  }
  _addDisabledButtonState() {
    this.__buttonSubmit.setAttribute("disabled", true);
    this.__buttonSubmit.classList.add(this._inactiveButtonClass);
  }
  toggleButtonState() {
    if (!this._formElement.checkValidity()) {
      this._addDisabledButtonState();
    } else {
      this._removeDisabledButtonState();
    }
  }

  _validateInput(inputElement) {
    if (!inputElement.validity.valid) {
      this._showInputError(inputElement);
    } else {
      this._hideInputError(inputElement);
    }
  }

  resetValidationState() {
    this._inputList.forEach((input) => { 
     this._hideInputError(input);
    })
  }

  _setEventListeners() {
    this._inputList.forEach((inputElement) => {
      inputElement.addEventListener("input", () => {
        this._validateInput(inputElement);
        this.toggleButtonState();
      });
    });
  }
  enableValidation() {
    this._setEventListeners();
  }
}
