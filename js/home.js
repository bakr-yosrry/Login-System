var user = JSON.parse(localStorage.getItem("loggedInUser"));

      document.getElementById("welcome").innerText =
  "Welcome, " + user.name + " 👋";


      document.getElementById("logoutBtn").addEventListener("click", function ()  {
        window.location.href = "index.html";
      });