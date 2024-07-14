let container = document.querySelector(".container");
let btn = document.querySelector(".sizeBtn");
let gridDimension = 16;


function createGrid(gridDimension) {
    container.textContent = "";
    
    for(let i = 0; i < gridDimension; i++) {
        for(let j = 0; j < gridDimension; j++) {
            createCells(gridDimension);
        }
    }
}
function createCells(gridDimension) {
    const color = randomRGB();       
    let div = document.createElement("div");

    div.classList.add("change");
    div.style.flex = `1 0 ${100 / gridDimension}%`;
    div.style.aspectRatio = "1";
    container.appendChild(div);

    div.addEventListener("mouseover", () => {
       div.style.backgroundColor = color;
    });
}


createGrid(gridDimension);

btn.addEventListener("click", () => {
    let gridDimension = getValidNumber();
    
    createGrid(gridDimension);
});

function randomColorCode() {
    return Math.floor(Math.random() * 256);
}

function randomRGB() {
    return `rgb(${randomColorCode()},${randomColorCode()},${randomColorCode()})`;
}
function getValidNumber() {
    let number;
    do {
        number = Number(prompt("Specify the grid size (maximum is 100!)"))
    }while(number > 100 || number < 1 || isNaN(number));

    return number;
}




