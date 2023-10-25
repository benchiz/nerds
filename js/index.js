const popup = document.querySelector('.js-modal');
const openPopup = document.querySelector('.js-open-popup');
const closePopup = document.querySelector('.js-close-popup');
const formPopup = popup.querySelector('.contacts__form');
const nameInput = popup.querySelector('[name=name]');
const emailInput = popup.querySelector('[name=email]');

openPopup.addEventListener('click', (e) => {
  e.preventDefault();
  popup.classList.add('js-active');
  document.querySelector('html').classList.add('is-disabled-scroll');
});

closePopup.addEventListener('click', (e) => {
  e.preventDefault();
  popup.classList.remove('js-active');
  document.querySelector('html').classList.remove('is-disabled-scroll');
});

window.addEventListener('keydown', (e) => {
  if (e.keyCode === 27) {
    if (popup.classList.contains('js-active')) {
      e.preventDefault();
      popup.classList.remove('js-active');
      document.querySelector('html').classList.remove('is-disabled-scroll');
    }
  }
});

formPopup.addEventListener('submit', (e) => {
  if (!nameInput.value || !emailInput.value) {
    e.preventDefault();
    popup.classList.remove('js-error');
    popup.offsetWidth = popup.offsetWidth;
    popup.classList.add('js-error');
  }
});
