export default class Section {
  constructor({ items, renderer }, containerSelector) {
    this._items = items;
    this._renderer = renderer;

    this._container = document.querySelector(containerSelector);
  }

  renderItems() {
    this.clear();
    this._items.forEach((item) => {
      this._renderer(item);
    });
  }

  addItem(item, toStart) {
    toStart ? this._container.prepend(item) : this._container.append(item);
  }

  clear() {
    this._container.innerHTML = "";
  }
}
