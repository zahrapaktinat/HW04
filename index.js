const emailPattern = /^\S+@\S+\.\S+$/;
document.addEventListener("DOMContentLoaded", function () {
  const loginForm = document.querySelector("#login-form");
  if (loginForm) {
    loginForm.addEventListener("submit", function (event) {
      event.preventDefault();

      let valid = true;

      const emailInput = document.querySelector("#email");
      emailInput.classList.remove("is-error");
      const emailInputError = document.querySelector("#email-error");
      emailInputError.textContent = "";

      const password = document.querySelector("#password");
      password.classList.remove("is-error");
      const passwordError = document.querySelector("#password-error");
      passwordError.textContent = "";

      if (emailInput.value.trim() === "") {
        emailInput.classList.add("is-error");
        emailInputError.textContent = "This field is required.";
        valid = false;
      } else if (emailPattern.test(emailInput.value) === false) {
        emailInput.classList.add("is-error");
        emailInputError.textContent = "The email address is not valid.";
        valid = false;
      }

      if (password.value.trim() === "") {
        password.classList.add("is-error");
        passwordError.textContent = "This field is required.";
        valid = false;
      }

      if (valid) {
        loginForm.submit();
      }
    });
  }

  const registerForm = document.querySelector("#register-form");
  if (registerForm) {
    registerForm.addEventListener("submit", function (event) {
      event.preventDefault();
      let valid = true;

      const username = document.querySelector("#username");
      const usernameError = document.querySelector("#username-error");
      const email = document.querySelector("#email");
      const emailError = document.querySelector("#email-error");
      const password = document.querySelector("#password");
      const confirmPassword = document.querySelector("#confirm-password");
      const passwordError = document.querySelector("#password-error");

      username.classList.remove("is-error");
      email.classList.remove("is-error");
      password.classList.remove("is-error");
      confirmPassword.classList.remove("is-error");

      usernameError.textContent = "";
      emailError.textContent = "";
      passwordError.textContent = "";

      if (username.value.trim() === "") {
        username.classList.add("is-error");
        usernameError.textContent = "This field is required.";
        valid = false;
      }

      if (email.value.trim() === "") {
        email.classList.add("is-error");
        emailError.textContent = "This field is required.";
        valid = false;
      } else if (emailPattern.test(email.value) === false) {
        email.classList.add("is-error");
        emailError.textContent = "The email address is not valid.";
        valid = false;
      }

      if (password.value === "" || confirmPassword.value === "") {
        password.classList.add("is-error");
        confirmPassword.classList.add("is-error");

        passwordError.textContent = "This field is required.";
        valid = false;
      } else if (password.value !== confirmPassword.value) {
        password.classList.add("is-error");
        confirmPassword.classList.add("is-error");
        passwordError.textContent = "The passwords do not match.";

        valid = false;
      }

      if (valid) {
        registerForm.submit();
      }
    });
  }
});
