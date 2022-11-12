// JS animations for open an account page
const formAccount = document.getElementById("form");
const ouvertureDiv = document.getElementById("ouverture-classique");
const ouvertureUnistraDiv = document.getElementById("ouverture-unistra");
const ouvertureBtn = document.getElementById("ouverture");
const submitAccount = document.getElementById("submit-btn");
const mailInput = document.getElementById("mail");
const nameInput = document.getElementById("nom");
let mailAdress = "";
let name = "";
console.log(mailInput);

const changeCssStyling = () => {
  ouvertureDiv.classList.toggle("animation-ouverture");
  ouvertureBtn.classList.toggle("add-margin");
  ouvertureUnistraDiv.classList.toggle("none");
  formAccount.classList.toggle("none");
};

console.log(ouvertureBtn);
ouvertureBtn.addEventListener("click", (e) => {
  changeCssStyling();
});

formAccount.addEventListener("submit", (e) => {
  e.preventDefault();
  alert(
    `M./Mme ${name} vous recevrez bientôt un mail de confirmation à l'adresse suivante : ${mailAdress}`
  );
  changeCssStyling();
});
mailInput.addEventListener("change", (e) => {
  mailAdress = e.target.value;
});
nameInput.addEventListener("change", (e) => {
  name = e.target.value;
});

// formAccount.addEventListener("submit", (e) => {
//   e.preventDefault();
// });
