// Responsive javascript part

//The issue there is that when you click on a nav link that links an element of the same page, it doesn't toggle "open" class
const navLink = document.querySelector("#nav-link");
const menuResp = document.querySelector("#menu-responsive");
const body = document.querySelector("body");
console.log(navLink);
menuResp.addEventListener("click", () => {
  body.classList.toggle("open");
});

// So we need to toggle the click too when we click on it
navLink.addEventListener("click", () => {
  body.classList.toggle("open");
});
