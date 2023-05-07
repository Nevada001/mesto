let popupButtonOpenend = document.querySelector('.profile__button-edit');
let popup = document.querySelector('.popup');
let pupupButtonClosed = document.querySelector('.popup__closed');
let formElement = document.querySelector('.popup__form');
let nameInput = document.querySelector('.popup__name');
let jobInput = document.querySelector('.popup__profession');

function displayPopup() {
  popup.classList.toggle('popup_opened');
  nameInput.value = nameInput.textContent;
  jobInput.value = jobInput.textContent;
}
popupButtonOpenend.addEventListener('click', displayPopup);
displayPopup();

function closedPopup() {
  popup.classList.remove('popup_opened');
}

pupupButtonClosed.addEventListener('click', closedPopup);
closedPopup();



function handleFormSubmit (evt) {
    evt.preventDefault();
    nameInput = document.getElementById('name').value;
    jobInput = document.getElementById('profession').value;
    nameInput.textContent = nameInput.value;
    jobInput.textContent = jobInput.value;
}
formElement.addEventListener('submit', handleFormSubmit);


