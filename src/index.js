import '../src/index.css'
import { initialCards, enableValidationObject } from "./constants.js";
import FormValidator  from "./FormValidator.js";
import Card from "./Card.js";
import Section from "./Section.js";
import Popup  from "./Popup.js";
import PopupWithImage from "./PopupWithImage.js";
import PopupWithForm from "./PopupWithForm.js";
import UserInfo from "./UserInfo.js";
const buttonOpenEditProfilePopup = document.querySelector(
  ".profile__button-edit"
);
const popupImage = document.querySelector(".popup_image");
const popupEditProfile = document.querySelector(".popup_edit");
const formEditProfile = document.querySelector(".popup__form_type_edit");
const formElementAdd = document.querySelector(".popup__form_type_add");
const nameInput = document.querySelector("#name-input");
const jobInput = document.querySelector("#profession-input")
const popupAddProfile = document.querySelector(".popup_add");
const buttonOpenAddCardForm = document.querySelector(".profile__button-add");
const cardsContainer = document.querySelector(".cards");
const placeNameInput = document.querySelector("#placeName");
const linkInput = document.querySelector("#link");

function handleCardClick(name, link) {
  const popupImageOpened = new PopupWithImage(popupImage);
  popupImageOpened.open(name, link);
  popupImageOpened.setEventListeners();
}

function createCard(data) {
  const card = new Card(data, "#item", handleCardClick);
  return card.generateCard();
}

function submitFormAdd(evt) {
  evt.preventDefault();
  const newCardData = {
    name: placeNameInput.value,
    link: linkInput.value,
  };
  cardsContainer.prepend(createCard(newCardData));
}
const userData = new UserInfo({userName: nameInput, infoAboutUser: jobInput});

function submitFormEditProfile(evt) {
  evt.preventDefault();
  userData.setUserInfo();
  popupEdit.close();
}
const popupEdit = new Popup(popupEditProfile);
buttonOpenEditProfilePopup.addEventListener("click", () => {
  popupEdit.open();
  popupEdit.setEventListeners();
  popupEditValidator.resetValidationState();
  userData.getUserInfo();
});

const popupAdd = new Popup(popupAddProfile);
buttonOpenAddCardForm.addEventListener("click", () => {
  popupAdd.open();
  popupAdd.setEventListeners();
  popupAddValidator.resetValidationState();
  popupAddValidator.toggleButtonState();
});

const formEditProfileChanged = new PopupWithForm(submitFormEditProfile, popupEditProfile);
formEditProfileChanged.setEventListeners();

const formElementAddDone = new PopupWithForm(submitFormAdd, popupAddProfile);
formElementAddDone.setEventListeners();

const initialCardsAdded = new Section(
  {
    items: initialCards,
    renderer: (item) => {
      initialCardsAdded.addItem(createCard(item));
    },
  },
  cardsContainer
);
initialCardsAdded.rendererItems();

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
