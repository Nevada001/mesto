import Popup from "./Popup.js";
export default class PopupWithImage extends Popup {
  constructor(popupSelector) {
  super(popupSelector);
  }

  open(name, link) {
    this._popupImage = this._popupSelector.querySelector('.popup__picture');
    this._popupImage.src = link;
    this._popupImage.alt = name;
    this._popupSelector.querySelector('.popup__name').textContent = name;
    super.open();
  }
}