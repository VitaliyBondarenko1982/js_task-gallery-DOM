'use strict';

const galleryList = document.querySelector('.gallery__list');
const bigImage = document.querySelector('.gallery__large-img');

galleryList.addEventListener('click', (evt) => {
  evt.preventDefault();

  const item = evt.target.closest('.list-item__link');
  const imgValue = item.getAttribute('href');

  bigImage.setAttribute('src', imgValue);
});
