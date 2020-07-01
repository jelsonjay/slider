'use strict';
const pictures = [];
let slider;
let firstPicture;
let maxPictures;
let time;
let timeChange;

// get all images
function getSlider() {
	let p = 1;
	for (let i = 0; i < 8; i++) {
		pictures[i] = new Image();
		pictures[i].src = 'img/' + p + '.jpg';
		p++;
	}
}

// load image
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
	timeChange = 2000;
	time = setInterval(changePicture, timeChange);
}

// change image
function changePicture() {
	firstPicture++;
	if (firstPicture > maxPictures) {
		firstPicture = 0;
	}
	loadPicture(firstPicture);
}

window.addEventListener('load', startSlider);
