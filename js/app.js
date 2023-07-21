const container = document.getElementById("container");
const gridSize = 16;

function createGrid(size) {
  for (let i = 0; i < size * size; i++) {
    const cell = document.createElement("div");
    cell.classList.add("cell");
    container.appendChild(cell);
  }
}


createGrid(gridSize);

function clearGrid() {
  const cells = document.querySelectorAll(".cell");
  cells.forEach((cell) => (cell.style.backgroundColor = "#fff"));
}

function getRandomColor() {
  const letters = "0123456789ABCDEF";
  let color = "#";
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}

