let users = JSON.parse(localStorage.getItem("users")) || [];
let btn = document.getElementById("signupBtn");
let msg = document.getElementById("msg");

btn.addEventListener("click", () => {
  let name = document.getElementById("signupName").value.trim();
  let email = document.getElementById("signupEmail").value.trim().toLowerCase();
  let password = document.getElementById("signupPassword").value.trim();

  let emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  let passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{6,}$/;

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

  let exists = users.find((u) => u.email === email);
  if (exists) {
    msg.innerText = "Email already exists!";
    return;
  }

  users.push({ name, email, password });
  localStorage.setItem("users", JSON.stringify(users));

  msg.style.color = "green";
  msg.innerText = "Account created successfully!";

  setTimeout(() => (window.location.href = "index.html"), 1000);
});
