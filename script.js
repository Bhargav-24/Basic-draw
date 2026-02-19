const grid = document.querySelector(".grid");
for(let i=0; i<100*100; i++) {
    const cell = document.createElement("div");
    cell.classList.add("cell");
    grid.appendChild(cell);
}
let drag = false;
document.querySelectorAll(".cell").forEach(cell => {
    cell.addEventListener("mouseenter", function() {
        if(drag) {
            cell.classList.add("active");
        }
        
    });
    cell.addEventListener("click", function() {
        drag = !drag;
    });
});
function clear() {
    document.querySelectorAll(".cell").forEach(cell => {
        cell.classList.remove("active");
    });
}