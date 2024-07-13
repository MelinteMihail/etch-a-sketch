let container = document.querySelector(".container");
container.style.width = `${50*16}px`;
for(let i = 0; i < 256; i++) {
    let div = document.createElement("div");
    div.classList.add("change");
    container.appendChild(div);

    div.addEventListener("mouseover", () => {
        div.style.backgroundColor = "blue";
    });
}

for(let i = 0; i < gridDimension * gridDimension; i++) {
    let div = document.createElement("div");
    div.classList.add("change");
    container.appendChild(div);

    div.addEventListener("mouseover", () => {
        div.style.backgroundColor = "blue";
    });
}
