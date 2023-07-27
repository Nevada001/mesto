export default class Card {
  constructor(data, templateSelector, currentUser, handleCardClick, callbacks) {
    this._data = data;
    this._templateSelector = templateSelector;
    this._name = data.name;
    this._link = data.link;
    this._likes = data.likes;
    this._currentUser = currentUser;
    this._userId = data.owner._id;
    this._handleCardClick = handleCardClick;
    this._handleCardLike = callbacks.handleCardLike;
    this._handleCardDislike = callbacks.handleCardDislike;
    this._handleCardDelete = callbacks.handleCardDelete;
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
    this._cardItem.src = this._link;
    this._cardItem.alt = this._name;
    this._cardDeleteButton = this._element.querySelector(".card__delete");
    this._cardLike = this._element.querySelector(".card__heart");
    this._element.querySelector(".card__name").textContent = this._name;
    this._counterOfLikes = this._element.querySelector(".card__number-likes");
    this._counterOfLikes.textContent = this._likes.length;
    if (this._likes.some((item) => item._id === this._currentUser)) {
      this._cardLike.classList.add("card__heart_active");
    }
    if (this._userId !== this._currentUser) {
      this._cardDeleteButton.style.display = "none";
    }
    this._setEventListeners();
    return this._element;
  }

  _setEventListeners() {
    this._cardLike.addEventListener("click", () => {
      if (this._checkLikeButton()) {
        this._handleCardDislike(this._data);
      } else {
        this._handleCardLike(this._data);
      }
    });

    this._element
      .querySelector(".card__image")
      .addEventListener("click", () => {
        this._handleCardClick(this._name, this._link);
      });
    this._cardDeleteButton.addEventListener("click", () => {
      this._handleCardDelete(this._data, this._element);
    });
  }



  _checkLikeButton() {
    return this._cardLike.classList.contains("card__heart_active");
  }

  cardLikeCounter(cardItem) {
    this._likes = cardItem.likes;
    if (this._checkLikeButton()) {
      this._cardLike.classList.remove("card__heart_active");
      this._counterOfLikes.textContent =
        parseInt(this._counterOfLikes.textContent) - 1;
    } else {
      this._cardLike.classList.add("card__heart_active");
      this._counterOfLikes.textContent =
        parseInt(this._counterOfLikes.textContent) + 1;
    }
  }
}
