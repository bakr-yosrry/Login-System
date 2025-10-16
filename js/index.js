
var emailInput = document.getElementById("loginEmail");
var passwordInput = document.getElementById("loginPassword");
var loginBtn = document.getElementById("loginBtn");
var msg = document.getElementById("msg");

var users = JSON.parse(localStorage.getItem("users")) || [];

loginBtn.addEventListener("click", function () {
  var email = emailInput.value.toLowerCase();
  var password = passwordInput.value;

  if (email === "" || password === "") {
    msg.innerText = "Please fill in all fields";
    return;
  }

  var foundUser = users.find(
    (user) => user.email === email && user.password === password
  );

  if (foundUser) {
    msg.className = "bg-success text-white p-2 rounded mt-2 w-50 mx-auto";

    msg.textContent = "Login successful!";
    localStorage.setItem("loggedInUser", JSON.stringify(foundUser));

    setTimeout(() => {
      window.location.href = "home.html";
    }, 1000);
  } else {
    msg.className = "bg-danger text-white p-2 rounded mt-2 w-50 mx-auto";
    msg.textContent = "Invalid email or password!";
  }
});