
let defaultColor = '#000000';

function createGrid(cellsPerRow) {

    const gridContainer = document.getElementById('grid');
    gridContainer.textContent = '';

    let gridWidth = gridContainer.offsetWidth;
    let cellSize = `${gridWidth / cellsPerRow}px`;

    let gridCSS = `repeat(${cellsPerRow}, ${cellSize})`;
    gridContainer.style.gridTemplateColumns = gridCSS;
    gridContainer.style.gridTemplateRows = gridCSS;

    let gridCells = [];

    for (let i = 0; i < Math.pow(cellsPerRow, 2); i++) {
        gridCells[i] = document.createElement('div');
        gridCells[i].classList.add('gridItem');
        gridCells[i].addEventListener("mousemove", (e) => {
            e.target.style.backgroundColor = defaultColor;
        });

        gridContainer.appendChild(gridCells[i]);
    }
}

function resetGrid() {
    let numCells = prompt("How many squares per side should the grid have?");
    if (numCells > 100) {
        numCells = prompt("Grid may only have 100 squares or less per side");
        createGrid(numCells);
    } else {
        createGrid(numCells);
    }
}

createGrid(25);

const resetBtn = document.querySelector('#resetBtn');
resetBtn.addEventListener('click', resetGrid);