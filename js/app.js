let pictures = [];
let slider;
let firstPicture;
let maxPictures;
let intervalo;
let tempo;

// get all images
function getSlider() {
	let p = 1;
	for (let i = 0; i < 8; i++) {
		pictures[i] = new Image();
		pictures[i].src = 'img/' + p + '.jpg';
		p++;
	}
}

function loadPicture(img) {
	slider.style.backgroundImage = "url('" + pictures[img].src + "')";
}

// load pictures
function startSlider() {
	getSlider();
	firstPicture = 0;
	maxPictures = pictures.length - 1;
	slider = document.querySelector('#picture');
	loadPicture(firstPicture);
	tempo = 2000;
	intervalo = setInterval(moverPicture, tempo);
}

function moverPicture() {
	firstPicture++;
	if (firstPicture > maxPictures) {
		firstPicture = 0;
	}
	loadPicture(firstPicture);
}

window.addEventListener('load', startSlider);
