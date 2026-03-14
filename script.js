document.addEventListener("DOMContentLoaded", () => {
  const darkModeToggle = document.getElementById("dark-mode-toggle");

  // -------------------- Apply saved dark mode --------------------
  if (localStorage.getItem("darkMode") === "on") {
    document.body.classList.add("dark-mode");
    if (darkModeToggle) darkModeToggle.textContent = "🔆"; // sun icon for dark mode
  } else if (darkModeToggle) {
    darkModeToggle.textContent = "🌙"; // moon icon for light mode
  }

  // -------------------- Dark mode toggle --------------------
  if (darkModeToggle) {
    darkModeToggle.addEventListener("click", () => {
      document.body.classList.toggle("dark-mode");

      if (document.body.classList.contains("dark-mode")) {
        localStorage.setItem("darkMode", "on");
        darkModeToggle.textContent = "🔆"; // sun icon
      } else {
        localStorage.setItem("darkMode", "off");
        darkModeToggle.textContent = "🌙"; // moon icon
      }
    });
  }

  // -------------------- Runaway button --------------------
  const button = document.getElementById("escapeButton");
  if (button) {
    const moveDistance = 100; // max pixels to move each hover

    button.addEventListener("mouseover", () => {
      // Get current position
      const currentX = button.offsetLeft;
      const currentY = button.offsetTop;

      // Random offset within moveDistance
      const offsetX = (Math.random() * 2 - 1) * moveDistance;
      const offsetY = (Math.random() * 2 - 1) * moveDistance;

      button.style.position = "absolute";
      button.style.left = currentX + offsetX + "px";
      button.style.top = currentY + offsetY + "px";
    });
    // Refresh page if they actually manage to click it
    button.addEventListener("click", () => {
      location.reload();
    });
  }
});
