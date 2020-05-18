const navLinks = document.querySelectorAll(".nav-link");
const sections = document.querySelectorAll(".section");
const header = document.querySelector('.header');
const nav = document.querySelector('.nav');

// On nav click, scroll to correct section.
navLinks.forEach((navLink, index) =>
  navLink.addEventListener("click", (e) => {
    if (index !== navLinks.length - 1) {
      e.preventDefault();
      window.scrollTo({
        top: sections[index].getBoundingClientRect().top + window.scrollY - nav.clientHeight,
        left: 0,
        behavior: 'smooth'
      });
    }
  })
);

// On section-title click, scroll so that the section title is at the top of the screen.
sections.forEach((section, index) =>
  section
    .querySelector(".section-title-h1 span")
    .addEventListener("click", (e) => {
      e.preventDefault();
      window.scrollTo({
        top: sections[index].getBoundingClientRect().top + window.scrollY - nav.clientHeight,
        left: 0,
        behavior: 'smooth'
      });
    })
);

// Make the nav fixed on scroll.
window.addEventListener('scroll', () => {
  checkIfNavShouldBeFixed();
});

checkIfNavShouldBeFixed();

function checkIfNavShouldBeFixed() {
  if(window.scrollY >= 111) {
    header.style.cssText = `margin-bottom:${nav.clientHeight}px;`
    nav.classList.add('nav-fixed');
  } else {
    header.style.cssText = 'margin-bottom:0px;'
    nav.classList.remove('nav-fixed');
  }
}