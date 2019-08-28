/* eslint-env browser */

// -------------------
// UI ELEMENTS
// -------------------
const navbar = {
  hamburger: document.querySelector('.hamburger'),
  navLinks: document.querySelector('.nav-links'),
  links: document.querySelectorAll('.nav-links li'),

  toggleNav() {
    this.navLinks.classList.toggle('open');
  },
};


// -------------------
// EVENT LISTENERS
// -------------------
navbar.hamburger.addEventListener('click', handleHamburgerClick);


// -------------------
// EVENT LISTENER FUNCTIONS
// -------------------
function handleHamburgerClick() {
  navbar.toggleNav();
}
