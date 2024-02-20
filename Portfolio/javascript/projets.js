// SLIDE

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

// SLIDE

// DOWNLOAD


document.getElementById('afficherCV').addEventListener('click', function() {
  var zoneCV = document.getElementById('zoneCV');
  var pdfPath = 'CV ALTERNANCE.pdf'; // Remplacez par le chemin vers votre CV

  // Créer un objet <embed> pour afficher le PDF
  var embedElement = document.createElement('embed');
  embedElement.setAttribute('src', pdfPath);
  embedElement.setAttribute('type', 'application/pdf');
  embedElement.setAttribute('width', '100%');
  embedElement.setAttribute('height', '600px');

  // Ajouter l'objet <embed> à la zone du CV
  zoneCV.innerHTML = ''; // Effacer le contenu précédent, s'il y en a
  zoneCV.appendChild(embedElement);

  // Afficher la zone du CV
  zoneCV.style.display = 'block';
});

// DOWNLOAD