//import './index.css';
import Api from "../components/Api.js";
import { initialCards, enableValidationObject } from "../utils/constants.js";
import FormValidator from "../components/FormValidator.js";
import Card from "../components/Card.js";
import Section from "../components/Section.js";
import PopupWithImage from "../components/PopupWithImage.js";
import PopupWithForm from "../components/PopupWithForm.js";
import UserInfo from "../components/UserInfo.js";
const buttonOpenEditProfilePopup = document.querySelector(
  ".profile__button-edit"
);
const formEditProfile = document.querySelector(".popup__form_type_edit");
const nameInput = document.querySelector("#userName");
const profInput = document.querySelector("#userInfo");
const formElementAdd = document.querySelector(".popup__form_type_add");
const buttonOpenAddCardForm = document.querySelector(".profile__button-add");

const popupImageOpened = new PopupWithImage(".popup_image");

popupImageOpened.setEventListeners();
function handleCardClick(name, link) {
  popupImageOpened.open(name, link);
}

 const api =  new Api({
  baseUrl:'https://nomoreparties.co/v1/cohort-71', 
  method: 'GET',
  headers: {
    authorization:'7b17248a-4f40-4b14-bba1-0f66717e7e72',
    'Content-Type' : 'application/json'
  }
})

const userInfo = new UserInfo({
  name: ".profile__title",
  about: ".profile__info-text",
  avatar: ".profile__avatar"
});

Promise.all([api.getUserInfo()])
  .then(([userData]) => {
    userInfo.setUserInfo(userData);
  })

  .catch((err) => {
    console.log(`bad ${err}`)
  })


function createCard(data) {
  const card = new Card(data, "#item", handleCardClick);
  return card.generateCard();
}

function submitFormAdd(formValues) {
  const newCardData = {
    name: formValues.placeName,
    link: formValues.link,
  };
  cardsList.addItem(createCard(newCardData));
}

function submitFormEditProfile(formValues) {
  userInfo.setUserInfo({
    name: formValues.userName,
    about: formValues.userInfo,
 });
  formEditProfileChanged.close();
}

const formEditProfileChanged = new PopupWithForm(
  submitFormEditProfile,
  ".popup_edit"
);
formEditProfileChanged.setEventListeners();
buttonOpenEditProfilePopup.addEventListener("click", () => {
  formEditProfileChanged.open();
  popupEditValidator.resetValidationState();
  //const userData = userInfo.getUserInfo();
  //nameInput.value = userData.name;
  //profInput.value = userData.info;
});

const formElementAddDone = new PopupWithForm(submitFormAdd, ".popup_add");
formElementAddDone.setEventListeners();
buttonOpenAddCardForm.addEventListener("click", () => {
  formElementAddDone.open();
  popupAddValidator.resetValidationState();
  popupAddValidator.toggleButtonState();
});

const cardsList = new Section(
  {
    items: initialCards.reverse(),
    renderer: (item) => {
      cardsList.addItem(createCard(item));
    },
  },
  ".cards"
);
cardsList.rendererItems();

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
