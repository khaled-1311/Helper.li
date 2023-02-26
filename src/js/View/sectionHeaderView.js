class SectionHeaderView {
  generateMarkup(title, icon) {
    const markup = `
    <h2 class="secondary-heading">
        ${icon}
        <span>${title}</span>
    </h2>
    `;

    return markup;
  }
}

export default new SectionHeaderView();
