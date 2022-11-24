// Responsive javascript part

const menuResp = document.querySelector("#menu-responsive");
const body = document.querySelector("body");

menuResp.addEventListener("click", () => {
  body.classList.toggle("open");
});
