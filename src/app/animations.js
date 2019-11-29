/*const features = document.querySelector('.features');
const aboutLong = document.querySelector('.about-long');
const aboutShort = document.querySelector('.about-short');
const testimonials = document.querySelector('.testimonials');
const catcher = document.querySelector('.catcher');
const pricings = document.querySelector('.pricings');
const contacts = document.querySelector('.contacts');
const location = document.querySelector('.map');

const sections = [
  features,
  aboutLong,
  aboutShort,
  testimonials,
  catcher,
  pricings,
  contacts,
  location
];

sections.forEach((item) => {
  item.style.opacity = 0;
});

//window.addEventListener('scroll', scrollSec);

function scrollSec(event) {
  const windowHeight = document.documentElement.clientHeight;
  
  sections.forEach((item) => {
    if (windowHeight - 100 > item.getBoundingClientRect().top) {
      item.classList.add('animated');
      item.classList.add('fadeInUpBig');
    }
  });
}*/

export default class Animations {
  
  constructor() {
    this.features = document.querySelector('.features');
    this.aboutLong = document.querySelector('.about-long');
    this.aboutShort = document.querySelector('.about-short');
    this.testimonials = document.querySelector('.testimonials');
    this.catcher = document.querySelector('.catcher');
    this.pricings = document.querySelector('.pricings');
    this.contacts = document.querySelector('.contacts');
    this.location = document.querySelector('.map');
  
    this.sections = [
      this.features,
      this.aboutLong,
      this.aboutShort,
      this.testimonials,
      this.catcher,
      this.pricings,
      this.contacts,
      this.location
    ];
  
    this.sections.forEach((item) => {
      item.style.opacity = 0;
    });
  }
  
  init() {
    window.addEventListener('scroll', () => {
      const windowHeight = document.documentElement.clientHeight;
  
      this.sections.forEach((item) => {
        if (windowHeight > item.getBoundingClientRect().top) {
          item.classList.add('animated');
          item.classList.add('fadeInUpBig');
          item.classList.add('delay-0s');
        }
      });
    });
  }
}