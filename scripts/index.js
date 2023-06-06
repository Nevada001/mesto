const buttonOpenEditProfilePopup = document.querySelector(
  ".profile__button-edit"
);

const popupEditProfile = document.querySelector(".popup_edit");
const buttonCloseAddCardForm = document.getElementById("addclose");
const buttonCloseEditProfilePopup = document.getElementById("editclose");
const buttonCloseImagePopup = document.getElementById("imageclose");
const formEditProfile = document.querySelector(".popup__form_type_edit");
const formElementAdd = document.querySelector(".popup__form_type_add");
const nameInput = document.getElementById("name-input");
const jobInput = document.getElementById("profession-input");
const profName = document.querySelector(".profile__title");
const proffesion = document.querySelector(".profile__info-text");
const popupAdd = document.querySelector(".popup_add");
const buttonOpenAddCardForm = document.querySelector(".profile__button-add");
const items = document.querySelector("#item").content;
const templateElements = document.querySelector(".cards");
const popupImage = document.querySelector(".popup_image");
const popupTitleName = popupImage.querySelector(".popup__name");
const popupPicture = popupImage.querySelector(".popup__picture");
const placeNameInput = document.getElementById("placeName");
const pictureLinkInput = document.getElementById("link");

function displayPopup(popup) {
  popup.classList.toggle("popup_opened");
}

function displayPopupEdit() {
  displayPopup(popupEditProfile);
  nameInput.value = profName.textContent;
  jobInput.value = proffesion.textContent;
}

function closePopup(popup) {
  popup.classList.remove("popup_opened");
}

function submitFormEditProfile(evt) {
  evt.preventDefault();
  profName.textContent = nameInput.value;
  proffesion.textContent = jobInput.value;
  closePopup(popupEditProfile);
}
buttonOpenEditProfilePopup.addEventListener("click", displayPopupEdit);
buttonCloseEditProfilePopup.addEventListener("click", () => {
  closePopup(popupEditProfile);
});

function createCards(name, link) {
  const card = items.querySelector(".card").cloneNode(true);
  const cardItem = card.querySelector(".card__image");
  card.querySelector(".card__name").textContent = name;
  cardItem.alt = name;
  cardItem.src = link;
  card.querySelector(".card__heart").addEventListener("click", (evt) => {
    evt.target.classList.toggle("card__heart_active");
  });
  card.querySelector(".card__delete").addEventListener("click", () => {
    card.remove();
  });
  card.querySelector(".card__image").addEventListener("click", () => {
    popupImage.classList.toggle("popup_opened");
    popupTitleName.textContent = name;
    popupPicture.src = link;
    popupPicture.alt = name;
  });
  return card;
}

document.addEventListener("keydown", (evt) => {
  if (evt.key === "Escape") {
    document.querySelectorAll(".popup").forEach((el) => {
      closePopup(el);
    });
  }
});

document.querySelectorAll(".popup").forEach((el) => {
      el.addEventListener('click', (evt) => {
        if(evt.target.classList.contains("popup")) {
          closePopup(el);  
        }
      })      
  });


buttonCloseImagePopup.addEventListener("click", () => {
  closePopup(popupImage);
});

formEditProfile.addEventListener("submit", submitFormEditProfile);

buttonOpenAddCardForm.addEventListener("click", () => {
  displayPopup(popupAdd);
  const buttonFormAddCardStartState = document.querySelector("#buttonCreate");
  buttonFormAddCardStartState.classList.add("popup__button_inactive");
});

buttonCloseAddCardForm.addEventListener("click", () => {
  closePopup(popupAdd);
});

initialCards.forEach((item) => {
  templateElements.append(createCards(item.name, item.link));
});

formElementAdd.addEventListener("submit", (evt) => {
  evt.preventDefault();
  templateElements.prepend(
    createCards(placeNameInput.value, pictureLinkInput.value)
  );
  closePopup(popupAdd);
  formElementAdd.reset();
});

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
const FormSubmitButtonChangeState = (formElement, buttonState) => {
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
      FormSubmitButtonChangeState(formElement, buttonState);
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

enableValidation({
  formSelector: ".popup__form",
  inputSelector: ".popup__input",
  submitButtonSelector: ".popup__button",
  inactiveButtonClass: "popup__button_inactive",
  inputErrorClass: "popup__input_invalid",
  errorClass: "error",
});
