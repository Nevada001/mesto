import { initialCards, enableValidationObject} from "./constants.js";
import { FormValidator } from "./FormValidator.js";
import { Card } from "./Card.js";
const buttonOpenEditProfilePopup = document.querySelector(
  ".profile__button-edit"
);
const popupList = document.querySelectorAll(".popup");
const popupEditProfile = document.querySelector(".popup_edit");
const formEditProfile = document.querySelector(".popup__form_type_edit");
const formElementAdd = document.querySelector(".popup__form_type_add");
const nameInput = document.querySelector("#name-input");
const jobInput = document.querySelector("#profession-input");
const profName = document.querySelector(".profile__title");
const proffesion = document.querySelector(".profile__info-text");
const popupAdd = document.querySelector(".popup_add");
const buttonOpenAddCardForm = document.querySelector(".profile__button-add");
const cardsContainer = document.querySelector(".cards");
const placeNameInput = document.querySelector("#placeName");
const linkInput = document.querySelector("#link");

function closePopupOnEsc(evt) {
  if (evt.key === "Escape") {
    closePopup(document.querySelector(".popup_opened"));
  }
}

function closePopup(popup) {
  popup.classList.remove("popup_opened");
}
function displayPopup(popup) {
  popup.classList.add("popup_opened");
  document.addEventListener("keydown", closePopupOnEsc);
}

function displayPopupEdit() {
  displayPopup(popupEditProfile);
  nameInput.value = profName.textContent;
  jobInput.value = proffesion.textContent;
}

function submitFormEditProfile(evt) {
  evt.preventDefault();
  profName.textContent = nameInput.value;
  proffesion.textContent = jobInput.value;
  closePopup(popupEditProfile);
}

popupList.forEach((el) => {
  el.addEventListener("mousedown", (evt) => {
    if (
      evt.target.classList.contains("popup_opened") ||
      evt.target.classList.contains("popup__closed")
    ) {
      closePopup(el);
    }
  });
});

initialCards.forEach((item) => {
  const card = new Card(item, "#item");
  const cardElement = card.generateCard();
  cardsContainer.append(cardElement);
});

formElementAdd.addEventListener("submit", (evt) => {
  evt.preventDefault();
  const newCardData = {
    name: placeNameInput.value,
    link: linkInput.value
  }
  const card = new Card(newCardData, "#item");
  const cardElement = card.generateCard();
  cardsContainer.prepend(cardElement);
  closePopup(popupAdd);
  formElementAdd.reset();
});

formEditProfile.addEventListener("submit", submitFormEditProfile);

buttonOpenEditProfilePopup.addEventListener("click", () => {
  displayPopupEdit();
  popupEditValidator.resetValidationState();
  popupEditValidator.toggleButtonState();
});

buttonOpenAddCardForm.addEventListener("click", () => {
  displayPopup(popupAdd);
  popupAddValidator.resetValidationState();
  popupAddValidator.toggleButtonState();
})

const popupEditValidator = new FormValidator(
  enableValidationObject,
  formEditProfile
);
popupEditValidator.enableValidation();
const popupAddValidator = new FormValidator(
  enableValidationObject,
  formElementAdd
);
popupAddValidator.enableValidation();

