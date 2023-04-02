var loginButton = document.querySelector(".login-button");
var errorDiv = document.getElementById("error");
var usernameField = document.getElementById("username");
var passwordField = document.getElementById("password");

loginButton.addEventListener("click", function() {
  if (usernameField.value == "" && passwordField.value == "") {
    errorDiv.innerHTML = "Please enter username and password.";
    console.log("Login error.");
  } else if (usernameField.value == "") {
    errorDiv.innerHTML = "Please enter username.";
    console.log("Login error.");
  } else if (passwordField.value == "") {
    errorDiv.innerHTML = "Please enter your password.";
    console.log("Login error.");
  } else{
    window.location.href = "../index1.html";
  }
});
