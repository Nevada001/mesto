import Popup from "../components/Popup.js";
export default class PopupWithConfirmation extends Popup {
  constructor(submitDelete, popupSelector) {
    super(popupSelector);
    this._submitDelete = submitDelete;
    this._form = this._popup.querySelector(".popup__form");
    this._buttonSubmit = this._popup.querySelector('.popup__button');
  }

  open(cardItem, cardElement) {
    this.cardItem = cardItem;
    this.cardElement = cardElement;
    super.open();
  }

  renderLoading(text) {
    this._buttonSubmit.textContent = text; 
  }


  setEventListeners() {
    this._form.addEventListener("submit", (evt) => {
      evt.preventDefault();
      this._submitDelete(this.cardItem, this.cardElement);
      this.renderLoading("Удаление...");
    });
    super.setEventListeners();
  }
  
  savingDataText(text) {
    this._buttonDeleteTextConfirmation.textContent = text;
  }
}
