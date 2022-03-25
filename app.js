//default values
const container = document.querySelector(".container");
const defaultSize = 16;
const defaultMode = "color";

//current values set to default
let currentSize = defaultSize;
let currentMode = defaultMode;

//buttons
const smallBtn = document.getElementById("small-btn");
const mediumBtn = document.getElementById("medium-btn");
const largeBtn = document.getElementById("large-btn");
const shakeBtn = document.getElementById("shake-btn");
const colorBtn = document.getElementById("color-btn");
const rainbowBtn = document.getElementById("rainbow-btn");

//event listeners for the buttons
rainbowBtn.onclick = () => setCurrentMode("rainbow");
colorBtn.onclick = () => setCurrentMode("color");
shakeBtn.onclick = () => shake();
smallBtn.onclick = () => chooseSize("small");
mediumBtn.onclick = () => chooseSize("medium");
largeBtn.onclick = () => chooseSize("large");

//helper functions
function setCurrentMode(newMode) {
  currentMode = newMode;
}

function setCurrentSize(newSize) {
  currentSize = newSize;
}

//main functions
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

function chooseSize(currentSize) {
  if (currentSize === "small") {
    container.innerHTML = "";
    createGrid(32);
  }

  if (currentSize === "medium") {
    container.innerHTML = "";
    createGrid(16);
  }

  if (currentSize === "large") {
    container.innerHTML = "";
    createGrid(8);
  }
}

//erase sketch
function shake() {
  container.innerHTML = "";
  createGrid(currentSize);
}

function sketch(e) {
  const currentGrid = document.querySelector("div");

  currentGrid.addEventListener("mouseover", (e) => {
    if (currentMode === "color") {
      e.target.style.backgroundColor = "#d1b3c4";
    } else if (currentMode === "rainbow") {
      const rainbowColor = [
        "#ff70a6",
        "#70d6ff",
        "#ff9770",
        "#ffd670",
        "#e9ff70",
      ];
      const randomColor = Math.floor(Math.random() * rainbowColor.length);
      e.target.style.backgroundColor = rainbowColor[randomColor];
    }
  });
}

createGrid(defaultSize);
sketch();
setCurrentMode(defaultMode);
