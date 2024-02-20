// document.addEventListener('DOMContentLoaded', function () {
//   // Sélectionnez le bouton
//   var button = document.getElementById('nav-action');

//   // Ajoutez un gestionnaire d'événements pour le clic
//   button.addEventListener('click', function () {
//     // Ajoutez la classe 'bounce' au bouton
//     button.classList.add('fade');

//     // Supprimez la classe 'bounce' après l'animation
//     setTimeout(function () {
//       button.classList.remove('fade');
//     }, 700); // Ajustez la durée de l'animation ici (en millisecondes)
//   });
// });




// Setting up the Variables
var bars = document.getElementById("nav-action");
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