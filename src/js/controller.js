import * as model from './model.js';
import { eventHandler } from './helper.js';

import { btnTheme_HandlerClick } from './View/Events/btnThemeHandler.js';
import { scrollDownEventHandler } from './View/Events/scrollDownHandler.js';

import sectionView from './View/sectionView.js';
import asideView from './View/asideView.js';

import { observeSectionHeader } from './functionality/navBarObserver.js';

const controlSection = async function () {
  try {
    await model.loadSections();

    sectionView.render(model.state.sections, false);
  } catch (err) {
    console.error(err);
  }
};

const controlTags = async function () {
  try {
    const tagsArr = await model.getTags();
    asideView.render(tagsArr, true);
  } catch (err) {
    console.error(err);
  }
};

const initControl = function () {
  controlSection();
  controlTags();
};

eventHandler(window, initControl, 'load');

const initEvents = function () {
  btnTheme_HandlerClick();
  scrollDownEventHandler();

  asideView._addEventHandler();

  observeSectionHeader();
};

eventHandler(window, initEvents, 'load');
