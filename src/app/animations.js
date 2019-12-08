export default class Animations {
  
  constructor() {
    this.sections = [
      document.querySelector('#home'),
      document.querySelector('#features'),
      document.querySelector('#about'),
      document.querySelector('#about-short'),
      document.querySelector('#testimonials'),
      document.querySelector('#catcher'),
      document.querySelector('#pricing'),
      document.querySelector('#contacts'),
      document.querySelector('#map')
    ];
    this.animation();
  }
  
  init() {
    this.sections.forEach((item) => {
      if (item.id === 'home') return;
      
      item.style.opacity = 0;
    });
    
    window.addEventListener('scroll', this.animation.bind(this));
  }
  
  animation() {
    const windowHeight = document.documentElement.clientHeight;
  
    this.sections.forEach((item) => {
      if (item.id === 'home') return;
    
      if (windowHeight > item.getBoundingClientRect().top) {
        item.classList.add('animated');
        item.classList.add('fadeInUpBig');
        item.classList.add('delay-0s');
      }
    });
  };
}