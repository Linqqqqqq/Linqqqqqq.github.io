document.addEventListener("DOMContentLoaded", () => {
  // Dark mode toggle
  const darkModeToggle = document.getElementById("dark-mode-toggle");
  if (darkModeToggle) {
    darkModeToggle.addEventListener("click", () => {
      document.body.classList.toggle("dark-mode");
      if (document.body.classList.contains("dark-mode")) {
        localStorage.setItem("darkMode", "on");
      } else {
        localStorage.setItem("darkMode", "off");
      }
    });
  }

  // Runaway button
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
  }
});
