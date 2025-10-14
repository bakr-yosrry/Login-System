
let emailInput = document.getElementById("loginEmail");
let passwordInput = document.getElementById("loginPassword");
let loginBtn = document.getElementById("loginBtn");
let msg = document.getElementById("msg");

let users = JSON.parse(localStorage.getItem("users")) || [];

loginBtn.addEventListener("click", function () {
  let email = emailInput.value.toLowerCase();
  let password = passwordInput.value;

  if (email === "" || password === "") {
    msg.innerText = "Please fill in all fields";
    return;
  }

  let foundUser = users.find(
    (u) => u.email === email && u.password === password
  );

  if (foundUser) {
    msg.style.color = "green";
    msg.innerText = "Login successful!";
    localStorage.setItem("loggedInUser", JSON.stringify(foundUser));

    setTimeout(() => {
      window.location.href = "home.html";
    }, 1000);
  } else {
    msg.style.color = "red";
    msg.innerText = "Invalid email or password!";
  }
});