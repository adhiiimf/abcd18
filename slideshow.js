var progWidth = 0;
var prog;
var slideIndex = 1;

showSlides(slideIndex);
clearInterval(prog);
startBar(); 

function startBar() {
  var elem = document.getElementById("myBar"); 
  progWidth=0;
  prog = setInterval(frame, 10);
  function frame() {
    if (progWidth >= 100) {
	  clearInterval(prog);
	  plusSlides(1);
    } else {
      progWidth+=1/10;
      elem.style.width = progWidth + '%'; 
    }
  }
}

//$(document).ready(function() {
//  $('body').imagesLoaded( function() {
//    setTimeout(function(){
//      $("#loader").fadeOut("slow");
//      $("#loader-wrapper").fadeOut("slow");
//      showSlides(slideIndex);
//      clearInterval(prog);
//      startBar(); 
//    }, 3000);
//  });
//});

function plusSlides(n) {
  showSlides(slideIndex += n); 
  clearInterval(prog);
  startBar();
}

function currentSlide(n) {
  showSlides(slideIndex = n);
  clearInterval(prog);
  startBar();
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1} 
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none"; 
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block"; 
  dots[slideIndex-1].className += " active";
}