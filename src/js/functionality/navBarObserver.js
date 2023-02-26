const nav = document.querySelector('.nav');
const navHeight = nav.getBoundingClientRect().height;

const options = {
  root: null,
  rootMargin: `-${navHeight}px`,
  threshold: 0,
};

const callback = function (entries) {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      document.querySelector('.nav').classList.remove('observe-nav');
      document.querySelector('.logo__link').style.color =
        'var(--color-text-secondary-1)';

      document.querySelector('.apperance').style.backgroundColor =
        'var(--color-bg-secondary-1)';

      document.querySelector('.aside').classList.remove('observe-aside');
    } else {
      document.querySelector('.nav').classList.add('observe-nav');

      document.querySelector('.logo__link').style.color =
        'var(--color-text-secondary-1-c)';

      document.querySelector('.apperance').style.backgroundColor =
        'var(--color-bg-secondary-1-c)';

      document.querySelector('.aside').classList.add('observe-aside');
    }
  });
};

const observer = new IntersectionObserver(callback, options);

const observerTarget = document.querySelector('.header');

export const observeSectionHeader = function () {
  observer.observe(observerTarget);
};
