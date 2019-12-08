import galleryItems from "./gallery-items.js";
const gallery = document.querySelector(".js-gallery");
const openedModalWindow = document.querySelector(".js-lightbox");
const openedImage = document.querySelector(".lightbox__image");
const closeButton = document.querySelector(".lightbox__button");
const lightboxBackdrop = document.querySelector(".lightbox__content");

function createGallery({ preview, description, original }) {
  const item = document.createElement("li");
  const link = document.createElement("a");
  const image = document.createElement("img");

  item.classList.add("gallery__item");
  link.classList.add("gallery__link");
  image.classList.add("gallery__image");

  image.setAttribute("src", preview);
  image.setAttribute("alt", description);
  image.setAttribute("data-source", original);

  link.append(image);
  item.append(link);

  return item;
}

const createdGallery = galleryItems.map(e => createGallery(e));

gallery.append(...createdGallery);

gallery.addEventListener("click", mouseOpen);

function mouseOpen(e) {
  if (e.target === e.currentTarget) {
    return;
  }

  openedModalWindow.classList.add("is-open");
  openedImage.setAttribute("src", e.target.dataset.source);
}

closeButton.addEventListener("click", btnClose);

function btnClose() {
  openedModalWindow.classList.remove("is-open");
  openedImage.setAttribute("src", "");
}

function overlayClose({ target, currentTarget }) {
  if (target !== currentTarget) {
    return;
  }
  btnClose();
}

lightboxBackdrop.addEventListener("click", overlayClose);
