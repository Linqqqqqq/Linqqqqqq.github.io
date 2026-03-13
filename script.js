document.addEventListener("DOMContentLoaded", () => {

  // ---------- Runaway button ----------
const button = document.getElementById("escapeButton");

if (button) {
  // Get initial position
  const rect = button.getBoundingClientRect();
  const originalX = rect.left;
  const originalY = rect.top;

  button.addEventListener("mouseover", () => {
    // Maximum distance to move in any direction
    const moveDistance = 100; // pixels

    // Random offset within -moveDistance to +moveDistance
    const offsetX = (Math.random() * 2 - 1) * moveDistance;
    const offsetY = (Math.random() * 2 - 1) * moveDistance;

    // Set new position
    button.style.position = "absolute";
    button.style.left = originalX + offsetX + "px";
    button.style.top = originalY + offsetY + "px";
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
