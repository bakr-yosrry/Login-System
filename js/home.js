const user = JSON.parse(localStorage.getItem("loggedInUser"));

      if (!user) {
        window.location.href = "index.html"; 
      } else {
        document.getElementById("welcome").innerText =
          "Welcome, " + user.name + " 👋";
      }

      document.getElementById("logoutBtn").addEventListener("click", function ()  {
        localStorage.removeItem("loggedInUser");
        window.location.href = "index.html";
      });