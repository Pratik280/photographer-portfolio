const lightbox = document.createElement("div");

// creating div element
// <div></div>

lightbox.id = "lightbox";
lightbox.className = "lightbox";

// adding class id
// <div class="lightbox" id="lightbox"></div>

const gallery = document.querySelector(".gallery");
gallery.appendChild(lightbox)
//<div class="gallerybody>
//
//  <div class="lightbox" id="lightbox"></div>
//</div>

const galleryBlocks = gallery.querySelectorAll('.gallery__block');

// galleryBlocks is individual div section which holds image inside grid

galleryBlocks.forEach(image => {

  let galleryImage = document.querySelector(".gallery__block--img");
  // galleryImage is img tag from grid which src will be used
  
  image.addEventListener("click", e => {

    // iterating over galleryBlocks
    // creating new div that will hold enlarged image after clicking on the small image form grid
    
    lightbox.classList.add('lightbox--active')

    // lightbox -> onclick will add new class "lightbox--active"
    // be default the lightbox has css property display: none;
    // when clicked -> class "lightbox--active" has a css property of display:flex
    // onclick :
    // <div class="lightbox lightbox--active"> </div>
    
    const lightboxImg = document.createElement('img');
    lightboxImg.className = "lightbox__image";
    lightboxImg.src = galleryImage.src;

    // creating img with class "lightbox__image" and src same as the img tag which is clicked from grid
    // <img class="lightbox__image" src="same src from the click inside grid" alt="">
    
    while (lightbox.firstChild) {
      lightbox.removeChild(lightbox.firstChild)
    }
    lightbox.appendChild(lightboxImg)

    // remove children elements of lightbox
    // append img to lightbox
    // <div class="lightbox"> 
    //  <img class="lightbox__image" src="same src from the click in 
    // </div>
    
  })
})

lightbox.addEventListener("click", e => {
  if(e.target !== e.currentTarget) return;
  lightbox.classList.remove("lightbox--active");
})

// when clicked anywhere on screen except the enlarged image lighbox will disappear
// lightbox--active class is removed
// so display : flex -> none
