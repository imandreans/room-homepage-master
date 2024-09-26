const menu = document.getElementById("hamburger");
const closeMenu = document.getElementById("close-menu");
const topbar = document.getElementById("topbar");

menu.addEventListener("click", () => {
  topbar.style.display = "flex";
});
closeMenu.addEventListener("click", () => {
  topbar.style.display = "none";
});

const navlinks = document.querySelectorAll(".navlink");
navlinks.forEach((link) => {
  link.addEventListener("click", (e) => {
    navlinks.forEach((l) => l.classList.remove("active"));
    e.target.classList.add("active");
  });
});

document.addEventListener("DOMContentLoaded", () => {
  let currentSlide = 0;
  let currentDescription = 0;
  const heroItems = document.querySelectorAll(".hero-item");
  const descs = document.querySelectorAll(".desc");
  const innerHero = document.getElementById("inner-hero");
  const innerDescription = document.getElementById("inner-description");

  function moveSlide(direction) {
    currentSlide =
      (currentSlide + direction + heroItems.length) % heroItems.length;
    currentDescription =
      (currentDescription + direction + descs.length) % descs.length;

    innerHero.style.transform = `translateX(-${currentSlide * 100}%)`;
    innerDescription.style.transform = `translateX(-${
      currentDescription * 100
    }%)`;
  }

  // Attach event listeners to buttons
  const prevButton = document.getElementById("prevButton");
  const nextButton = document.getElementById("nextButton");

  prevButton.addEventListener("click", () => moveSlide(-1));
  nextButton.addEventListener("click", () => moveSlide(1));
});
