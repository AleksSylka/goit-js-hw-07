import { galleryItems } from './gallery-items.js';
// Change code below this line
console.log(galleryItems)

const ulGalleryEl = document.querySelector('ul.gallery');
let arrayItemLi = [];

arrayItemLi = galleryItems.map(({ description, original, preview }) =>
    `<li class="gallery__item">
    <a class="gallery__link" href=${original}>
    <img src=${preview} alt='${description}' data-source=${original} class="gallery__image">
    </a>
    </li>`
).join("");

ulGalleryEl.insertAdjacentHTML('beforeend', arrayItemLi);

ulGalleryEl.addEventListener('click', onClick);
function onClick(event) {
    event.preventDefault();
    const { target } = event;
    if (target.nodeName === 'UL') {
        console.log('Mimo');
        return
    };
    const instance = basicLightbox.create(`
    <img src=${target.dataset.source} alt='${target.alt}'>
    `);
    instance.show();

    function onEscClose(elm) {
        console.log(elm.code)
        if (elm.code === 'Escape') {
            instance.close();
        }
    }
    document.addEventListener("keydown", onEscClose, { once: instance.visible() });
}
