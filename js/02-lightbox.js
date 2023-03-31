import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);

const ulGalleryEl = document.querySelector('ul.gallery');
let arrayItemLi = [];

arrayItemLi = galleryItems.map(({ description, original, preview }) =>
    `<li class="gallery__item">
    <a class="gallery__link" href=${original} title="${description}">
    <img src=${preview} alt='${description}' class="gallery__image">
    </a>
    </li>`
).join("");

ulGalleryEl.insertAdjacentHTML('beforeend', arrayItemLi);

var lightbox = new SimpleLightbox('.gallery a', {
    captionType: 'attr',
    captionSelector: 'img',
    captionsData: 'alt',
    captions: true,
    captionDelay: 250,
});
console.dir(lightbox)
