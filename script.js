let container = document.querySelector(".container");
let btn = document.querySelector(".sizeBtn");

for(let i = 0; i < 256; i++) {
    let div = document.createElement("div");
    div.classList.add("change");
    div.style.width = `${600/16}px`;
    div.style.aspectRatio = "1";
    container.appendChild(div);

    div.addEventListener("mouseover", () => {
        div.style.backgroundColor = "blue";
    });
}

btn.addEventListener("click", () => {
    let gridDimension = prompt("Specify the grid size (i.e 24 means 24x24)");
    container.textContent = "";

    for(let i = 0; i < gridDimension * gridDimension; i++) {
        let div = document.createElement("div");
        div.classList.add("change");
        div.style.width = `${600/gridDimension}px`;
        div.style.aspectRatio = "1";
        container.appendChild(div);

        div.addEventListener("mouseover", () => {
            div.style.backgroundColor = "blue";
        });
    }
});




/* for(let i = 0; i < gridDimension * gridDimension; i++) {
    let div = document.createElement("div");
    div.classList.add("change");
    container.appendChild(div);

    div.addEventListener("mouseover", () => {
        div.style.backgroundColor = "blue";
    });
} */