// Select hamburger menu elements
const hamburgerContainer = document.querySelector(".hb");
const hamburgerOpenIcon = hamburgerContainer.querySelector(".hamburger");
const hamburgerCloseIcon = hamburgerContainer.querySelector(".hamburger1");
const navList = hamburgerContainer.querySelector("ul");
const logo = document.querySelector(".icon");
const heroContent = document.querySelector(".hero-content");

// Select light/dark mode toggle icons
const themeToggle = document.querySelector(".sun");
const sunIcon = themeToggle.querySelector(".su");
const moonIcon = themeToggle.querySelector(".mo");
const logod =  logo.querySelector(".darkic");
const logol =  logo.querySelector(".ligthic");

//Initial states
logod.style.display = "none";
sunIcon.style.cursor = "pointer"
moonIcon.style.cursor = "pointer"
hamburgerCloseIcon.style.display = "none";


// Mobile Nav Styling
navList.style.backgroundColor = "white";
navList.style.position = "absolute";
navList.style.left = "70%";
navList.style.borderRadius = "0.3rem";
navList.style.opacity = "0.7";
navList.style.lineHeight = "3";
navList.style.padding = "1rem 1rem";

// Hamburger Nav Toggle 
hamburgerOpenIcon.addEventListener("click", function (e) {
  e.stopPropagation();
  hamburgerOpenIcon.style.display = "none";
  hamburgerCloseIcon.style.display = "block";
  navList.style.display = navList.style.display === "block" ? "none" : "block";
});

//Close toggal
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
    logo.style.display = "block";
  } else {
    hamburgerOpenIcon.style.display = "block";
    hamburgerCloseIcon.style.display = "none";
    logo.style.display = "none";
  }
});


//hide them for now
moonIcon.style.display = "none";
hamburgerCloseIcon.style.display = "none";



// Apply saved theme on page load
if (localStorage.getItem("theme") === "dark-mode") {
    document.body.classList.add("dark-mode");
    moonIcon.style.display = "block";
    sunIcon.style.display = "none";
    logod.style.display = "block";
    logol.style.display = "none";
    navList.style.backgroundColor = "#414345";
  }
  
  // Light mode to dark mode
  sunIcon.addEventListener("click", function (e) {
    e.stopPropagation();
    moonIcon.style.display = "block";
    sunIcon.style.display = "none";
    logod.style.display = "block";
    logol.style.display = "none";
    navList.style.backgroundColor = "#414345";
    document.body.classList.add("dark-mode");
    localStorage.setItem("theme", "dark-mode");
  });
  
  // Dark mode to light mode
  moonIcon.addEventListener("click", function (e) {
    e.stopPropagation();
    moonIcon.style.display = "none";
    sunIcon.style.display = "block";
    logod.style.display = "none";
    logol.style.display = "block";
    navList.style.backgroundColor = "";
    document.body.classList.remove("dark-mode");
    localStorage.removeItem("theme");
  });
  