const navBar = document.querySelector('.navbar');

//shrink the navigation bar upon scrolling
window.addEventListener('scroll', () => {
  //let currentScrollPos = window.pageYOffset;
  if (document.documentElement.scrollTop > 5 ) {
    navBar.classList.add('nav-scroll');
  } else {
    navBar.classList.remove('nav-scroll');
  }
})

window.addEventListener('resize', () => {
  if (window.innerWidth <= 800 ) {
    navBar.style.padding = '0.8rem 0';
  } else {
    navBar.style.padding = '';
  }
})

//hamburger menu for mobile view

const hamburger = document.querySelector('.navbar .fa-bars');
const close = document.querySelector('.navbar .fa-times');
const navLinks = document.querySelector('.nav-link');

hamburger.addEventListener('click', () => {
  navLinks.setAttribute('style', 'transition: all 0.5s ease; transform: translateX(0)');
  hamburger.style.display = 'none';
  close.style.display = 'block';
})

close.addEventListener('click', () => {
  navLinks.setAttribute('style', 'transition: all 0.5s ease; transform: translateX(500px)');
  close.style.display = 'none';
  hamburger.style.display = 'block';
})

//disable selected links

let links = document.querySelectorAll('.nav-link a');

links.forEach(item => item.addEventListener('click', () => {
  if (item.classList.contains('selected-link')) {
    event.preventDefault();
  }
}))

//scroll to top button
let scrollTop = document.querySelector('.scroll-top');

window.addEventListener('scroll', () => {
  //let currentScrollPos = window.pageYOffset;
  if (document.documentElement.scrollTop > 5 ) {
    scrollTop.style.display = 'block';
  } else {
    scrollTop.style.display = 'none';
  }
})

scrollTop.addEventListener('click', () => {
  document.documentElement.scrollTop = 0;
})
