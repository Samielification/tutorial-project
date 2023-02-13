const swiper = new Swiper('.swiper', {
  // Optional parameters
  direction: 'horizontal',
  loop: true,

  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },

  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

  // And if we need scrollbar
  scrollbar: {
    el: '.swiper-scrollbar',
  },
});

let tabsBtn = document.querySelectorAll('.how__step-btn');
let tabsItem = document.querySelectorAll('.how__rolblock');

tabsBtn.forEach(function(element){
  element.addEventListener('click', function(e){
    const path = e.currentTarget.dataset.path;

    tabsBtn.forEach(function(btn){ btn.classList.remove('how__step-btn--active')});
    e.currentTarget.classList.add('how__step-btn--active');

    tabsItem.forEach(function(element){ element.classList.remove('how__rolblock--active')});
    document.querySelector(`[data-target="${path}"]`).classList.add('how__rolblock--active');
  });
});

new Accordion('.accordion-container');

let burger = document.querySelector('.burger');
let menu = document.querySelector('.header__nav');
let menuLinks = menu.querySelectorAll('.nav__link');

burger.addEventListener('click',

  function () {

    burger.classList.toggle('burger--active');

    menu.classList.toggle('header__nav--active');

    document.body.classList.toggle('stop-scroll');
  })

menuLinks.forEach(function (el) {
  el.addEventListener('click', function () {

    burger.classList.remove('burger--active');

    menu.classList.remove('header__nav--active');

    document.body.classList.remove('stop-scroll');

  })
})

let search__open = document.querySelector('.header__search');
let search__closed = document.querySelector('.header__closed-search');
let search__wind = document.querySelector('.header__search-form');

search__open.addEventListener('click',
  function () {
    search__wind.classList.add('header__search-form--active')
    search__closed.classList.add('header__closed-search--active')
  }
)

search__closed.addEventListener('click',
function () {
    search__wind.classList.toggle('header__search-form--active')
    search__closed.classList.toggle('header__closed-search--active')
  }
)
