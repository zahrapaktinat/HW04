document.addEventListener("DOMContentLoaded", function() {
    const loginForm = document.querySelector(".login-form");
    if (loginForm) {
      loginForm.addEventListener("submit", function(event) {
        event.preventDefault();
        const username = document.querySelector("#username");
        const password = document.querySelector("#password");
        if (username.value.trim() === "" || password.value.trim() === "") {
          alert("Both fields are required.");
        } else {
          loginForm.submit();
        }
      });
    }

    const registerForm = document.querySelector(".register-form");
    if (registerForm) {
      registerForm.addEventListener("submit", function(event) {
        event.preventDefault();
        const username = document.querySelector("#username");
        const email = document.querySelector("#email");
        const password = document.querySelector("#password");
        const confirmPassword = document.querySelector("#confirm-password");

        if (username.value.trim() === "" || email.value.trim() === "" || password.value.trim() === "" || confirmPassword.value.trim() === "") {
          alert("All fields are required.");
        } else if (password.value !== confirmPassword.value) {
          alert("Passwords do not match.");
        } else {
          registerForm.submit();
        }
      });
    }
  });
