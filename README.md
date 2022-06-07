# Overview
Objective is to create a web-browser version of something between a sketchpad and an Etch-A-Sketch using Javascript DOM manipulation and CSS grid. This is my third project using Javascript.

## Demo

[👉Live demo](https://bravoosonja.github.io/etchasketch)

![demo](etchasketchdemo.gif)

## Features
* **1 Color Mode** allows to sketch on mouse over with a single default color
* **Random Mode** allows to sketch on mouse over with 5 colors chosen randomely
* **Shake** deletes the sketch and resets the grid to the selected grid size
* **Small Pixel** creates a grid of 32 X 32
* **Medium Pixel** creates a grid of 16 X 16
* **Large Pizel** creates a grid of 8 X 8

# Skills used
- HTML
- CSS
- Javascript
# Lessons learned
- At first, the small pixel grid would flow over the container, and the large pixel grid would leave empty spaces inside the container. This was caused due to adding a fixed size on ```grid-template-columns:``` and ```grid-template-rows:``` on CSS for the container. Once I removed those from the CSS and added ```container.style.gridTemplateColumns = `repeat(${size},1fr)`; container.style.gridTemplateRows = `repeat(${size},1fr)`;``` on Javascript, the grids functioned as I wanted.
- Initially, the chosen method of enabling sketching on mouseover was:
  ```javascript 
  const square = document.querySelector("div");
  square.addEventListener("mouseover", function (event) {
    event.target.classList.replace("grids", "color");
  });
  ```
  However, to create coherence in code for the **Random Mode** and **1 Color Mode**, and to utilize Javascript more for the project, global variable of ```currentMode```   had been declared. 
  # Future plans
  - [ ] Make pixels square instead of rectangle
  - [ ] Incorportate color picker on **1 Color Mode**
  - [ ] Add a slider to change the pixel size and enable flexibility for the grid sizes
