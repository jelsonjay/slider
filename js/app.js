let pictures = [];
let slider;
let atualPicture;
let todasPictures;
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
function iniciar() {
	getSlider();
	atualPicture = 0;
	todasPictures = pictures.length - 1;
	slider = document.getElementById('picture');
	loadPicture(atualPicture);
	tempo = 2000;
	intervalo = setInterval(moverPicture, tempo);
}

function moverPicture() {
	atualPicture++;
	if (atualPicture > todasPictures) {
		atualPicture = 0;
	}
	loadPicture(atualPicture);
}

window.addEventListener('load', iniciar);
