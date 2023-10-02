"use strict";

let popup = document.querySelector('.js-modal');
let popupBackground = document.querySelector('.js-modal__wrapper');
let openPopup = document.querySelector('.js-open-popup');
let closePopup = document.querySelector('.js-close-popup');

openPopup.addEventListener('click', (e) => {
  e.preventDefault();
  popupBackground.classList.add('active');
  popup.classList.add('active');
});

closePopup.addEventListener('click', (e) => {
  e.preventDefault();
  popupBackground.classList.remove('active');
  popup.classList.remove('active');
});
