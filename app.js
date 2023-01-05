const container = document.querySelector('#container');

let gridSquares = 20;

container.style = `height: ${gridSquares * 10}px; width: ${gridSquares * 10}px;`

for(let i = 0; i < gridSquares * gridSquares; i++){
    let newSquare = document.createElement('div');
    newSquare.classList.add('square');
    newSquare.addEventListener('mouseover', e => {
        e.target.classList.add('painted');
    });
    container.appendChild(newSquare);
    console.log(i)
};