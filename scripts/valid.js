const enableValidationObject = {
  formSelector: ".popup__form",
  inputSelector: ".popup__input",
  submitButtonSelector: ".popup__button",
  inactiveButtonClass: "popup__button_inactive",
  inputErrorClass: "popup__input_invalid",
  errorClass: "error",
};

const hideInputError = (validaitionConfig, inputElement) => {
  const errorElement = document.querySelector(`.${inputElement.id}-error`);
  errorElement.textContent = "";
  inputElement.classList.remove(validaitionConfig.inputErrorClass);
};

const showInputError = (validaitionConfig, inputElement) => {
  const errorElement = document.querySelector(`.${inputElement.id}-error`);
  errorElement.textContent = inputElement.validationMessage;
  inputElement.classList.add(validaitionConfig.inputErrorClass);
};
const formSubmitButtonChangeState = (formElement, buttonState) => {
  if (!formElement.checkValidity()) {
    buttonState.setAttribute("disabled", true);
    buttonState.classList.add("popup__button_inactive");
  } else {
    buttonState.removeAttribute("disabled", true);
    buttonState.classList.remove("popup__button_inactive");
  }
};
const validateInput = (validaitionConfig, inputElement) => {
  if (!inputElement.validity.valid) {
    showInputError(validaitionConfig, inputElement);
  } else {
    hideInputError(validaitionConfig, inputElement);
  }
};
const setEventListeners = (formElement, validaitionConfig) => {
  const inputList = formElement.querySelectorAll(
    validaitionConfig.inputSelector
  );
  const buttonState = formElement.querySelector(
    validaitionConfig.submitButtonSelector
  );
  inputList.forEach((inputElement) => {
    inputElement.addEventListener("input", () => {
      validateInput(validaitionConfig, inputElement);
      formSubmitButtonChangeState(formElement, buttonState);
    });
  });
};
const enableValidation = (validaitionConfig) => {
  const formList = document.querySelectorAll(validaitionConfig.formSelector);
  formList.forEach((popupForm) => {
    setEventListeners(popupForm, validaitionConfig);
    popupForm.addEventListener("submit", (evt) => {
      evt.preventDefault;
    });
  });
};

enableValidation(enableValidationObject);
