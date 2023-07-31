import './index.css';
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
const buttomOpenFormAvatar = document.querySelector('.profile__avatar')
const formEditProfile = document.querySelector(".popup__form_type_edit");
const nameInput = document.querySelector("#userName");
const profInput = document.querySelector("#userInfo");
const formElementAdd = document.querySelector(".popup__form_type_add");
const buttonOpenAddCardForm = document.querySelector(".profile__button-add");
const formAvatar = document.querySelector('.popup__form_type_avatar')
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
  formEditProfileChanged.renderLoading('Сохранение...');
  api
    .setUserInfo(formValues.userName, formValues.userInfo)
    .then((userData) => {
      userInfo.setUserInfo(userData);
      formEditProfileChanged.close();
    })

    .catch((err) => {
      console.log(`Ошибка: ${err}`);
    })
    .finally(() => formEditProfileChanged.renderLoading('Сохранить'))
}

let currentUser;
let cardList;

function handleCardDelete(cardItem, card) {
  popupWithConfirmation.renderLoading("Удаление...")
  api
      .removeCard(cardItem)
      .then(() => {
        
        card.deleteCard();
        popupWithConfirmation.close();
      })
      .catch((err) => {
        console.log(`bad ${err}`)
      })
      .finally(() => {
        popupWithConfirmation.renderLoading("Да")
      })
}
const popupWithConfirmation = new PopupWithConfirmation(
  ".popup_delete", handleCardDelete
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
    handleOpenPopupCardDelete: popupWithConfirmation.open.bind(popupWithConfirmation)
    })

  return card.generateCard();
}

Promise.all([api.getUserInfo(), api.getInitialCards()])
  .then(([userData, cardData]) => {
    currentUser = userData._id;
    cardList = new Section(
      {
        items: cardData.reverse(),
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
  })
  

function submitFormAdd(formValues) {
  formElementAddDone.renderLoading('Создание...');
  api
    .addNewCard(formValues.placeName, formValues.link)
    .then((card) => {
      cardList.addItem(createCard(card));
      formElementAddDone.close()
    })
    .catch((err) => {
      console.log(`bad ${err}`);
    })
    .finally(() => formElementAddDone.renderLoading('Создать'))
}

function submitNewAvatar(formValues) {
  formChangeAvatar.renderLoading('Сохранение...')
  api.changeUserAvatar(formValues.avatarLink)
    .then((userData) => {
      userInfo.setUserInfo(userData);
      formChangeAvatar.close();
    })
    .catch((err) => {
      console.log(`Ошибка: ${err}`);
    })
    .finally(() => formChangeAvatar.renderLoading('Сохранить'));
}

const formChangeAvatar = new PopupWithForm(submitNewAvatar, ".popup_avatar-edit");
formChangeAvatar.setEventListeners();
buttomOpenFormAvatar.addEventListener('click', () => {
  formChangeAvatar.open();
  popupAvatarEditValidator.resetValidationState();
  popupAvatarEditValidator.toggleButtonState();
})

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

const popupAvatarEditValidator = new FormValidator(enableValidationObject,
  formAvatar);
  popupAvatarEditValidator.enableValidation();

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
