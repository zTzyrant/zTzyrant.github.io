// When the user scrolls the page, execute myFunction
window.onscroll = function() {stickNav()};

// Get the header
var header = document.getElementById("NavHead");
// Get the offset position of the navbar
var sticky = header.offsetTop;

// Add the sticky class to the header when you reach its scroll position. Remove "sticky" when you leave the scroll position
function stickNav() {
  if (window.pageYOffset > sticky) {
    header.classList.add("sticky");
    if (window.matchMedia("(max-width: 600px)").matches) {
    document.getElementById("a_fabar").style.display = "block";}
    
    if (document.getElementById("myLinks").style.display === "block") {
      document.getElementById("myLinks").style.display = "none";
    } 
  }else {
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
          rx = - e.clientX/10,
          ry = - e.clientY/10;
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