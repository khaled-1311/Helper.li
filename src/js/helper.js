export const eventHandler = function (el, callBack, eventType = 'click') {
  // check if the el variable is nodelist or not
  let element = el.length ? Array.from(el) : [el];

  element.forEach(el => el.addEventListener(eventType, callBack.bind(this)));
};
