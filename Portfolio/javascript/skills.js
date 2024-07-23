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



