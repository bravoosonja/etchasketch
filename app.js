const container = document.querySelector(".container");
const userInput = document.getElementById("pixel-size");
const shakeBtn = document.getElementById("shake-btn");

//create grid
function createGrid() {
  for (i = 0; i < 28; i++) {
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

createGrid();
