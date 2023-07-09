import Popup from "./Popup.js";
export default class PopupWithForm extends Popup {
constructor (formSubmit, popupSelector) {
  super(popupSelector)
  this._formSubmit = formSubmit;
}

_getInputValues() {
  this._inputList = this._popupSelector.querySelectorAll('.popup_input');
  this._inputList.forEach((input) => {
    return input.value;
  })
}

setEventListeners() {
  super.setEventListeners();
  this._popupForm = this._popupSelector.querySelector('.popup__form');
  this._popupForm.addEventListener("submit", (evt) => {
    this._formSubmit(evt);
    this.close();
  });
}

close() {
  super.close();
  this._popupForm.reset();
}
}