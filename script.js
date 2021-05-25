
const container = document.querySelector("#container");

function createGrid(x){
    for(let row = 0;row<x;row++){
        let div = document.createElement("div");
        for(let col=0;col<x;col++){
            let grid = document.createElement("div");
            grid.className = 'grid-item';
            grid.innerText = x;
            div.append(grid);
        }
        container.append(div);

    }

}
createGrid(5);
