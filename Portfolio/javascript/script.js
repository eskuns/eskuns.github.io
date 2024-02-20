// Setting up the Variables
var bars = document.getElementById("div-action");
var nav = document.getElementById("nav");


//setting up the listener
bars.addEventListener("click", barClicked, false);

//setting up the clicked Effect
function barClicked() {
  bars.classList.toggle('active');
  nav.classList.toggle('visible');
}


const slider = document.querySelector('.slider');

function activate(e) {
  const items = document.querySelectorAll('.item');
  e.target.matches('.next') && slider.append(items[0])
  e.target.matches('.prev') && slider.prepend(items[items.length-1]);
}

document.addEventListener('click',activate,false);