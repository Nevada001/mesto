const popupButtonOpenend = document.querySelector(".profile__button-edit");
const popupEdit = document.querySelector(".popup_edit");
const addClosed = document.getElementById("addclose");
const editClosed = document.getElementById("editclose");
const imageClosed = document.getElementById("imageclose");
const formElementEdit = document.querySelector(".popup__form_type_edit");
const formElementAdd = document.querySelector(".popup__form_type_add");
const nameInput = document.getElementById("name");
const jobInput = document.getElementById("prof");
const profName = document.querySelector(".profile__title");
const proffesion = document.querySelector(".profile__info-text");
const popup = document.querySelector(".popup");
const popupAdd = document.querySelector(".popup_add");
const popupAddButtonOpened = document.querySelector(".profile__button-add");
const items = document.querySelector("#item").content;
const templateElements = document.querySelector(".cards");
const popupImage = document.querySelector(".popup_image");
const popupTitleName = document.querySelector(".popup__name");
const popupPicture = document.querySelector(".popup__picture");
const placeNameInput = document.getElementById("placeName");
const pictureLinkInput = document.getElementById("link");

function displayPopup(popup) {
  popup.classList.toggle("popup_opened");
}

function displayPopupEdit() {
  displayPopup(popupEdit);
  nameInput.value = profName.textContent;
  jobInput.value = proffesion.textContent;
}

function closePopup(popup) {
  popup.classList.remove("popup_opened");
}

popupButtonOpenend.addEventListener("click", displayPopupEdit);
editClosed.addEventListener("click", () => {
  closePopup(popupEdit);
});

function handleFormSubmit(evt) {
  evt.preventDefault();
  profName.textContent = nameInput.value;
  proffesion.textContent = jobInput.value;
  closePopup(popupEdit);
}
formElementEdit.addEventListener("submit", handleFormSubmit);

popupAddButtonOpened.addEventListener("click", () => {
  popupAdd.classList.toggle("popup_opened");
});

addClosed.addEventListener("click", () => {
  closePopup(popupAdd);
});

const initialCards = [
  {
    name: "Архыз",
    link: "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg",
  },
  {
    name: "Челябинская область",
    link: "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg",
  },
  {
    name: "Иваново",
    link: "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg",
  },
  {
    name: "Камчатка",
    link: "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg",
  },
  {
    name: "Холмогорский район",
    link: "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg",
  },
  {
    name: "Байкал",
    link: "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg",
  },
];

function createCards(name, link) {
  const card = items.querySelector(".card").cloneNode(true);
  card.querySelector(".card__name").textContent = name;
  card.querySelector(".card__image").alt = name;
  card.querySelector(".card__image").src = link;
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
    imageClosed.addEventListener("click", () => {
      popupImage.classList.remove("popup_opened");
    });
  });

  return card;
}

const cardsCreated = initialCards.forEach((item) => {
  templateElements.append(createCards(item.name, item.link));
});

formElementAdd.addEventListener("submit", (evt) => {
  evt.preventDefault();
  templateElements.prepend(
    createCards(placeNameInput.value, pictureLinkInput.value)
  );
  closePopup(popupAdd);
  placeNameInput.value = "";
  pictureLinkInput.value = "";
});

const buttonDeleting = document.querySelector(".card__delete");

buttonDeleting.addEventListener("click", (evt) => {
  const deleting = evt.target.closest(".card");
  deleting.remove();
  return deleting;
});
