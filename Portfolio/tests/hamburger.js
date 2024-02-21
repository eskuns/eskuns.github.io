// Setting up the Variables
var bars = document.getElementsByClassName("menu-btn");
var nav = document.getElementsByClassName("menu");

console.log(bars);

//setting up the listener
bars[0].addEventListener("click", barClicked, false);

//setting up the clicked Effect
function barClicked() {
  bars[0].classList.toggle('open');
  nav[0].classList.toggle('menu-open');
}

