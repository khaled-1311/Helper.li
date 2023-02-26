import configData from '../data/data.json';

export const state = {
  sections: [],
};

export const loadSections = async function () {
  try {
    const { data } = configData;

    data.map((sec, i) => {
      state.sections.push({
        data: sec,
        id: i + 99,
      });
    });

    console.log(data);
  } catch (err) {
    console.error(err);
  }
};

export const getTags = async function () {
  const data = await state.sections;
  const tagsArr = [];

  data.map(tag => {
    tagsArr.push({
      icon: tag.data.icon,
      tagName: tag.data.type,
    });
  });

  return tagsArr;
};

export const getIcons = async function () {
  const data = await state.sections;
  const icons = [];

  data.map(sec => {
    icons.push(sec.data.icon);
  });

  return icons;
};
