const li = document.querySelectorAll('.mot');

for (let i = 1; i < li.length; i++) {
    // Récupérer la taille actuelle de l'élément précédent
    let prevSize = parseFloat(window.getComputedStyle(li[i - 1]).getPropertyValue('font-size'));

    // Calculer la nouvelle taille en soustrayant 2% de la taille précédente
    let newSize = prevSize - (prevSize * 0.05);

    // Définir la nouvelle taille pour l'élément actuel
    li[i].style.fontSize = `${newSize}px`;
}

// Fonction pour générer une couleur aléatoire au format hexadécimal
function getRandomColor() {
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  }
  
  // Sélectionne tous les éléments li
  var listItems = document.querySelectorAll('.mot');
  
  // Parcours chaque élément li et assigne une couleur aléatoire
  listItems.forEach(function(item) {
    item.style.color = getRandomColor();
  });


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
  