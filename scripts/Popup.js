export default class Popup {
  constructor(popupSelector) {
    this._popupSelector = popupSelector;
  };

  _handleEscClose(evt) {
    if (evt.key === "Escape") {
      this.close();
    }
  }

  close() {
    this._popupSelector.classList.remove('popup_opened');
    document.removeEventListener('keydown', this._handleEscClose.bind(this));
  };

  open() {
    this._popupSelector.classList.add('popup_opened');
    document.addEventListener('keydown', this._handleEscClose.bind(this))
    console.log(this);
  };


  setEventListeners() {
    this._popupSelector.addEventListener('mousedown', (evt) => {
      if (
        evt.target.classList.contains("popup_opened") ||
        evt.target.classList.contains("popup__closed")
      ) {
        this.close();
      }
    })
  }
}