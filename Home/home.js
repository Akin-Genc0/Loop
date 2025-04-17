let hamb = document.querySelector(".hb");
let li = hamb.querySelector("ul");

//list styling
li.style.backgroundColor = "white";
li.style.position = "absolute";
li.style.borderRadius = "0.3rem";
li.style.opacity= "0.7";;
li.style.lineHeight = "3";



hamb.addEventListener("click", function(e) {
    e.stopPropagation(); 
    li.style.display = li.style.display === "block" ? "none" : "block";

  });


  document.addEventListener("click", function () {
    li.style.display = "none";
  });

  window.addEventListener("resize", function () {
    if (window.innerWidth > 500) {
      li.style.display = "none";
    }
  });