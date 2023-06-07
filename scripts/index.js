const buttonOpenEditProfilePopup = document.querySelector(".profile__button-edit");
const popupOpened = document.querySelector('.popup_opened')
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
const templateCard = document.querySelector("#item").content;
const cardsContainer = document.querySelector(".cards");
const popupImage = document.querySelector(".popup_image");
const popupTitleName = popupImage.querySelector(".popup__name");
const popupPicture = popupImage.querySelector(".popup__picture");
const placeNameInput = document.getElementById("placeName");
const pictureLinkInput = document.getElementById("link");
const buttonSaveEditForm = popupEditProfile.querySelector(".popup__button");
const buttonFormAddCardStartState = document.querySelector("#buttonCreate");
const popupAddInputs = popupAdd.querySelectorAll(enableValidationObject.inputSelector);

function displayPopup(popup) {
  popup.classList.add("popup_opened");
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
    removeDisabledButtonState(enableValidationObject, buttonSaveEditForm)
}

buttonOpenEditProfilePopup.addEventListener("click", displayPopupEdit);

function closePopup(popup) {
  popup.classList.remove("popup_opened");
}

function submitFormEditProfile(evt) {
  evt.preventDefault();
  profName.textContent = nameInput.value;
  proffesion.textContent = jobInput.value;
  closePopup(popupEditProfile);
}

function createCards(name, link) {
  const card = templateCard.querySelector(".card").cloneNode(true);
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
function addOrRemoveKeyCloseOnEsc() {
  if (enableValidationObject.formSelector.classList.contains('popup_opened')) {
    document.addEventListener('keydown', closePopupOnEsc);
  }
}
function closePopupOnEsc(evt) {
    if ( evt.key === 'Escape') {
    closePopup(popup);
    };
  };  

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

formEditProfile.addEventListener("submit", submitFormEditProfile);

buttonOpenAddCardForm.addEventListener("click", () => {
  displayPopup(popupAdd);
  popupAddInputs.forEach((el) => {
    validateInput(enableValidationObject, el)
  });
    });
    addDisabledButtonState(enableValidationObject, buttonFormAddCardStartState);


initialCards.forEach((item) => {
  cardsContainer.append(createCards(item.name, item.link));
});

formElementAdd.addEventListener("submit", (evt) => {
  evt.preventDefault();
  cardsContainer.prepend(
    createCards(placeNameInput.value, pictureLinkInput.value)
  );
  closePopup(popupAdd);
  formElementAdd.reset();
});
