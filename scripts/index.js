const buttonOpenEditProfilePopup = document.querySelector(".profile__button-edit");
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
const popupAddInputs = popupAdd.querySelectorAll(enableValidationObject.inputSelector);

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
    displayPopup(popupImage);
    popupTitleName.textContent = name;
    popupPicture.src = link;
    popupPicture.alt = name;
  });
  return card;
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

formEditProfile.addEventListener("submit", submitFormEditProfile);

buttonOpenAddCardForm.addEventListener("click", () => {
  displayPopup(popupAdd);
  addDisabledButtonState(enableValidationObject, buttonFormAddCardStartState);
  popupAddInputs.forEach((el) => {
    validateInput(enableValidationObject, el);
  });
});

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
