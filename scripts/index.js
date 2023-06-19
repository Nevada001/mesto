
const buttonOpenEditProfilePopup = document.querySelector(
  ".profile__button-edit"
);
const popupList = document.querySelectorAll(".popup");
const popupEditProfile = document.querySelector(".popup_edit");
const buttonCloseAddCardForm = document.querySelector("#addclose");
const buttonCloseEditProfilePopup = document.querySelector("#editclose");
const buttonCloseImagePopup = document.querySelector("#imageclose");
const formEditProfile = document.querySelector(".popup__form_type_edit");
const formElementAdd = document.querySelector(".popup__form_type_add");
const nameInput = document.querySelector("#name-input");
const jobInput = document.querySelector("#profession-input");
const profName = document.querySelector(".profile__title");
const proffesion = document.querySelector(".profile__info-text");
const popupAdd = document.querySelector(".popup_add");
const buttonOpenAddCardForm = document.querySelector(".profile__button-add");
const templateCard = document.querySelector("#item").content;
const cardsContainer = document.querySelector(".cards");
const popupImage = document.querySelector(".popup_image");
const popupTitleName = popupImage.querySelector(".popup__name");
const popupPicture = popupImage.querySelector(".popup__picture");
const placeNameInput = document.querySelector("#placeName");
const pictureLinkInput = document.querySelector("#link");
const buttonSaveEditForm = popupEditProfile.querySelector(".popup__button");
const buttonFormAddCardStartState = document.querySelector("#buttonCreate");
const popupAddInputs = popupAdd.querySelectorAll(
  enableValidationObject.inputSelector
);

function closePopupOnEsc(evt) {
  if (evt.key === "Escape") {
    closePopup(document.querySelector(".popup_opened"));
  }
}

function closePopup(popup) {
  popup.classList.remove("popup_opened");
  document.removeEventListener("keydown", closePopupOnEsc);
}
function displayPopup(popup) {
  popup.classList.add("popup_opened");
  document.addEventListener("keydown", closePopupOnEsc);
}

function displayPopupEdit() {
  displayPopup(popupEditProfile);
  nameInput.value = profName.textContent;
  jobInput.value = proffesion.textContent;
  popupEditProfile
    .querySelectorAll(enableValidationObject.inputSelector)
    .forEach((el) => {
      hideInputError(enableValidationObject, el);
    });
  removeDisabledButtonState(enableValidationObject, buttonSaveEditForm);
}

buttonOpenEditProfilePopup.addEventListener("click", displayPopupEdit);

function submitFormEditProfile(evt) {
  evt.preventDefault();
  profName.textContent = nameInput.value;
  proffesion.textContent = jobInput.value;
  closePopup(popupEditProfile);
}



document.querySelectorAll(".popup").forEach((el) => {
  el.addEventListener("mousedown", (evt) => {
    if (
      evt.target.classList.contains("popup_opened") ||
      evt.target.classList.contains("popup__closed")
    ) {
      closePopup(el);
    }
  });
});

 class Card {
  constructor(templateSelector) {
    this._templateSelector = templateSelector;
  }

  _getTemplate() {
    const cardElement = document
      .querySelector(this._templateSelector)
      .content.querySelector(".card")
      .cloneNode(true);
    return cardElement;
  }

  generateCard() {
    this._element = this._getTemplate();
    this._setEventListeners();
    const cardItem = this._element.querySelector(".card__image");
    cardItem.src = this._link;
    cardItem.textContent = this._name;
    this._element.querySelector(".card__name").textContent = this._name;

    return this._element;
  }

  _setEventListeners() {
    this._element
      .querySelector(".card__heart")
      .addEventListener("click", (evt) => {
        this._toggleLikeButtonState(evt);
      });
    this._element
      .querySelector(".card__image")
      .addEventListener("click", () => {
        this._handleOpenPopup();
      });
    this._element
      .querySelector(".card__delete")
      .addEventListener("click", () => {
        this._removeCard();
      });
  }

  _removeCard() {
    this._element.remove();
  }
  _handleOpenPopup() {
    displayPopup(popupImage);
    popupTitleName.textContent = this._name;
    popupPicture.src = this._link;
    popupPicture.alt = this._name;
  }
  _toggleLikeButtonState(evt) {
    evt.target.classList.toggle("card__heart_active");
  }
}

 class DefaultCard extends Card {
  constructor(data, templateSelector) {
    super(templateSelector);
    this._name = data.name;
    this._link = data.link;
  }
}
 class NewAddedCard extends Card {
  constructor(name, link, templateSelector) {
    super(templateSelector);
    this._name = name.value;
    this._link = link.value;
  }
}

initialCards.forEach((item) => {
  const card = new DefaultCard(item, "#item");
  const cardElement = card.generateCard();
  cardsContainer.append(cardElement);
});

formEditProfile.addEventListener("submit", submitFormEditProfile);

buttonOpenAddCardForm.addEventListener("click", () => {
  displayPopup(popupAdd);
  addDisabledButtonState(enableValidationObject, buttonFormAddCardStartState);
  popupAddInputs.forEach((el) => {
    validateInput(enableValidationObject, el);
  });
});

formElementAdd.addEventListener("submit", (evt) => {
  evt.preventDefault();
  const card = new NewAddedCard(placeNameInput, pictureLinkInput, "#item");
  const cardElement = card.generateCard();
  cardsContainer.prepend(cardElement);
  closePopup(popupAdd);
  formElementAdd.reset();
});


