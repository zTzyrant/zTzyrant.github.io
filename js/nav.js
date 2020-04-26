window.onscroll = function() {stickNav()} ;
var header = document.getElementById("NavHead");
var sticky = header.offsetTop;
var targetOffset = $("#about").offset().top;
function stickNav() {

  if (window.pageYOffset > sticky) {
    header.classList.add("sticky");
    if (window.matchMedia("(max-width: 600px)").matches) {
    document.getElementById("a_fabar").style.display = "block";}
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