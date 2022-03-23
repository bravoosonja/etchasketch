const container = document.querySelector(".container");
const userInput = document.getElementById("pixel-size");
const shakeBtn = document.getElementById("shake-btn");

//create grid
function createGrid() {
  for (i = 0; i < 256; i++) {
    const div = document.createElement("div");
    div.classList.add("color");
    container.appendChild(div);
  }
}
