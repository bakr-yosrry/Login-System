var users = JSON.parse(localStorage.getItem("users")) || [];
var btn = document.getElementById("signupBtn");
var msg = document.getElementById("msg");

btn.addEventListener("click", function () {
  var name = document.getElementById("signupName").value;
  var email = document.getElementById("signupEmail").value;
  var password = document.getElementById("signupPassword").value;

  var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  var passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{6,}$/;

  if (!emailRegex.test(email)) {
    msg.style.color = "red";
    msg.innerText = "Invalid email format!";
    return;
  }

  if (!passwordRegex.test(password)) {
    msg.style.color = "red";
    msg.innerText =
      "Password must be at least 6 characters and include letters and numbers.";
    return;
  }

  var exists = users.find((user) => user.email === email);
  if (exists) {
    msg.innerText = "Email already exists!";
    return;
  }

  users.push({ name, email, password });
  localStorage.setItem("users", JSON.stringify(users));

  msg.className = "bg-success text-white p-2 rounded mt-2 w-50 mx-auto";
  msg.innerText = "Account created successfully!";

  setTimeout(() => (window.location.href = "index.html"), 1000);
});
