import View from './View.js';

import sectionHeaderView from './sectionHeaderView.js';
import sectionResoursesView from './sectionResoursesView.js';

class MainView extends View {
  _parentElement = document.querySelector('.main');

  render(data, isClear) {
    this._data = data;
    isClear && this._clear();
    this._parentElement.insertAdjacentHTML(
      'afterbegin',
      this._generateMarkup()
    );
  }

  _generateMarkup() {
    let markup = ``;

    this._data.map(sec => {
      markup += `
        <section class="section section__resources" id="section-${
          sec.data.type
        }">
            <div class="container">
                <div class="row">
                    <div class="col-all">
                       ${sectionHeaderView.generateMarkup(
                         sec.data.title,
                         sec.data.icon
                       )}
                    </div>
                </div>

                <div class="row p8-y">
                    ${sectionResoursesView.generateMarkup(sec.data.resourses)}
                </div>
            </div>
        </section>
      `;
    });

    return markup;
  }
}

export default new MainView();
