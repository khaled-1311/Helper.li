import * as images from '../../img/logos/*.png';

class SectionResoursesView {
  generateMarkup(data) {
    let markup = ``;

    data.map(res => {
      markup += `
        <div class="col-4">
            <div class="resource">
                <a href="${res.url}" target="_blank" class="resource__link" >
                    <img src="${images[res.logo.name]}" 
                        alt="${res.logo.alt}"
                        class="resource__image" />
                    <span class="resource__title">${res.name}</span>
                </a>
            </div>
        </div>
      `;
    });

    return markup;
  }
}

export default new SectionResoursesView();
