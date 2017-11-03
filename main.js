


function makeGrid(px) {
  let pxSize = 400 / px;
  const container = document.getElementById('container');
    for(i = 0; i < px; i++) {
      const row = document.createElement('div');
      row.className = "row";
      for(j = 1; j <= px; j++) {
        const cell = document.createElement('div');
        cell.className = "cell";
        cell.style.minWidth = `${pxSize}px`;
        cell.style.minHeight = `${pxSize}px`;
        container.appendChild(cell);
        row.appendChild(cell);
    }
    container.appendChild(row);
  }
}


function fillCells() {
  let cellFill = document.querySelectorAll(".cell");
  cellFill.forEach(function(e){
    e.onmouseover = function() {
      e.style.background = "#00ffe0";
    }
  });
}
let fillCellsGo = fillCells();

function getRandomHSL() {
  let hslNum = [];
  let min = 0;
  let max = 360;
  hslNum.push(Math.floor(Math.random() * (max - min + 1)) + min);

  return hslNum;
}


function rainbowMode() {
  let cellFill = document.querySelectorAll(".cell");
  cellFill.forEach(function(e){
    let hsl = getRandomHSL();
    e.onmouseover = function() {
      e.style.background = `hsl(${hsl[0]}, 100% , 50%)`;
    }
  });
}

function grayTrip() {
  let cellFill = document.querySelectorAll(".cell");
  cellFill.forEach(function(e){
    let darker = 90;
    e.onmouseover = function() {
      e.style.background = `hsl( 0, 0% , ${darker -= 10}%)`;
    }
  });
}

// Replace cells with initial color
function refreshGrid() {
  let cellFill = document.querySelectorAll(".cell");
  cellFill.forEach(function(e){
      e.style.background = "initial";
  });
  fillCells();
}

// Create a new grid
function gridNew() {
  px = prompt("Enter a pixel size.");
  let cellFill = document.querySelectorAll(".cell");
  cellFill.forEach(function(e){
      e.parentNode.remove();
  });
  makeGrid(px);
  fillCells();
}


makeGrid(16);
fillCells();
