const button = document.querySelector("#pwd-button");
const password1 = document.querySelector("#pwd1");
const password2 = document.querySelector("#pwd2");
const allRequirements = document.querySelectorAll("p");
const main = document.querySelector("main");

const pwdEqual = document.querySelector("#passwords-equal");
const lowerCaseChar = document.querySelector("#has-lower-case-char");
const upperCaseChar = document.querySelector("#has-upper-case-char");
const hasNum = document.querySelector("#has-number");
const tenChar = document.querySelector("#ten-characters");

button.addEventListener("click", () => {
    if (password1.type && password2.type === "password") {
      password1.type = "text";
      password2.type = "text";
      button.innerText = "Hide Password";
    } else {
      password1.type = "password";
      password2.type = "password";
      button.innerText = "Show Password";
    }
  });

  const checkPasswordValidation = () => {
    if (password1.value === password2.value && password1.value !== "") {
      pwdEqual.classList.replace("invalid", "valid");
  
      if (password1.value.toUpperCase() !== password1.value) {
        lowerCaseChar.classList.replace("invalid", "valid");
      }
      if (password1.value.toLowerCase() !== password1.value) {
        upperCaseChar.classList.replace("invalid", "valid");
      }
      if (password1.value.match(/[0-9]/g)) {
        hasNum.classList.replace("invalid", "valid");
      }
      if (password1.value.length >= 10) {
        tenChar.classList.replace("invalid", "valid");
      }
    } else {
      allRequirements.forEach((el) => {
        el.classList.replace("valid", "invalid");
      });
    }
  }
  
  main.addEventListener("input", checkPasswordValidation);