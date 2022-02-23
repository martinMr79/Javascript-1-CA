const form = document.querySelector("#contactForm");
const nameInput = document.querySelector("#name");
const nameError = document.querySelector("#nameError");
const subject = document.querySelector("#subject");
const subjectError = document.querySelector("#subjectError");
const email = document.querySelector("#email");
const emailError = document.querySelector("#emailError");
const adress = document.querySelector("#adress");
const adressError = document.querySelector("#adressError");
const validForm = document.querySelector(".validForm");

function validateForm(event) {
  event.preventDefault();

  if (nameInput.value.trim().length > 0) {
    nameError.style.display = "none";
  } else {
    nameError.style.display = "block";
  }

  if (subject.value.trim().length > 9) {
    subjectError.style.display = "none";
  } else {
    subjectError.style.display = "block";
  }

  if (validateEmail(email.value) === true && email.value.trim().length > 0) {
    emailError.style.display = "none";
  } else {
    emailError.style.display = "block";
  }

  if (adress.value.trim().length > 24) {
    adressError.style.display = "none";
  } else {
    adressError.style.display = "block";
  }
}

function validateEmail(email) {
  const regEx = /^([a-zA-Z0-9._%-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6})*$/;
  const matchPattern = regEx.test(email);
  return matchPattern;
}

form.addEventListener("submit", validateForm);
