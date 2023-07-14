import Popup from "../components/Popup.js";
export default class PopupWithForm extends Popup {
constructor (formSubmit, popupSelector) {
  super(popupSelector);
  this._formSubmit = formSubmit;
  this._inputList = this._popup.querySelectorAll('.popup__input');
  this._form = this._popup.querySelector('.popup__form');
}

_getInputValues() {
  const formValues = {};
  this._inputList.forEach((input) => {
    formValues[input.getAttribute('id')] = input.value;
  })
  return formValues;
}


setEventListeners() {
  this._form.addEventListener("submit", evt => {
    evt.preventDefault();
    this._formSubmit(this._getInputValues());
    this.close();
  });
  super.setEventListeners();
}

close() {
  super.close();
  this._form.reset();
}
}