let container = document.querySelector(".container");
let btn = document.querySelector(".sizeBtn");

for(let i = 0; i < 256; i++) {
    const color = randomRGB();

    let div = document.createElement("div");
    div.classList.add("change");
    div.style.width = `${600/16}px`;
    div.style.aspectRatio = "1";
    container.appendChild(div);

    div.addEventListener("mouseover", () => {
        div.style.backgroundColor = color;
    });
}

btn.addEventListener("click", () => {
    let gridDimension = getValidNumber();
    container.textContent = "";

    for(let i = 0; i < gridDimension * gridDimension; i++) {
        const color = randomRGB();
        
        let div = document.createElement("div");
        div.classList.add("change");
        div.style.width = `${600/gridDimension}px`;
        div.style.aspectRatio = "1";
        container.appendChild(div);

        div.addEventListener("mouseover", () => {
            div.style.backgroundColor = color;
        });
    }
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