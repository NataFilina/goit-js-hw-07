import { galleryItems } from './gallery-items.js';
// Change code below this line

const gallery = document.querySelector('.gallery');

gallery.insertAdjacentHTML("afterbegin", createMarkup(galleryItems));
gallery.addEventListener('click', onClick);

function createMarkup(arr) {
    return arr.map(({ preview, original, description }) => 
        `
        <li class="gallery__item">
            <a class="gallery__link" href="${original}">
                <img class="gallery__image" src="${preview}" alt="${description}" title="${description}"/>
            </a>
        </li>
        `
    ).join("");
}

function onClick(event) {
    event.preventDefault();
    if (event.target === event.currentTarget) {
        return
    }
    const galleryNew = new SimpleLightbox('.gallery a');
    galleryNew.on('show.simplelightbox', function () {
        event.captions()
            .captionPosition('bottom')
            .captionDelay(250);
    });
    
}
    