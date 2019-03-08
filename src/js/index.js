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
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slideIndex++;
  if (slideIndex > slides.length) {slideIndex = 1}
  slides[slideIndex-1].style.display = "block";
  setTimeout(showSlides, 2000); // Change image every 2 seconds
} 