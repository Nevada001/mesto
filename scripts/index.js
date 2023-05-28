const buttonOpenEditProfilePopup = document.querySelector(".profile__button-edit");
const popupEditProfile = document.querySelector(".popup_edit");
const buttonCloseAddCardForm = document.getElementById("addclose");
const buttonCloseEditProfilePopup = document.getElementById("editclose");
const buttonCloseImagePopup = document.getElementById("imageclose");
const formEditProfile = document.querySelector(".popup__form_type_edit");
const formElementAdd = document.querySelector(".popup__form_type_add");
const nameInput = document.getElementById("name");
const jobInput = document.getElementById("prof");
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
const buttonDeleting = document.querySelector(".card__delete");

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
};

buttonCloseImagePopup.addEventListener("click", () => {
  closePopup(popupImage);
});

formEditProfile.addEventListener("submit", submitFormEditProfile);

buttonOpenAddCardForm.addEventListener("click", () => {
  displayPopup(popupAdd);
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


