import View from './View';

class AsideView extends View {
  _parentElement = document.querySelector('.aside');

  _generateMarkup() {
    let markup = '';

    this._data.forEach((tag, i) => {
      markup += `
        <a href="#" class="aside__link" data-tag="${tag.tagName}">
          <span class="aside__icon">${tag.icon}</span>
          
        </a>
      `;
    });

    return markup;
  }

  _addEventHandler() {
    this._parentElement.addEventListener('click', this.#func);
  }

  #func(e) {
    e.preventDefault();
    const targetIcon = e.target.closest('.aside__link');

    if (!targetIcon) return;

    const targetSection = targetIcon.dataset.tag;

    document.querySelector(`#section-${targetSection}`).scrollIntoView({
      behavior: 'smooth',
    });
  }
}

export default new AsideView();
//${//<span class="aside__type">html</span>}
