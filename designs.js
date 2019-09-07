// let
let grid = document.getElementById("pixel_canvas");
let height = document.getElementById("input_height");
let width = document.getElementById("input_width");
let sizePicker = document.getElementById("sizePicker");
let color = document.getElementById("colorPicker");

color.addEventListener("click", function(){});

sizePicker.onsubmit = function(event){
    event.preventDefault();
    clearGrid();
    makeGrid();
};

//make grid
function makeGrid() {
    for (let n = 0; n < height.value; ++n){
        const row = grid.insertRow(n);
        for (let m = 0; m <width.value; ++m){
            const cell = row.insertCell(m);
            cell.addEventListener("click", fillSquare);
        }
    }
}

//clear grid
function clearGrid(){
    while (grid.firstChild){
         grid.removeChild(grid.firstChild);
    }
}
// color function
function fillSquare () {
    this.setAttribute("style", `background-color: ${color.value}`);
}





