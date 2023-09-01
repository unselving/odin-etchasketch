let y=16;
const gridContainer = document.getElementById('grid-container');
document.addEventListener("load", makeGrid());

function makeGrid(){
        for (let i=0;i<y;i++){
            const gridRow = document.createElement('div');
            gridRow.classList.add("grid-row","within-grid");
            gridContainer.appendChild(gridRow);
                for (let x=0;x<y;x++){
                    const gridCell = document.createElement('div');
                    gridCell.classList.add("grid-cell","within-grid");
                    gridRow.appendChild(gridCell);
                    gridCell.addEventListener('mouseover', ()=> {
                        gridCell.style.background='black';
                      });
                      };
                }          
        }

function clearGrid(){
    const withinGrid = document.querySelectorAll('.within-grid');

    withinGrid.forEach(cell=>{
        cell.remove();
    });
}

      
const regridButton = document.getElementById('regrid');
regridButton.addEventListener('click', () => {
    y = prompt("Enter the number of rows:");
    if (y < 101){
        clearGrid();
        makeGrid();
    } else {
        alert("Sorry, the number you've input is too large or invalid. Please try again.");
    }

    }
)