//create
function createGrid(size) {
  for (i = 0; i < size * size; i++) {
    const container = document.querySelector(".container");
    const squares = document.createElement("div");
    squares.classList.add("grids");
    squares.style.setProperty("grid-template-columns", `repeat(${size},1fr)`);
    squares.style.setProperty("grid-template-rows", `repeat(${size},1fr)`);
    container.appendChild(squares);
  }
}

function choosePixel() {
  const largeBtn = document.getElementById("large-btn");

  const smallBtn = document.getElementById("small-btn");
  smallBtn.addEventListener("click", function () {
    const container = document.querySelector(".container");
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
    const container = document.querySelector(".container");
    container.innerHTML = "";
    createGrid(8);
  });
}

function sketch() {
  const square = document.querySelector("div");
  square.addEventListener("mouseover", function (event) {
    event.target.classList.replace("grids", "color");
  });
}

//erase and reset the grid to 16 * 16
function shake() {
  const shakeBtn = document.getElementById("shake-btn");
  shakeBtn.addEventListener("click", function () {
    const container = document.querySelector(".container");
    container.innerHTML = "";
    createGrid(16);
  });
}

// function sketchRainbow() {
//   const rainbowColor = ["#ffbe0b", "#fb5607", "#ff006e", "#8338ec", "#3a86ff"];
//   const randomColor = Math.floor(Math.random() * rainbowColor.length);
//   const square = document.querySelector("div");
//   square.addEventListener("mouseover", function (event) {
//     console.log("rainbow mode");
//     event.target.style.backgroundColor = rainbowColor[randomColor];
//   });
// }

createGrid(16);
sketch();
shake();
choosePixel();
