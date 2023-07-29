import Popup from "../components/Popup.js";
export default class PopupWithConfirmation extends Popup {
  constructor (popupSelector, submitForm) {
    super(popupSelector);
    this._submitForm = submitForm;
    this._submitbutton = this._popup.querySelector('.popup__button')
    this._form = this._popup.querySelector(".popup__form");
  }

  open(cardItem, card) {
    this.cardItem = cardItem;
    this.card = card;
    super.open()
  }
  renderLoading(text) {
    this._submitbutton.textContent = text;
  }

  savingData(text) {
    this._submitbutton.textContent = text;
  }

  setEventListeners() {
    this._form.addEventListener("submit", (evt) => {
      evt.preventDefault();
      this._submitForm(this.cardItem, this.card);
    });
    super.setEventListeners()

  }
}
