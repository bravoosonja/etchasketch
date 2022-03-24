const container = document.querySelector(".container");
const defaultSize = 16;
let currentSize = defaultSize;

function setCurrentSize(newSize) {
  currentSize = newSize;
}

//create
function createGrid(size) {
  setCurrentSize(size);
  container.style.gridTemplateColumns = `repeat(${size},1fr)`;
  container.style.gridTemplateRows = `repeat(${size},1fr)`;

  for (i = 0; i < size * size; i++) {
    const squares = document.createElement("div");
    squares.classList.add("grids");
    container.appendChild(squares);
  }
}

function choosePixel() {
  const largeBtn = document.getElementById("large-btn");

  const smallBtn = document.getElementById("small-btn");
  smallBtn.addEventListener("click", function () {
    container.innerHTML = "";
    createGrid(32);
  });

  const mediumBtn = document.getElementById("medium-btn");
  mediumBtn.addEventListener("click", () => {
    const container = document.querySelector(".container");
    container.innerHTML = "";
    createGrid(16);
  });

  largeBtn.addEventListener("click", () => {
    container.innerHTML = "";
    createGrid(8);
  });
}

//erase sketch
function shake() {
  const shakeBtn = document.getElementById("shake-btn");
  shakeBtn.addEventListener("click", function () {
    container.innerHTML = "";
    createGrid(currentSize);
  });
}

function sketch() {
  const square = document.querySelector("div");
  square.addEventListener("mouseover", function (event) {
    event.target.classList.replace("grids", "color");
  });
}

function sketchRainbow() {
  const currentGrid = document.querySelector("div");
  const randomColor = Math.floor(Math.random() * rainbowColor.length);
  const rainbowBtn = document.getElementById("rainbow-btn");
  const rainbowColor = ["#ffbe0b", "#fb5607", "#ff006e", "#8338ec", "#3a86ff"];

  rainbowBtn.addEventListener(
    "click",
    currentGrid.addEventListener("mouseover", (currentGrid) => {
      currentGrid.style.backgroundColor = rainbowColor[randomColor];
    })
  );
}

createGrid(defaultSize);
sketch();
shake();
choosePixel();
sketchRainbow();
