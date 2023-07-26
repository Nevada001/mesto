//import './index.css';
import Api from "../components/Api.js";
import { enableValidationObject } from "../utils/constants.js";
import FormValidator from "../components/FormValidator.js";
import Card from "../components/Card.js";
import Section from "../components/Section.js";
import PopupWithImage from "../components/PopupWithImage.js";
import PopupWithForm from "../components/PopupWithForm.js";
import UserInfo from "../components/UserInfo.js";
import PopupWithConfirmation from "../components/PopupWithConfirmation.js";
const buttonOpenEditProfilePopup = document.querySelector(
  ".profile__button-edit"
);
const buttonDeleteCard = document.querySelector(".card__delete");

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

const api = new Api({
  baseUrl: "https://nomoreparties.co/v1/cohort-71",
  headers: {
    authorization: "7b17248a-4f40-4b14-bba1-0f66717e7e72",
    "Content-Type": "application/json",
  },
});

const userInfo = new UserInfo({
  name: ".profile__title",
  about: ".profile__info-text",
  avatar: ".profile__avatar",
});

function submitFormEditProfile(formValues) {
  api
    .setUserInfo(formValues.userName, formValues.userInfo)
    .then((userData) => {
      userInfo.setUserInfo(userData);
    })

    .catch((err) => {
      console.log(`Ошибка: ${err}`);
    });
  formEditProfileChanged.close();
}

let currentUser;
let cardList;

function handleCardDelete(cardItem, cardElement) {
  api
    .removeCard(cardItem)
    .then(() => {
      cardList.deleteCard(cardElement);
      popupWithConfirmation.close();
    })
    .catch((err) => {
      console.log(`bad ${err}`);
    });
}

const popupWithConfirmation = new PopupWithConfirmation(
  handleCardDelete,
  ".popup_delete"
);
popupWithConfirmation.setEventListeners();

function createCard(cardItem) {
  const card = new Card(cardItem, "#item", currentUser, handleCardClick, {
    handleCardLike: (cardItem) => {
      api
        .addLike(cardItem)
        .then((res) => {
          card.cardLikeCounter(res);
        })
        .catch((err) => {
          console.log(`bad ${err}`);
        });
    },
    handleCardDislike: (cardItem) => {
      api
        .removeLike(cardItem)
        .then((res) => {
          card.cardLikeCounter(res);
        })
        .catch((err) => {
          console.log(`bad ${err}`);
        });
    },
    handleCardDelete: popupWithConfirmation.open.bind(popupWithConfirmation),
  });
  return card.generateCard();
}

Promise.all([api.getUserInfo(), api.getInitialCards()])
  .then(([userData, cardData]) => {
    currentUser = userData._id;
    cardList = new Section(
      {
        items: cardData,
        renderer: (item) => {
          cardList.addItem(createCard(item));
        },
      },
      ".cards"
    );
    cardList.rendererItems();
    userInfo.setUserInfo(userData);
  })
  .catch((err) => {
    console.log(`bad ${err}`);
  });

function submitFormAdd(formValues) {
  api
    .addNewCard(formValues.placeName, formValues.link)
    .then((card) => {
      console.log(card);
      cardList = new Section(
        {
          items: card,
          renderer: (item) => {
            cardList.addItem(createCard(item));
          },
        },
        ".cards"
      );
      cardList.addItem(createCard(card));
    })

    .catch((err) => {
      console.log(`bad ${err}`);
    });
}

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
  profInput.value = userData.about;
});

const formElementAddDone = new PopupWithForm(submitFormAdd, ".popup_add");
formElementAddDone.setEventListeners();
buttonOpenAddCardForm.addEventListener("click", () => {
  formElementAddDone.open();
  popupAddValidator.resetValidationState();
  popupAddValidator.toggleButtonState();
});

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
