const fieldName = document.querySelector(".name");
const fieldLastName = document.querySelector(".lastName");
const fieldEmail = document.querySelector(".email");
const fieldPassword = document.querySelector(".password");
const buttonSignUp = document.querySelector(".button");
const length = 255;

buttonSignUp.addEventListener("click", signUp);

function nameValidator() {
  fieldName.addEventListener("input", () => {
    document.querySelector("#error1").innerHTML = "";
  });
  if (fieldName.value.length > length || fieldName.value.trim().length === 0) {
    document.querySelector("#error1").innerHTML = "Неверный формат";
    return false;
  }
  return true;
}

function lastNameValidator() {
  fieldLastName.addEventListener("input", () => {
    document.querySelector("#error2").innerHTML = "";
  });
  if (
    fieldLastName.value.length > length ||
    fieldLastName.value.trim().length === 0
  ) {
    document.querySelector("#error2").innerHTML = "Неверный формат";
    return false;
  }
  return true;
}

function emailValidator() {
  fieldEmail.addEventListener("input", () => {
    document.querySelector("#error3").innerHTML = "";
  });
  const email = document.querySelector(".email").value;
  const regx =
    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  if (!regx.test(email)) {
    document.querySelector("#error3").innerHTML = "Неверный формат";
    return false;
  }
  return true;
}

function passwordValidator() {
  fieldPassword.addEventListener("input", () => {
    document.querySelector("#error4").innerHTML = "";
  });
  if (fieldPassword.value.length < 8 || fieldPassword.value.length > length) {
    document.querySelector("#error4").innerHTML = "Неверный формат";
    return false;
  }
  return true;
}

function signUp() {
  nameValidator();
  lastNameValidator();
  emailValidator();
  passwordValidator();
  if (
    nameValidator() &&
    lastNameValidator() &&
    emailValidator() &&
    passwordValidator()
  ) {
    window.location.href = "link.html";
  }
}
