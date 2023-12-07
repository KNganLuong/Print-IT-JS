const slides = [
  {
    image: 'slide1.jpg',
    tagLine: 'Impressions tous formats <span>en boutique et en ligne</span>',
  },
  {
    image: 'slide2.jpg',
    tagLine:
      'Tirages haute définition grand format <span>pour vos bureaux et events</span>',
  },
  {
    image: 'slide3.jpg',
    tagLine: 'Grand choix de couleurs <span>de CMJN aux pantones</span>',
  },
  {
    image: 'slide4.png',
    tagLine: 'Autocollants <span>avec découpe laser sur mesure</span>',
  },
]

// ajouter des bulles points au slider
let dotParent = document.getElementById('dots')

for (var i = 0; i < slides.length; i++) {
  let dotElement = document.createElement('div')

  dotElement.classList.add('dot')

  if (i === 0) {
    dotElement.classList.add('dot_selected')
  }

  dotParent.appendChild(dotElement)
}

// ajouter des event listeners sur les flèches

let imgPosition = 0
let currentImg = document.querySelector('.banner-img')
let tagLine = document.querySelector('p')

// flèche gauche
let arrowLeft = document.getElementById('arrow_left')

function changeImgLeft() {
  imgPosition = imgPosition - 1

  if (imgPosition < 0) {
    imgPosition = slides.length - 1
  }
  currentImg.src = './assets/images/slideshow/' + slides[imgPosition].image
  tagLine.innerHTML = slides[imgPosition].tagLine

  // modifier le slide au clic sur le bouton

  let dotSelected = document.querySelector('.dot_selected')
  dotSelected.classList.remove('dot_selected')

  let dot = document.querySelectorAll('.dot')[imgPosition]
  dot.classList.add('dot_selected')
}

arrowLeft.addEventListener('click', changeImgLeft)

// flèche droite

let arrowRight = document.getElementById('arrow_right')

function changeImgRight() {
  imgPosition = imgPosition + 1

  if (imgPosition > slides.length - 1) {
    imgPosition = 0
  }
  currentImg.src = './assets/images/slideshow/' + slides[imgPosition].image
  tagLine.innerHTML = slides[imgPosition].tagLine

  // modifier le slide au clic sur le bouton

  let dotSelected = document.querySelector('.dot_selected')
  dotSelected.classList.remove('dot_selected')

  let dot = document.querySelectorAll('.dot')[imgPosition]
  dot.classList.add('dot_selected')
}

arrowRight.addEventListener('click', changeImgRight)
