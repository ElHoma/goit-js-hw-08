import { galleryItems } from './gallery-items.js';

// Change code below this line
import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

console.log(galleryItems);

const imgList = document.querySelector(`.gallery`);

galleryItems.forEach(function (item) {
  let imgOrig = item.original;
  let imgPrev = item.preview;
  let imgDesc = item.description;

  const template = `<li class="gallery__item">
  <a class="gallery__link" href="${imgOrig}">
    <img
      class="gallery__image"
      src="${imgPrev}"
      data-source="${imgOrig}"
      alt="${imgDesc}"
    />
  </a>
</li>`;

  imgList.innerHTML += template;
});

var lightbox = new SimpleLightbox('.gallery a', {
  captions: true,
  captionsData: `alt`,
  captionDelay: 250,
});
