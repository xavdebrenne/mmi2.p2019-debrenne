import 'waypoints/lib/noframework.waypoints.min.js'

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


var fabric = new Waypoint({
  element: document.getElementById('fabric'),
  handler: function(direction) {
    document.getElementById('fabric').classList.add('is-reached');
  },
  offset:'75%'
});
var quality = new Waypoint({
  element: document.getElementById('quality'),
  handler: function(direction) {
    document.getElementById('quality').classList.add('is-reached');
    document.getElementById('arrow1').classList.add('is-reached');

  },
  offset:'75%'
});
var delivery = new Waypoint({
  element: document.getElementById('delivery'),
  handler: function(direction) {
    document.getElementById('delivery').classList.add('is-reached');
    document.getElementById('arrow2').classList.add('is-reached');  
  },
  offset:'75%'
});