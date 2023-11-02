import { galleryItems } from "./gallery-items.js";

const gallery = document.querySelector(".gallery");

document.addEventListener("DOMContentLoaded", () => {
  const lightbox = new SimpleLightbox(".gallery a", {
    captions: true,
  });
  console.log(lightbox);
});

const galleryItemArr = [];

galleryItems.forEach((item) => {
  const galleryItem = document.createElement("li");
  galleryItem.setAttribute("class", "gallery__item ");

  const image = document.createElement("img");
  image.setAttribute("class", "gallery__image");
  image.src = item.preview;
  image.alt = item.description;

  const link = document.createElement("a");
  link.setAttribute("href", item.original);
  link.setAttribute("class", "gallery__link");

  link.append(image);

  galleryItem.append(link);
  galleryItemArr.push(galleryItem);
});

gallery.append(...galleryItemArr);

gallery.addEventListener("click", (e) => {
  if (e.target.tagName === "IMG") {
    lightbox.open();
  }
});
