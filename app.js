const hamburger = document.querySelector(".hamburger");
const cross = document.querySelector(".cross");
const menu = document.querySelector(".nav-bar");

// OPEN
hamburger.addEventListener("click", () => {
    menu.classList.replace("nav-bar", "nav-bar--on");
    hamburger.classList.toggle("hamburger--off");
    cross.classList.replace("cross", "cross--on")
})

// CLOSE 

cross.addEventListener("click", () => {
    menu.classList.replace("nav-bar--on", "nav-bar");
    hamburger.classList.toggle("hamburger--off");
    cross.classList.replace("cross--on", "cross")
})