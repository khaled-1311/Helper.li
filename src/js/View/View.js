export default class View {
  _data;

  render(data, isClear) {
    this._data = data;
    isClear && this._clear();
    this._parentElement.insertAdjacentHTML('beforeend', this._generateMarkup());
  }

  _clear() {
    this._parentElement.innerHTML = '';
  }
}
