let popupButtonOpenend = document.querySelector('.profile__button-edit');
let popupEdit = document.querySelector('.popup_edit');
let addClosed = document.getElementById('addclose');
let editClosed = document.getElementById('editclose');
let formElementEdit = document.querySelector('.popup__form_type_edit');
let formElementAdd = document.querySelector('.popup__form_type_add');
let nameInput = document.getElementById('name');
let jobInput = document.getElementById('prof');
let profName = document.querySelector('.profile__title');
let proffesion = document.querySelector('.profile__info-text');


function displayPopup() {
  popupEdit.classList.toggle('popup_opened');
  nameInput.value = profName.textContent;
  jobInput.value = proffesion.textContent;
}
function closedPopup() {
  popupEdit.classList.remove('popup_opened');
  
}
popupButtonOpenend.addEventListener('click', displayPopup);
editClosed.addEventListener('click', closedPopup);

function handleFormSubmit (evt) {
    evt.preventDefault();
    profName.textContent = nameInput.value;
    proffesion.textContent = jobInput.value;
    popupEdit.classList.toggle('popup_opened');
}
formElementEdit.addEventListener('submit', handleFormSubmit);
 
let popupAdd = document.querySelector('.popup_add');
let popupAddButtonOpened = document.querySelector('.profile__button-add');

popupAddButtonOpened.addEventListener('click', () => {
  popupAdd.classList.toggle('popup_opened');
});

addClosed.addEventListener('click', () => {
popupAdd.classList.remove('popup_opened')});


const initialCards = [
  {
    name: 'Архыз',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg'
  },
  {
    name: 'Челябинская область',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg'
  },
  {
    name: 'Иваново',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg'
  },
  {
    name: 'Камчатка',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg'
  },
  {
    name: 'Холмогорский район',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg'
  },
  {
    name: 'Байкал',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg'
  }
]; 




// находим  темплейт
const cards = document.querySelector('.cards');
const item = document.querySelector('#item').content;
// клонируем содержимое темплейт
const itemCard1 = item.querySelector('.card').cloneNode(true);
itemCard1.querySelector('.card__image').src=initialCards[0].link;
itemCard1.querySelector('.card__name').textContent=initialCards[0].name;
// добавляем на страницу 
cards.append(itemCard1);
const itemCard2 = item.querySelector('.card').cloneNode(true);
itemCard2.querySelector('.card__image').src = initialCards[1].link;
itemCard2.querySelector('.card__name').textContent = initialCards[1].name;
// добавляем на страницу 
cards.append(itemCard2);
const itemCard3 = item.querySelector('.card').cloneNode(true);
itemCard3.querySelector('.card__image').src = initialCards[2].link;
itemCard3.querySelector('.card__name').textContent = initialCards[2].name;
// добавляем на страницу 
cards.append(itemCard3);
const itemCard4 = item.querySelector('.card').cloneNode(true);
itemCard4.querySelector('.card__image').src = initialCards[3].link;
itemCard4.querySelector('.card__name').textContent = initialCards[3].name;
// добавляем на страницу 
cards.append(itemCard4);
const itemCard5 = item.querySelector('.card').cloneNode(true);
itemCard5.querySelector('.card__image').src = initialCards[4].link;
itemCard5.querySelector('.card__name').textContent = initialCards[4].name;
// добавляем на страницу 
cards.append(itemCard5);

const itemCard6 = item.querySelector('.card').cloneNode(true);
itemCard6.querySelector('.card__image').src = initialCards[5].link;
itemCard6.querySelector('.card__name').textContent = initialCards[5].name;
// добавляем на страницу 
cards.append(itemCard6);

const like = document.querySelectorAll('.card__heart');



const placeNameInput = document.getElementById('placeName');
const pictureLinkInput = document.getElementById('link');

formElementAdd.addEventListener ('submit', (evt) => {
  evt.preventDefault();
  const itemX = item.querySelector('.card').cloneNode(true);
  itemX.querySelector('.card__image').src = pictureLinkInput.value;
  itemX.querySelector('.card__name').textContent = placeNameInput.value;
  cards.prepend(itemX);
});