import Popup from "../components/Popup.js";
export default class PopupWithConfirmation extends Popup {
  constructor(submitDelete, popupSelector) {
    super(popupSelector);
    this._submitDelete = submitDelete;
    this._buttonDeleteTextConfirmation = this._popup.querySelector(".popup__button");
    this._form = this._popup.querySelector(".popup__form");
  }

  open(cardItem, cardElement) {
    this.cardItem = cardItem;
    this.cardElement = cardElement;
    super.open();
  }

  _renderLoading() {
    this._buttonDeleteTextConfirmation.textContent = "Удаление..." 
  }

  setEventListeners() {
    this._form.addEventListener("submit", (evt) => {
      evt.preventDefault();
      this._submitDelete(this.cardItem, this.cardElement);
      this._renderLoading();
    });
    super.setEventListeners();
  }
}
