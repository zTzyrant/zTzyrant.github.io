window.onscroll = function() {stickNav()} ;
var header = document.getElementById("NavHead");
var sticky = header.offsetTop;
var targetOffset = $("#prsx").offset().top;
function stickNav() {

  if (window.pageYOffset > sticky) {
    header.classList.add("sticky");
    if (window.matchMedia("(max-width: 600px)").matches) {
      document.getElementById("a_fabar").style.display = "block";}
    if (window.pageYOffset > targetOffset) {
      document.getElementById("NavHead").style.backgroundColor = "#18191c";}
    if (window.pageYOffset < targetOffset) {
      document.getElementById("NavHead").style.backgroundColor = "transparent";}
    if (document.getElementById("myLinks").style.display === "block") {
      document.getElementById("myLinks").style.display = "none";
    } 
  } else {
    if (window.matchMedia("(mix-width: 700px)").matches) {
    document.getElementById("label").style.display = "none";}
    if (document.getElementById("myLinks").style.display === "none") {
      document.getElementById("myLinks").style.display = "block";
    }
   
    header.classList.remove("sticky");
    document.getElementById("a_fabar").style.display = "none";
  }
} 

var moon = document.getElementById("moon")
var astro = document.getElementById("astro")
var rocket = document.getElementById("rocket")

window.onmousemove = function(e){
      var x = - e.clientX/30,
          y = - e.clientY/30,
          mx = - e.clientX/50,
          my = - e.clientY/50,
          rx = - e.clientX/20,
          ry = - e.clientY/20;
          moon.style.transform = "translate3d(" + x + "px" + ", " + y + "px, 0)";
          astro.style.transform = "translate3d(" + mx + "px" + ", " + my + "px, 0)";
          rocket.style.transform = "translate3d(" + rx + "px" + ", " + ry + "px, 0)";
}

function myFuncti43on() {
  var x = document.getElementById("myLinks");
  if (x.style.display === "block") {
    x.style.display = "none";
  } else {
    x.style.display = "block";
  }
}

$(document).ready(function(){
  $("a").on('click', function(event) {
    if (this.hash !== "") {
      event.preventDefault();
      var hash = this.hash;
      $('html, body').animate({
        scrollTop: $(hash).offset().top
      }, 800, function(){
        window.location.hash = hash;
      });
    }
  });
});

var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("ther");
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



document.querySelector('#fomsta').addEventListener('submit', function(e) {
  var form = this;
  
  e.preventDefault();
  
  swal({
      title: "Are You Sure You Want to Checkout?",
      text: "You Can Still Change Data !!!",
      icon: "warning",
      buttons: [
        'No, cancel it!',
        'Yes, I am sure!'
      ],
      dangerMode: true,
    }).then(function(isConfirm) {
      if (isConfirm) {
        swal({
          title: 'Success!',
          text: 'Your Order Will Be Immediately Processed!',
          icon: 'success'
        }).then(function() {
          form.submit();
        });
      } else {
        swal("Cancelled", ":)", "error");
      }
    });
});
var modal = document.getElementById('id01');
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}
function show() {
document.getElementById('id01').style.display = 'block';
}
function  juef() {
document.getElementById('id01').style.display='none'
}
var opt1 = 'Website Design';
var opt2 = 'Website Application';
var opt3 = 'Website Analysis';
var opt4 = 'Django';
var opt5 = 'Ruby on Rails';
var opt6 = 'Laravel';
var opt7 = 'Website Security';
var opt8 = 'Website Pentest';
var opt9 = 'Python';
var val = 'Select Service';
$('#btn1').on('click', function() {
  $('#service').val(opt1);
});
$('#btn2').on('click', function() {
  $('#service').val(opt2);
});
$('#btn3').on('click', function() {
  $('#service').val(opt3);
});
$('#btn4').on('click', function() {
  $('#service').val(opt4);
});
$('#btn5').on('click', function() {
  $('#service').val(opt5);
});
$('#btn6').on('click', function() {
  $('#service').val(opt6);
});
$('#btn7').on('click', function() {
  $('#service').val(opt7);
});
$('#btn8').on('click', function() {
  $('#service').val(opt8);
});
$('#btn9').on('click', function() {
  $('#service').val(opt9);
});