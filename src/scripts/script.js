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

const overlayDivs = document.querySelectorAll(".gallery__block--text-on-image")
// grabbing all overlayDivs (hover (click to view)) to add click events on them

overlayDivs.forEach(i => {
  i.addEventListener("click", e => {

    let picture = i.previousElementSibling;
    // picture is previous element to that of overlay div

    let currentImg = picture.lastElementChild;
    // currenImg is last element inside of picture div 
    // it is used to grab src of image

    lightbox.classList.add('lightbox--active')
    const lightboxImg = document.createElement('img');
    lightboxImg.className = "lightbox__image";
    lightboxImg.src = currentImg.src;
    // lightbox -> onclick will add new class "lightbox--active"
    // be default the lightbox has css property display: none;
    // when clicked -> class "lightbox--active" has a css property of display:flex
    // onclick :
    // <div class="lightbox lightbox--active"> </div>


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
