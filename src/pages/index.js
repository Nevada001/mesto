import '../src/index.css';
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
    info: formValues.userInfo,
  });
  formEditProfileChanged.close();
}
const userInfo = new UserInfo({
  userNameSelector: ".profile__title",
  userInfoSelector: ".profile__info-text",
});
const formEditProfileChanged = new PopupWithForm(
  submitFormEditProfile,
  ".popup_edit"
);
formEditProfileChanged.setEventListeners();
buttonOpenEditProfilePopup.addEventListener("click", () => {
  formEditProfileChanged.open();
  popupEditValidator.resetValidationState();
  const userData = userInfo.getUserInfo();
  nameInput.value = userData.name;
  profInput.value = userData.info;
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
