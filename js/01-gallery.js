import { galleryItems } from "./gallery-items.js";
// Change code below this line

console.log(galleryItems);

const gallery = document.querySelector(".gallery");

galleryItems.forEach((item) => {
  const galleryItem = document.createElement("li");
  galleryItem.setAttribute("class", "gallery__item ");

  const image = document.createElement("img");
  image.setAttribute("class", "gallery__image");
  image.src = item.preview;
  image.alt = item.description;

  galleryItem.append(image);
  gallery.append(galleryItem);

  galleryItem.addEventListener("click", () => {
    const instance = basicLightbox.create(`
    <img src="${item.original}" alt="${item.description}">
  `);
    instance.show();
  });
});
