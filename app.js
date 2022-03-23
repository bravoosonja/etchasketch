const container = document.querySelector(".container");
const userInput = document.getElementById("pixel-size");
const shakeBtn = document.getElementById("shake-btn");
const rainbowBtn = document.getElementById("rainbow-btn");

//create grid
function createGrid() {
  for (i = 0; i < 256; i++) {
    const div = document.createElement("div");
    div.classList.add("grids");
    container.appendChild(div);
  }
}

function updateGrid() {
  container.innerHTML = "";
  container.style.setProperty(
    "grid-template-columns",
    `repeat (${userInput.value},2fr)`
  );

  for (i = 0; i < userInput.value * userInput.value; i++) {
    const div = document.createElement("div");
    div.classList.add("grids");
    container.appendChild(div);
  }
  console.log(userInput.value);
}

const square = document.querySelector("div");
square.addEventListener("mouseover", function (event) {
  event.target.classList.replace("grids", "color");
});

userInput.addEventListener("change", updateGrid);

shakeBtn.addEventListener("click", function () {
  container.innerHTML = "";
  userInput.value = "";
  container.style.setProperty("grid-template-columns", `repeat(16,2fr)`);
  container.style.setProperty("grid-template-rows", `repeat(16,2fr)`);
  createGrid();
});

function sketchRainbow() {
  const rainbowColor = ["#ffbe0b", "#fb5607", "#ff006e", "#8338ec", "#3a86ff"];
  const randomColor = Math.floor(Math.random() * rainbowColor.length);
  const square = document.querySelector("div");
  square.addEventListener("mouseover", function (event) {
    console.log("rainbow mode");
    event.target.style.backgroundColor = rainbowColor[randomColor];
  });
}

createGrid();
