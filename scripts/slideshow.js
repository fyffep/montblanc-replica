const MAX_STEPS = 2;
const INTERVAL = 10;
var slideIndex = 1;
//Update progress bar
function increaseProgress() {
  var bar = document.getElementById("progress-bar-fill");

  idealWidth = (100.0/MAX_STEPS) * slideIndex;
  width = (100.0/MAX_STEPS) * (slideIndex - 1);
  
  var animation = setInterval(() => {
    if (width > idealWidth) {
      clearInterval(animation);
    }
    else {
      bar.style.width = width++ + "%";
    }
  }, INTERVAL);
}
increaseProgress();




//// Slideshow: Full credit to W3 Schools https://www.w3schools.com/howto/howto_js_slideshow.asp ////

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("img-slide");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  //Make all children of slides invisible
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
  }
  //Show target slide
  slides[slideIndex-1].style.display = "block";

  //Change number on button
  var btnPlusSlide = document.getElementById("btn-plus-slide");
  btnPlusSlide.innerHTML = "« " + slideIndex;

  increaseProgress();
} 
showSlides(slideIndex);