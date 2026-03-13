<script>

// Escape Button
const button = document.getElementById("escapeButton");

button.addEventListener("mouseover", () => {

  const maxX = window.innerWidth - button.offsetWidth;
  const maxY = window.innerHeight - button.offsetHeight;

  const randomX = Math.random() * maxX;
  const randomY = Math.random() * maxY;

  button.style.left = randomX + "px";
  button.style.top = randomY + "px";

});
</script>
