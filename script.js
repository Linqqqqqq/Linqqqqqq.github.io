document.addEventListener("DOMContentLoaded", () => {
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
});
