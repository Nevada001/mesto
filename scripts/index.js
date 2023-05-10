let popupButtonOpenend = document.querySelector('.profile__button-edit');
let popup = document.querySelector('.popup');
let pupupButtonClosed = document.querySelector('.popup__closed');
let formElement = document.querySelector('.popup__form');
let nameInput = document.getElementById('name');
let jobInput = document.getElementById('prof');

function displayPopup() {
  popup.classList.toggle('popup_opened');
  nameInput.value = nameInput.textContent;
  jobInput.value = jobInput.textContent;
}

function closedPopup() {
  popup.classList.remove('popup_opened');
}

popupButtonOpenend.addEventListener('click', displayPopup);
pupupButtonClosed.addEventListener('click', closedPopup);



function handleFormSubmit (evt) {
    evt.preventDefault();
    nameInput = document.getElementById('name').value;
    jobInput = document.getElementById('prof').value;
    nameInput.textContent = nameInput.value;
    jobInput.textContent = jobInput.value;
}
formElement.addEventListener('submit', handleFormSubmit);


