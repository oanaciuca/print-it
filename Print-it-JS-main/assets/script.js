document.addEventListener('DOMContentLoaded', () => {
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

    let compteur = 0;

    // Créer des constantes en fonction des éléments HTML dont on a besoin
    const arrowLeft = document.querySelector('.arrow_left .btn');
    const arrowRight = document.querySelector('.arrow_right .btn');
    const bannerImg = document.querySelector('.banner-img');
    const tagLine = document.querySelector('#banner p');
    const dots = document.querySelectorAll('.dot');


    // Fonction pour changer l'image et la tagline
    function changeImage() {
        bannerImg.src = `./assets/images/slideshow/${slides[compteur].image}`;
        tagLine.innerHTML = slides[compteur].tagLine;
    }

    // Fonction pour mettre à jour les dots
    function changeDots() {
        dots.forEach((dot, index) => {
            if (index === compteur) {
                dot.classList.add('dot_selected');
            } else {
                dot.classList.remove('dot_selected');
            }
        });
    }

    // Fonction pour gérer le changement de slide
    function updateSlide() {
        changeImage();
        changeDots();
    }

    // Ajouter des écouteurs d'événements pour les flèches
    arrowLeft.addEventListener('click', function() {
        compteur = (compteur === 0) ? slides.length - 1 : compteur - 1;
        updateSlide();
    });

    arrowRight.addEventListener('click', function() {
        compteur = (compteur === slides.length - 1) ? 0 : compteur + 1;
        updateSlide();
    });

    // Afficher le premier slide au chargement de la page
    updateSlide();
});
