import Map from './map';
import Animations from './animations';

const map = new Map();
map.init();

const animations = new Animations();
animations.init();



const pricingsCards = document.querySelector('.pricings__cards');

const paintPriceField = (elem) => {
  if (elem.classList.contains('card__price')) {
    elem.classList.add('paint-card-price');
    elem.querySelector('.card__period').classList.add('paint-card-price');
  } else {
    paintPriceField(elem.previousElementSibling);
  }
};

const unPaintPriceField = (elem) => {
  if (elem.classList.contains('card__price')) {
    elem.classList.remove('paint-card-price');
    elem.querySelector('.card__period').classList.remove('paint-card-price');
  } else {
    unPaintPriceField(elem.previousElementSibling);
  }
};

pricingsCards.addEventListener('mouseover', (event) => {
  if (event.target.classList.contains('card__button')) {
    paintPriceField(event.target);
  }
});

pricingsCards.addEventListener('mouseout', (event) => {
  if (event.target.classList.contains('card__button')) {
    unPaintPriceField(event.target);
  }
});


