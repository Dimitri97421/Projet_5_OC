const slides = [
	{
		"image":"./assets/images/slideshow/slide1.jpg",
		"tagLine":"Impressions tous formats <span>en boutique et en ligne</span>"
	},
	{
		"image":"./assets/images/slideshow/slide2.jpg",
		"tagLine":"Tirages haute définition grand format <span>pour vos bureaux et events</span>"
	},
	{
		"image":"./assets/images/slideshow/slide3.jpg",
		"tagLine":"Grand choix de couleurs <span>de CMJN aux pantones</span>"
	},
	{
		"image":"./assets/images/slideshow/slide4.png",
		"tagLine":"Autocollants <span>avec découpe laser sur mesure</span>"
	}
]

var variable = 0; // Position dot + img

var dots = document.querySelectorAll('.dot');  // Récupère tous les points

dots[0].classList.add('dot_selected'); // Mets le 1er point en blanc

// Flèche de gauche

var flecheG = document.getElementById('flecheG'); // Récupère la flèche

flecheG.addEventListener('click', function() {
	if(variable > 0){
		dots.forEach(dot => dot.classList.remove('dot_selected'));  // Enlève la classe dot_selected sur le point actuel
		variable -= 1;
		dots[variable].classList.add('dot_selected'); // Applique la classe dot_selected sur le nouveau point

		document.getElementById('carousel-image').src = slides[variable].image; // Récupère l'image actuelle et la remplace par l'image correspondante au bullet point
  		document.getElementById('tagLine').innerHTML = slides[variable].tagLine; // Récupère la tag line actuelle et la remplace par la tag line correspondante au bullet point

	}else if(variable == 0){ // Si on clique sur la flèche de gauche en étant sur l'image 0, on  atterit sur la dernière image
		dots.forEach(dot => dot.classList.remove('dot_selected'));
		variable = slides.length - 1;
		dots[variable].classList.add('dot_selected');

		actuelSLide = slides[variable];
		document.getElementById('carousel-image').src = slides[variable].image;
  		document.getElementById('tagLine').innerHTML = slides[variable].tagLine;
	}
});

// Même chose avec la flèche de droite

var flecheD = document.getElementById('flecheD');

flecheD.addEventListener('click', function() {
	if(variable < slides.length -1){
		dots.forEach(dot => dot.classList.remove('dot_selected'));
		variable += 1;
		dots[variable].classList.add('dot_selected');

		document.getElementById('carousel-image').src = slides[variable].image;
  		document.getElementById('tagLine').innerHTML = slides[variable].tagLine;

	}else if(variable == slides.length - 1){
		dots.forEach(dot => dot.classList.remove('dot_selected'));
		variable = 0;
		dots[variable].classList.add('dot_selected');

		document.getElementById('carousel-image').src = slides[variable].image;
  		document.getElementById('tagLine').innerHTML = slides[variable].tagLine;
	}
});
