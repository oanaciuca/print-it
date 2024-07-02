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

    // Sélection des éléments DOM
    const arrowLeft = document.querySelector('.arrow_left .btn');
    const arrowRight = document.querySelector('.arrow_right .btn');
    const banner = document.querySelector('#banner');
    const dotsContainer = document.querySelector('.dots');

    // Vérifiez si les éléments sont bien trouvés
    if (!arrowLeft) {
        console.error('La flèche gauche n\'est pas trouvée dans le DOM.');
        return;
    }
    if (!arrowRight) {
        console.error('La flèche droite n\'est pas trouvée dans le DOM.');
        return;
    }
    if (!banner) {
        console.error('La bannière n\'est pas trouvée dans le DOM.');
        return;
    }
    if (!dotsContainer) {
        console.error('Le conteneur des dots n\'est pas trouvé dans le DOM.');
        return;
    }

    // Création dynamique de la balise image et de la balise p pour la tagline
    const bannerImg = document.createElement('img');
    bannerImg.classList.add('banner-img');
    bannerImg.alt = 'Banner Image';
    
    const tagLine = document.createElement('p');

    // Ajout de l'image et de la tagline au banner en une seule fois
    banner.append(bannerImg, tagLine);

    // Création dynamique des dots
    slides.forEach((slide, index) => {
        const dot = document.createElement('span');
        dot.classList.add('dot');
        if (index === 0) {
            dot.classList.add('dot_selected');
        }
        dotsContainer.append(dot);
    });

    const dots = document.querySelectorAll('.dot');

    function changeImage() {
        bannerImg.src = `./assets/images/slideshow/${slides[compteur].image}`;
        tagLine.innerHTML = slides[compteur].tagLine;
    }

    function changeDots() {
        dots.forEach((dot, index) => {
            if (index === compteur) {
                dot.classList.add('dot_selected');
            } else {
                dot.classList.remove('dot_selected');
            }
        });
    }

    function updateSlide() {
        changeImage();
        changeDots();
    }

    // Écouteur d'événement pour la flèche gauche
    arrowLeft.addEventListener('click', function() {
        console.log('Clic sur la flèche gauche');
        compteur = (compteur === 0) ? slides.length - 1 : compteur - 1;
        console.log('Compteur après clic gauche:', compteur);
        updateSlide();
    });

    // Écouteur d'événement pour la flèche droite
    arrowRight.addEventListener('click', function() {
        console.log('Clic sur la flèche droite');
        compteur = (compteur === slides.length - 1) ? 0 : compteur + 1;
        console.log('Compteur après clic droit:', compteur);
        updateSlide();
    });

    updateSlide(); // Affiche le premier slide au chargement de la page
});
