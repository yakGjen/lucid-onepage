export default class ScrollMenu {
  constructor() {
    const burger = document.querySelector('#burger');
    const navigation = document.querySelector('.navigation');
    const navigationList = document.querySelector('.navigation__list');
    const navigationItem = document.querySelectorAll('.navigation__item');
    
    navigationList.addEventListener('click', (event) => {
      const toSection = event.target.innerText.toLowerCase();
  
      if (document.documentElement.getBoundingClientRect().width <= 450) {
        burger.dispatchEvent(new Event('click'));
        setTimeout(() => {
          ScrollMenu.scroll(toSection);
        }, 300);
        return;
      }
  
      ScrollMenu.scroll(toSection);
    });
  
    burger.addEventListener('click', () => {
      navigation.classList.toggle('navigation_show');
      navigationList.classList.toggle('navigation__list_show');
    
      navigationItem.forEach((item) => {
        item.classList.toggle('navigation__item_show');
      })
    });
  }
  
  static scroll(toElem) {
    window.scrollTo({
      top: document.querySelector(`#${toElem}`).getBoundingClientRect().top + pageYOffset,
      behavior: "smooth",
    });
  }
}