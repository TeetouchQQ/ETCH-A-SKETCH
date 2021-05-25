


function createGrid(x){
    const container = document.querySelector("#container");
    for(let row = 0;row<x;row++){
        let div = document.createElement("div");
        for(let col=0;col<x;col++){
            let grid = document.createElement("div");
            grid.className = 'grid-item';
            grid.id = 'grid-item';

            grid.addEventListener(
                "mouseover", function () {   
            this.style.background 
                = color[Math.floor(Math.random() * color.length)];
            })
            div.append(grid);
        }
        container.append(div);

    }

}


var color = [, "#3C9EE7", "#E7993C", 
"#E73C99", "#3CE746", "#E7993C"];
createGrid(2)
function Grid() {  
    const myNode = document.getElementById("container");
    while (myNode.lastElementChild) {
      myNode.removeChild(myNode.lastElementChild);
    }
    
    var a = prompt("Insert Grid Size"); 
    createGrid(a);

    

    }  



