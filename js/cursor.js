const cursor = document.getElementById("cursor");

document.addEventListener("mousemove", (e) => {
  cursor.style.transform = `translate(${e.clientX}px, ${e.clientY}px)`;
});

document.addEventListener("mousedown", () => {
  cursor.classList.add("cursor-clicked");
});

document.addEventListener("mouseup", () => {
  cursor.classList.remove("cursor-clicked");
});