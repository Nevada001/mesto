 class Card {
  constructor(templateSelector) {
    this._templateSelector = templateSelector;
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
    this._setEventListeners();
    const cardItem = this._element.querySelector(".card__image");
    cardItem.src = this._link;
    cardItem.textContent = this._name;
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
        this._handleOpenPopup();
      });
    this._element
      .querySelector(".card__delete")
      .addEventListener("click", () => {
        this._removeCard();
      });
  }

  _removeCard() {
    this._element.remove();
  }
  _handleOpenPopup() {
    const popupImage = document.querySelector(".popup_image");
    const popupTitleName = popupImage.querySelector(".popup__name");
    const popupPicture = popupImage.querySelector(".popup__picture");
    document.querySelector('.popup_image').classList.add('popup_opened');
    popupTitleName.textContent = this._name;
    popupPicture.src = this._link;
    popupPicture.alt = this._name;
  }
  _toggleLikeButtonState(evt) {
    evt.target.classList.toggle("card__heart_active");
  }
}

export class DefaultCard extends Card {
  constructor(data, templateSelector) {
    super(templateSelector);
    this._name = data.name;
    this._link = data.link;
  }
}
export class NewAddedCard extends Card {
  constructor(name, link, templateSelector) {
    super(templateSelector);
    this._name = name.value;
    this._link = link.value;
  }
}