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
const items = document.querySelector('#item').content;
const templateElements = document.querySelector('.cards');

function createCards (name, link) {
  const card = items.querySelector('.card').cloneNode(true);
  card.querySelector('.card__name').textContent = name;
  card.querySelector('.card__image').alt = name;
  card.querySelector('.card__image').src = link;
  card.querySelector('.card__heart').addEventListener('click', (evt) => {
    evt.target.classList.toggle('card__heart_active')
  });
  card.querySelector('.card__delete').addEventListener('click', (evt) => {
    evt.target.closest('.card').remove();
  })
  return card;
};

const cardsCreated = initialCards.forEach((item) => {
templateElements.append(createCards(item.name, item.link));
});

const placeNameInput = document.getElementById('placeName');
const pictureLinkInput = document.getElementById('link');

formElementAdd.addEventListener('submit', (evt) => {
  evt.preventDefault();
templateElements.prepend(createCards(placeNameInput.value, pictureLinkInput.value))}); 

const buttonDeleting = document.querySelector('.card__delete');

buttonDeleting.addEventListener('click', (evt) => {
  const deleting = evt.target.closest('.card');
  deleting.remove();
  return deleting;
})
