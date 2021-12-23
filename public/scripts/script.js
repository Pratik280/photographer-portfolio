const lightbox = document.createElement("div");
lightbox.id = "lightbox";
lightbox.className = "lightbox";
document.body.appendChild(lightbox)

const main = document.querySelector(".main");
const gridImages = main.querySelectorAll('img');
gridImages.forEach(image => {
  image.addEventListener("click", e => {
    lightbox.classList.add('lightbox--active')
    const lightboxImg = document.createElement('img');
    lightboxImg.className = "lightbox__image";
    lightboxImg.src = image.src;
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

console.log("Hello")
