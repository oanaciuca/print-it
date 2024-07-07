const slides = [
    {
        "image": "slide1.jpg",
        "tagLine": "Impressions tous formats <span>en boutique et en ligne</span>"
    },
    {
        "image": "slide2.jpg",
        "tagLine": "Tirages haute définition grand format <span>pour vos bureaux et events</span>"
    },
    {
        "image": "slide3.jpg",
        "tagLine": "Grand choix de couleurs <span>de CMJN aux pantones</span>"
    },
    {
        "image": "slide4.png",
        "tagLine": "Autocollants <span>avec découpe laser sur mesure</span>"
    }
];

// Sélection de l'élément principal de la bannière dans le DOM
const banner = document.querySelector('#banner');

// Création de l'élément img pour afficher les images des slides
const bannerImg = document.createElement('img');
bannerImg.classList.add('banner-img'); // Ajout de la classe pour le style
bannerImg.alt = 'Image de bannière'; // Texte alternatif pour l'accessibilité
banner.appendChild(bannerImg); // Ajout de l'élément img à la bannière

// Création de l'élément p
const tagLine = document.createElement('p');
banner.appendChild(tagLine); // Création de l'élément p

// Sélection du conteneur des dots dans le DOM
const dotsContainer = document.querySelector('.dots');

// Création des dots pour chaque slide
for (let index = 0; index < slides.length; index++) {
    const dot = document.createElement('span');
    dot.classList.add('dot'); // Ajout de la classe pour le style des dots
    if (index === 0) {
        dot.classList.add('dot_selected'); // Ajout de la classe pour le dot actif (première slide)
    }
    dotsContainer.appendChild(dot); // Ajout du dot à son conteneur
}

// Initialisation du compteur
let compteur = 0;

// Sélection de tous les dots créés
const dots = document.querySelectorAll('.dot');

// Fonction pour mettre à jour l'affichage des dots selon la slide actuelle
function changeDots() {
    dots.forEach((dot, index) => {
        if (index === compteur) {
            dot.classList.add('dot_selected');
        } else {
            dot.classList.remove('dot_selected');
        }
    });
}

// Fonction pour changer l'image et la légende de la bannière
function changeImage() {
    bannerImg.src = `./assets/images/slideshow/${slides[compteur].image}`;
    tagLine.innerHTML = slides[compteur].tagLine;
    changeDots(); // Met à jour les dots après le changement d'image
}

// Événement DOMContentLoaded pour démarrer avec la première slide au chargement
document.addEventListener('DOMContentLoaded', function () {
    changeImage();
});

// Sélection des flèches de navigation
const arrowLeft = document.querySelector('.arrow_left');
const arrowRight = document.querySelector('.arrow_right');

// Ajout des gestionnaires d'événements pour les flèches
arrowLeft.addEventListener('click', prev);
arrowRight.addEventListener('click', next);

// Fonction pour passer à la slide suivante
function next() {
    compteur++;
    if (compteur === slides.length) {
        compteur = 0;
    }
    changeImage();
}

// Fonction pour passer à la slide précédente
function prev() {
    compteur--;
    if (compteur < 0) {
        compteur = slides.length - 1;
    }
    changeImage();
}

// Fonction pour passer à la slide suivante
function next() {
    compteur++;
    if (compteur === slides.length) {
        compteur = 0;
    }
    changeImage();
}

// Fonction pour naviguer avec les dots
function nav(index) {
    compteur = index;
    changeImage();
}

// Ajout des gestionnaires d'événements pour les dots
dots.forEach((dot, index) => {
    dot.addEventListener('click', () => {
        nav(index);
    });
});
