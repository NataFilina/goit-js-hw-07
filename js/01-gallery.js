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
            <img
                class="gallery__image"
                src="${preview}"
                data-source="${original}"
                alt="${description}"
            />
        </a>
        </li>
        `
    ).join("");
}
let instance;
function onClick(event) {
    event.preventDefault();
    
    if (event.target === event.currentTarget) {
        return
    }

    const currentPhoto = event.target.src;
    const imgUrl = galleryItems.find(({ preview }) => preview === currentPhoto);

     instance = basicLightbox.create(`
        <img src="${imgUrl.original}" width="800" height="600" alt="${imgUrl.description}">
    `)
    instance.show()
    
    window.addEventListener('keydown', onEscClose); 
}

function onEscClose(event) { 
    if (event.code === "Escape") {
        instance.close(); 
    } 
    if (!instance.visible()) {
        window.removeEventListener('keydown', onEscClose); 
    }
}
