const hamb = document.querySelector(".hb");
const sv = hamb.querySelector(".hamburger");
const sv1 = hamb.querySelector(".hamburger1");

const li = hamb.querySelector("ul");
const heroc = document.querySelector(".hero-content");


sv1.style.display = "none";

//list styling
li.style.backgroundColor = "white";
li.style.position = "absolute";
li.style.left = "70%";
li.style.borderRadius = "0.3rem";
li.style.opacity= "0.7";
li.style.lineHeight = "3";
li.style.padding = "1rem 1rem";




sv.addEventListener("click", function(e) {
    sv.style.display = "none";
    sv1.style.display = "block";
    e.stopPropagation(); 
   li.style.display = li.style.display === "block" ? "none" : "block";
  });


  sv1.addEventListener("click", function(e) {
    sv1.style.display = "none";
    sv.style.display = "block";
    e.stopPropagation(); 
   li.style.display = li.style.display === "block" ? "none" : "block";
  });
  document.addEventListener("click", function () {
    li.style.display = "none";
    sv.style.display = "block";
    sv1.style.display = "none";
  });

  window.addEventListener("resize", function () {
    if (window.innerWidth > 500) {
      li.style.display = "none";
      sv.style.display = "none";
      sv1.style.display = "none";
    } else {
    
      sv.style.display = "block";
      sv1.style.display = "none";
    }
  });
  



 