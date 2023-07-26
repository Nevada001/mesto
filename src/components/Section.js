export default class Section {
  constructor({ items, renderer }, containerSelector) {
    this._rendererItems = items;
    this._renderer = renderer;
    this._container = document.querySelector(containerSelector);
  }

  addItem(element) {
    this._container.prepend(element);
  }

  deleteCard(element) {
    element.remove();
    element = null;
  }

  rendererItems() {
    this._rendererItems.forEach((item) => {
      this._renderer(item);
    });
  }
}
