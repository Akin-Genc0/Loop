// Select hamburger menu elements
const hamburgerContainer = document.querySelector(".hb");
const hamburgerOpenIcon = hamburgerContainer.querySelector(".hamburger");
const hamburgerCloseIcon = hamburgerContainer.querySelector(".hamburger1");
const navList = hamburgerContainer.querySelector("ul");

// Select general DOM elements
const mainContainer = document.querySelector(".main");
const nav = document.querySelector("nav");
const heroParagraph = document.querySelector("p");
const heroHeading = document.querySelector("h1");
const heroContent = document.querySelector(".hero-content");
const firstButton = document.querySelector("button");

// --- Light/Dark Mode Toggle (Feature in progress) ---

/*
// Select light/dark mode toggle icons
const themeToggle = document.querySelector(".sun");
const sunIcon = themeToggle.querySelector(".su");
const moonIcon = themeToggle.querySelector(".mo");

// Initial theme icon state
moonIcon.style.display = "none";

// Light mode to dark mode
sunIcon.addEventListener("click", function (e) {
  e.stopPropagation();
  moonIcon.style.display = "block";
  sunIcon.style.display = "none";

  document.body.style.backgroundColor = "#121212";
  mainContainer.style.background = 'linear-gradient(180deg, #232526 0%, #414345 100%)';

  heroParagraph.style.color = "#fff";
  heroHeading.style.color = "#fff";
  navList.style.color = "#fff";
  firstButton.style.color = "#fff";
  firstButton.style.borderColor = '#fff';
  nav.style.color = '#fff';
});

// Dark mode to light mode
moonIcon.addEventListener("click", function (e) {
  e.stopPropagation();
  moonIcon.style.display = "none";
  sunIcon.style.display = "block";

  document.body.style.backgroundColor = "";
  mainContainer.style.background = "";
  heroParagraph.style.color = "";
  heroHeading.style.color = "";
  firstButton.style.color = "";
  firstButton.style.borderColor = '';
});
*/

// Initial hamburger icon state
hamburgerCloseIcon.style.display = "none";

// --- Mobile Nav Styling ---
navList.style.backgroundColor = "white";
navList.style.position = "absolute";
navList.style.left = "70%";
navList.style.borderRadius = "0.3rem";
navList.style.opacity = "0.7";
navList.style.lineHeight = "3";
navList.style.padding = "1rem 1rem";

// --- Hamburger Nav Toggle ---

hamburgerOpenIcon.addEventListener("click", function (e) {
  e.stopPropagation();
  hamburgerOpenIcon.style.display = "none";
  hamburgerCloseIcon.style.display = "block";
  navList.style.display = navList.style.display === "block" ? "none" : "block";
});

hamburgerCloseIcon.addEventListener("click", function (e) {
  e.stopPropagation();
  hamburgerCloseIcon.style.display = "none";
  hamburgerOpenIcon.style.display = "block";
  navList.style.display = navList.style.display === "block" ? "none" : "block";
});

// Close nav on outside click
document.addEventListener("click", function () {
  navList.style.display = "none";
});

// Responsive behavior
window.addEventListener("resize", function () {
  if (window.innerWidth > 500) {
    navList.style.display = "none";
    hamburgerOpenIcon.style.display = "none";
    hamburgerCloseIcon.style.display = "none";
  } else {
    hamburgerOpenIcon.style.display = "block";
    hamburgerCloseIcon.style.display = "none";
  }
});
