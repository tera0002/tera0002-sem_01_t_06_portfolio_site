console.log("main.js connected");

const burger = document.querySelector(".burger");
const nav = document.querySelector("nav");

burger.addEventListener("click", burgerClick);

function burgerClick() {
  burger.classList.toggle("active");
  nav.classList.toggle("active");
}
//  lav console.log("Loadet afledningsmanøvre...");
// og const for alle sites
