const container = document.getElementById("container");
const gridSize = 16;

function createGrid(size) {
  for (let i = 0; i < size * size; i++) {
    const cell = document.createElement("div");
    cell.classList.add("cell");
    container.appendChild(cell);
  }
}
