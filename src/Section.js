export default class Section {
  constructor({items, renderer}, containerSelector) {
    this._rendererItems = items;
    this._renderer = renderer;
    this._containerSelector = containerSelector;
  };

  addItem(element) {
    this._containerSelector.append(element);
  };

  rendererItems() {
    this._rendererItems.forEach((item) => {
      this._renderer(item);
    })
  };


}