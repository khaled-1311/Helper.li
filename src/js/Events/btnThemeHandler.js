//================= Importing files =================
import { eventHandler } from '../helper.js';

//================= Declaring variables =================
const header = document.querySelector('.header');
let isDark = false;

//================= Functions =================
const darkmode = function () {
  // set isDark variable to true
  isDark = true;

  // add the class  darkmode to the body
  document.body.classList.add('darkmode');
};

const lightmode = function () {
  // set isDark variable to false
  isDark = false;

  // add the class  darkmode to the body
  document.body.classList.remove('darkmode');
};

const darkLightTheme = function (e) {
  const btnTarget = e.target.closest('.apperance');

  if (!btnTarget) return;

  // change style of that btn
  btnTarget.classList.toggle('apperance-active-dark');

  // check if the website is dark or not
  if (isDark) lightmode();
  else darkmode();
};

//================= Event handler =================
export const btnTheme_HandlerClick = function () {
  eventHandler(header, darkLightTheme);
};
