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
    const rect = button.getBoundingClientRect();
    const originalX = rect.left;
    const originalY = rect.top;
    const moveDistance = 100; // max pixels to move

    button.addEventListener("mouseover", () => {
      const offsetX = (Math.random() * 2 - 1) * moveDistance;
      const offsetY = (Math.random() * 2 - 1) * moveDistance;

      button.style.position = "absolute";
      button.style.left = originalX + offsetX + "px";
      button.style.top = originalY + offsetY + "px";
    });
  }
}); 
