"use strict";

const swiper = new Swiper('.swiper', {
  effect: "fade",
  pagination: {
    el: '.swiper-pagination',
  },
});
let popup = document.querySelector('.js-modal');
let openPopup = document.querySelector('.js-open-popup');
let closePopup = document.querySelector('.js-close-popup');

openPopup.addEventListener('click', (e) => {
  e.preventDefault();
  popup.classList.add('js-active');
});

closePopup.addEventListener('click', (e) => {
  e.preventDefault();
  popup.classList.remove('js-active');
});
