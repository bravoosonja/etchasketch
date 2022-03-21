const sizeBtns = document.querySelectorAll(".size");
const modeBtns = document.querySelectorAll(".mode");
let defaultMode = "";

function generateGrid(size = 16 * 16, cssClass = "small-grid") {
  const canvas = document.getElementById("grids");
  canvas.innerHTML = "";
  canvas.classList.add(cssClass);

  for (leti = 0; i < size; i += 1) {
    const div = document.createElement("div");
    canvas.appendChild(div);
  }
}

function startSketch(mode) {
  const grids = document.querySelectorAll("#grids>div");
  grids.forEach((item) => {
    item.count = 0;
    item.addEventListener("mouseenter", (e) => {
      if (mode === defaultMode || mode === "" || currentMode === "") {
        e.target.style.backgroundColor = "#B6E2D3";
        e.target.style.opacity = 1;
      } else if (mode === "rainbow" || currentMode === "rainbow") {
        const rainbowPalette = [
          "#ffbe0b",
          "#fb5607",
          "#ff006e",
          "#8338ec",
          "#3a86ff",
        ];
        const randomColor = Math.floor(Math.random() * rainbowPalette.length);
        e.target.style.opacity = 1;
        e.target.style.backgroundColor = rainbowPalette[randomColor];
      }
    });
  });
}

function shake() {
  const grids = document.querySelectorAll("#grids>div");
  grids.forEach((item) => {
    item.style.backgroundColor = "#B9B7BD";
    item.style.opacity = "1";
  });
}

function shakeListener() {
  const shakeBtn = document.querySelector("#shake-btn");
  shakeBtn.addEventListener("click", shake);
}

function changeSize() {
  const small = 16 * 16;
  const medium = 32 * 32;
  const large = 48 * 48;
}

function start() {
  generateGrid();
  startSketch("rainbow");
}

start();
