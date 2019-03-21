document.getElementById("nav__button").addEventListener('click', function(){
  this.classList.toggle( 'button__toggle' );

});

document.getElementById("nav").addEventListener('click', function(){
  this.classList.toggle( 'nav__toggle' );

});

var slideIndex = 0;


showSlides();

function showSlides() {
  var i;
  var slides = document.getElementsByClassName("news__slide");
  var dots = document.getElementsByClassName("dot");

  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  
  slideIndex++;
  if (slideIndex > slides.length) {slideIndex = 1}
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";

  setTimeout(showSlides, 5000); // Change image every 2 seconds
} 