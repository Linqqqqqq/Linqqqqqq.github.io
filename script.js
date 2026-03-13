document.addEventListener("DOMContentLoaded", () => {

  // ---------- Runaway button ----------
  const button = document.getElementById("escapeButton");

  if (button) {
    button.addEventListener("mouseover", () => {
      const maxX = window.innerWidth - button.offsetWidth;
      const maxY = window.innerHeight - button.offsetHeight;

      const randomX = Math.random() * maxX;
      const randomY = Math.random() * maxY;

      button.style.position = "absolute";
      button.style.left = randomX + "px";
      button.style.top = randomY + "px";
    });
  }

  // ---------- Dark mode toggle ----------
  const darkModeToggle = document.getElementById("dark-mode-toggle");
  const body = document.body;

  // Apply saved mode from localStorage
  const savedMode = localStorage.getItem("darkMode");
  if (savedMode === "on") {
    body.classList.add("dark-mode");
  } else {
    body.classList.remove("dark-mode");
  }

  // Toggle dark mode on button click
  if (darkModeToggle) {
    darkModeToggle.addEventListener("click", () => {
      body.classList.toggle("dark-mode");

      // Save preference
      if (body.classList.contains("dark-mode")) {
        localStorage.setItem("darkMode", "on");
      } else {
        localStorage.setItem("darkMode", "off");
      }
    });
  }

});
