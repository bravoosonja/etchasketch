const container = document.querySelector(".container");

//mode buttons
const shakeBtn = document.getElementById("shake-btn");

//creates grid
function createGrid() {
  for (let i = 0; i < 256; i++) {
    const div = document.createElement("div");
    div.classList.add("square");
    container.appendChild(div);
  }
}

//choose grid size
function selectGridSize() {
  const sizeBtns = document.querySelectorAll(".size-btns");
  sizeBtns.forEach((button) => {
    button.addEventListener("click", () => {
      resetStyle(sizeBtns);
      if (button.classList.contains("small")) {
        sizeBtns[0].classList.add("active");
        createGrid(16 * 16, "small");
      } else if (button.classList.contains("medium")) {
        sizeBtns[1].classList.add("active");
        createGrid(32 * 32, "medium");
      } else if (button.classList.contains("large")) {
        sizeBtns[2].classList.add("active");
        createGrid(48 * 48, "large");
      }
    });
  });
}

//sketches on mouse hover
function startSketch(mode) {
  const grids = document.querySelectorAll("#grids>div");
  grids.forEach((item) => {
    item.count = 0;
    item.addEventListener("mouseenter", (e) => {
      if (mode === "rainbow") {
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

//choose color
function selectColor() {
  const rainbowBtn = document.getElementById("rainbow-btn");
  rainbowBtn.addEventListener("click", () => {});
}

//resets grid - shake button event listener
function shake() {
  shakeBtn.addEventListener("click", function () {
    container.innerHTML = "";
    container.style.setProperty("grid-template-columns", `repeat(16,2fr)`);
    container.style.setProperty("grid-template-rows", `repeat(16, 2fr)`);
    createGrid();
  });
}
