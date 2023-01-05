const container = document.querySelector('#container');
const button = document.querySelector('#button');

let gridSquares = 16;

container.style = `height: ${gridSquares * 10}px; width: ${gridSquares * 10}px;`

const buildGrid = (gridSquares) => {
    for(let i = 0; i < gridSquares * gridSquares; i++){
        let newSquare = document.createElement('div');
        newSquare.classList.add('square');
        newSquare.addEventListener('mouseover', e => {
            e.target.classList.add('painted');
        });
        container.appendChild(newSquare);
    };
}

buildGrid(gridSquares);

button.addEventListener('click', () => {
    container.innerHTML = '';
    let selectedSquares = prompt('How many squares is the heigth and width?');

    buildGrid(selectedSquares);
    container.style = `height: ${selectedSquares * 10}px; width: ${selectedSquares * 10}px;`
})