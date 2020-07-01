var pictures = [];
var slider;
var atualPicture;
var todasPictures;
var intervalo;
var tempo;

function preCaregamento() {
	var p = 1;
	for (var i = 0; i < 8; i++) {
		pictures[i] = new Image();
		pictures[i].src = 'img/' + p + '.jpg';
		p++;
	}
}

function caregarPicture(img) {
	slider.style.backgroundImage = "url('" + pictures[img].src + "')";
}

function iniciar() {
	preCaregamento();
	atualPicture = 0;
	todasPictures = pictures.length - 1;
	slider = document.getElementById('picture');
	caregarPicture(atualPicture);
	tempo = 2000;
	intervalo = setInterval(moverPicture, tempo);
}

function moverPicture() {
	atualPicture++;
	if (atualPicture > todasPictures) {
		atualPicture = 0;
	}
	caregarPicture(atualPicture);
}

window.addEventListener('load', iniciar);
