export default class Card { 
  constructor(data, templateSelector, handleCardClick) {
    this._templateSelector = templateSelector;
    this._name = data.name;
    this._link = data.link;
    this._handleCardClick= handleCardClick;
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
    this._cardItem = this._element.querySelector(".card__image");
    this._setEventListeners();
    this._cardItem.src = this._link;
    this._cardItem.alt = this._name;
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
        this._openPopupImage();
      });
    this._element
      .querySelector(".card__delete")
      .addEventListener("click", () => {
        this._removeCard();
      });
  }

  _openPopupImage() {
    this._handleCardClick(this._name, this._link)
  }

  _removeCard() {
    this._element.remove();
  }

  _toggleLikeButtonState(evt) {
    evt.target.classList.toggle("card__heart_active");
  }
}

