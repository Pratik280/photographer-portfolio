const lightbox = document.createElement("div");
lightbox.id = "lightbox";
lightbox.className = "lightbox";
document.body.appendChild(lightbox)

const gallery = document.querySelector(".gallery");
const galleryBlocks = gallery.querySelectorAll('.gallery__block');

galleryBlocks.forEach(image => {
  let galleryImage = document.querySelector(".gallery__block--img");
  image.addEventListener("click", e => {
    lightbox.classList.add('lightbox--active')
    const lightboxImg = document.createElement('img');
    lightboxImg.className = "lightbox__image";
    lightboxImg.src = galleryImage.src;
    while (lightbox.firstChild) {
      lightbox.removeChild(lightbox.firstChild)
    }
    lightbox.appendChild(lightboxImg)
  })
})

lightbox.addEventListener("click", e => {
  if(e.target !== e.currentTarget) return;
  lightbox.classList.remove("lightbox--active");
})
