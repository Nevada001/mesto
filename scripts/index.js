let popupButtonOpenend = document.querySelector('.profile__button-edit');
let popup = document.querySelector('.popup');
let pupupButtonClosed = document.querySelector('.popup__closed');
let formElement = document.querySelector('.popup__form');
let nameInput = document.getElementById('name');
let jobInput = document.getElementById('prof');
let profName = document.querySelector('.profile__title');
let proffesion = document.querySelector('.profile__info-text');

function displayPopup() {
  popup.classList.toggle('popup_opened');
  nameInput.value = profName.textContent;
  jobInput.value = proffesion.textContent;
}
function closedPopup() {
  popup.classList.remove('popup_opened');
}
popupButtonOpenend.addEventListener('click', displayPopup);
pupupButtonClosed.addEventListener('click', closedPopup);

function handleFormSubmit (evt) {
    evt.preventDefault();
    profName.textContent = nameInput.value;
    proffesion.textContent = jobInput.value;
    popup.classList.toggle('popup_opened');
}
formElement.addEventListener('submit', handleFormSubmit);
