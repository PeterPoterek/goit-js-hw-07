import { galleryItems } from "./gallery-items.js";

const gallery = document.querySelector(".gallery");
const galleryItemArr = [];

const handleImageRender = () => {
  galleryItems.forEach((item) => {
    const galleryItem = document.createElement("div");
    galleryItem.setAttribute("class", "gallery__item ");

    const image = document.createElement("img");
    image.setAttribute("class", "gallery__image");
    image.setAttribute("data-source", item.original);
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
};

const handleImageClick = () => {
  gallery.addEventListener("click", (e) => {
    e.preventDefault();

    const img = e.target.getAttribute("data-source");
    const description = e.target.alt;

    const instance = basicLightbox.create(`
    <img src="${img}" alt="${description}">
  `);

    instance.show();

    gallery.addEventListener("keydown", (e) => {
      if (e.key === "Escape") {
        instance.close();
      }
    });
  });
};

handleImageRender();
handleImageClick();
