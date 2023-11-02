import { galleryItems } from "./gallery-items.js";

const gallery = document.querySelector(".gallery");
const galleryItemArr = [];

galleryItems.forEach((item) => {
  const galleryItem = document.createElement("li");
  galleryItem.setAttribute("class", "gallery__item ");

  const image = document.createElement("img");
  image.setAttribute("class", "gallery__image");
  image.src = item.preview;
  image.alt = item.description;

  galleryItem.append(image);
  galleryItemArr.push(galleryItem);

  galleryItem.addEventListener("click", () => {
    const instance = basicLightbox.create(`
    <img src="${item.original}" alt="${item.description}">
  `);

    instance.show();
  });
});

gallery.append(...galleryItemArr);
