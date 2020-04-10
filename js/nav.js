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
  } else {
    header.classList.remove("sticky");
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