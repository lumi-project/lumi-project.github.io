const navLinks = document.querySelectorAll(".nav-link");
const sections = document.querySelectorAll(".section");

navLinks.forEach((navLink, index) =>
  navLink.addEventListener("click", (e) => {
    if (index !== navLinks.length - 1) {
      e.preventDefault();
      sections[index].scrollIntoView(true);
    }
  })
);

sections.forEach((section, index) =>
  section
    .querySelector(".section-title-h1 span")
    .addEventListener("click", (e) => {
      e.preventDefault();
      sections[index].scrollIntoView(true);
    })
);
