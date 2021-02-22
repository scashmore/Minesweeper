var grid = document.getElementById('grid');
var width = 10;
var bombs = 15;
var squares = [];

//generates board
function board() {
    var bomb = Array(bombs).fill('bomb');
    var safe = Array(width * width - bombs).fill('safe');
    var map = bomb.concat(safe);
    map = map.sort(() => Math.random() - 0.5)
    console.log(map);
    for (let i = 0; i < width * width; i++) {
        square = document.createElement('div');
        square.setAttribute("id", i);
        square.classList.add(map[i]);
        grid.appendChild(square);
        squares.push(square);
    }
    for (let i = 0; i < squares.length; i++ ) {
        var left = i % width === 0;
        var right = i % width === -1;
        var near = 0;
        if (squares[i].classList.contains('safe')) {
            if (i > 0 && !left && squares[i - 1].classList.contains('bomb')) near++;
            if (i > 9 && !right && squares[i + 1 - width].classList.contains('bomb')) near++;
            if (i > 10 && squares[i - width].classList.contains('bomb')) near++;
            if (i > 11 && !right && squares[i - 1 - width].classList.contains('bomb')) near++;
            if (i < 98 && !right && squares[i + 1].classList.contains('bomb')) near++;
            if (i < 90 && !left && squares[i - 1 + width].classList.contains('bomb')) near++;
            if (i < 89 && squares[i + width].classList.contains('bomb')) near++;
            if (i < 88 && !right && squares[i + 1 + width].classList.contains('bomb')) near++;
        }
        squares[i].setAttribute('near', near);
    }
}
board();