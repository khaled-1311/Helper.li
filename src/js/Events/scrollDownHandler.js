import { eventHandler } from '../helper';

const scrollDown = document.querySelector('.scroll-down');
const main = document.querySelector('.main');

const callBack = function () {
  main.scrollIntoView({
    behavior: 'smooth',
  });
};

export const scrollDownEventHandler = () => {
  eventHandler(scrollDown, callBack);
};
