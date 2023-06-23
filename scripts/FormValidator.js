export class FormValidator {
  constructor(validaitionConfig, formElement) {
    this._formElement = formElement;
    this._inputErrorClass = validaitionConfig.inputErrorClass;
    this._buttonState = formElement.querySelector(
      validaitionConfig.submitButtonSelector
    );
    this._inactiveButtonClass = validaitionConfig.inactiveButtonClass;
    this._inputList = formElement.querySelectorAll(validaitionConfig.inputSelector);
    this._inputElement = formElement.querySelector(validaitionConfig.inputSelector)
  }

  _hideInputError(inputElement) {
    const errorElement = document.querySelector(
      `.${inputElement.id}-error`
    );
    errorElement.textContent = "";
    inputElement.classList.remove(this._inputErrorClass);
  }

  _showInputError(inputElement) {
    const errorElement = document.querySelector(
      `.${inputElement.id}-error`
    );
    errorElement.textContent = inputElement.validationMessage;
    inputElement.classList.add(this._inputErrorClass);
  }
  _removeDisabledButtonState() {
    this._buttonState.removeAttribute("disabled", true);
    this._buttonState.classList.remove(this._inactiveButtonClass);
  }
  _addDisabledButtonState() {
    this._buttonState.setAttribute("disabled", true);
    this._buttonState.classList.add(this._inactiveButtonClass);
  }
  toggleButtonState() {
    if (!this._formElement.checkValidity()) {
      this._addDisabledButtonState();
    } else {
      this._removeDisabledButtonState();
    }
  }
  
  validateInput(inputElement) {
    if (!inputElement.validity.valid) {
      this._showInputError(inputElement);
    } else {
      this._hideInputError(inputElement);
    }
  }


  _setEventListeners() {
    this._inputList.forEach((inputElement) => {
        inputElement.addEventListener("input", () => {
          this.validateInput(inputElement);
          this.toggleButtonState();
        });
      });
  }
  enableValidation()  {
    this._setEventListeners();
  };
}
