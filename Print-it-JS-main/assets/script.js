const slides = [
	{
		"image":"slide1.jpg",
		"tagLine":"Impressions tous formats <span>en boutique et en ligne</span>"
	},
	{
		"image":"slide2.jpg",
		"tagLine":"Tirages haute définition grand format <span>pour vos bureaux et events</span>"
	},
	{
		"image":"slide3.jpg",
		"tagLine":"Grand choix de couleurs <span>de CMJN aux pantones</span>"
	},
	{
		"image":"slide4.png",
		"tagLine":"Autocollants <span>avec découpe laser sur mesure</span>"
	}
]


document.addEventListener('DOMContentLoaded', (event) => {
    // Sélectionner les boutons de navigation gauche et droite
    //const arrowLeft = document.querySelector('.arrow_left'); // Sélectionner le bouton de la flèche gauche
    //const arrowRight = document.querySelector('.arrow_right'); // Sélectionner le bouton de la flèche droite

// Vérifier la récupération des éléments dans la console
console.log('Flèche gauche:', arrowLeft); // Devrait afficher le bouton de la flèche gauche dans la console
console.log('Flèche droite:', arrowRight); // Devrait afficher le bouton de la flèche droite dans la console

 // Ajouter des écouteurs d'événements pour tester le clic sur les flèches
 arrowLeft.addEventListener('click', function () {
	console.log('Flèche gauche cliquée'); // Afficher un message dans la console pour la flèche gauche
	alert('Flèche gauche cliquée'); // Afficher une alerte pour la flèche gauche
});

arrowRight.addEventListener('click', function () {
	console.log('Flèche droite cliquée'); // Afficher un message dans la console pour la flèche droite
	alert('Flèche droite cliquée'); // Afficher une alerte pour la flèche droite
});


})