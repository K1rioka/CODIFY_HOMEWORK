//!1
document.addEventListener('keydown', function(event) {
    const body = document.body;

    switch (event.key) {
        case 'R':
            body.style.backgroundColor = 'red';
            break;
        case 'G':
            body.style.backgroundColor = 'green';
            break;
        case 'B':
            body.style.backgroundColor = 'blue';
            break;
        case 'W':
            body.style.backgroundColor = 'white';
            break;
        case 'Shift':
            break;
        default:
            break;
    }
});

document.addEventListener('keyup', function(event) {
    const body = document.body;

    if (event.key === 'Shift') {
        if (event.shiftKey) {
            body.style.backgroundColor = 'black';
        } else {
            body.style.backgroundColor = 'gray';
        }
    }
});

//!2
let i = 0;

document.getElementById('myButton').addEventListener('click', function() {
    console.log(i);
    i *= 2;
});

//!3
const myImage = document.getElementById('myImage');
const hideButton = document.getElementById('hideButton');

hideButton.addEventListener('click', function() {
    myImage.style.opacity = '0';
});

//!4
const inputText = document.querySelector('.input-text');
const outputText = document.querySelector('.output-text');

inputText.addEventListener('input', function() {
    outputText.textContent = inputText.value;
});

//!5
const myDiv = document.getElementById('myDiv');

myDiv.addEventListener('click', function(event) {
    const boundingRect = myDiv.getBoundingClientRect();
    const xPosition = event.clientX - boundingRect.left;
    const yPosition = event.clientY - boundingRect.top;

    console.log(`Clicked at position: (${xPosition}, ${yPosition}) relative to the div.`);
});

//!6
const colorInput = document.getElementById('colorInput');
const body = document.body;

colorInput.addEventListener('input', function() {
    body.style.backgroundColor = colorInput.value;
});

//!Гонка
document.getElementById('startButton').addEventListener('click', startRace);

function startRace() {
    const car1 = document.getElementById('car1');
    const car2 = document.getElementById('car2');

    car1.style.left = '0';
    car2.style.left = '0';

    const duration1 = Math.random() * 2000 + 2000;
    const duration2 = Math.random() * 2000 + 2000;

    car1.style.transition = `left ${duration1}ms linear`;
    car2.style.transition = `left ${duration2}ms linear`;

    requestAnimationFrame(() => {
        car1.style.left = 'calc(100% - 50px)';
        car2.style.left = 'calc(100% - 50px)';
    });

    setTimeout(() => declareWinner('Машина 1'), duration1);
    setTimeout(() => declareWinner('Машина 2'), duration2);
}

function declareWinner(winner) {
    const modal = document.getElementById('modal');
    const winnerText = document.getElementById('winnerText');

    winnerText.textContent = `${winner} победитель`;
    modal.style.display = 'block';
}

function closeModal() {
    const modal = document.getElementById('modal');
    modal.style.display = 'none';
}

//! Крестики Нолики
const board = document.getElementById('board');
const cells = document.querySelectorAll('.cell');
let currentPlayer = 'X';
let gameBoard = ['', '', '', '', '', '', '', '', ''];
let gameActive = true;

function makeMove(index) {
    if (gameBoard[index] === '' && gameActive) {
        gameBoard[index] = currentPlayer;
        cells[index].textContent = currentPlayer;

        if (checkWinner()) {
            alert(`${currentPlayer} побеждают!`);
            resetGame();
        } else if (isBoardFull()) {
            alert('Ничья');
            resetGame();
        } else {
            currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
        }
    }
}

function checkWinner() {
    const winningCombinations = [
        [0, 1, 2], [3, 4, 5], [6, 7, 8],
        [0, 3, 6], [1, 4, 7], [2, 5, 8],
        [0, 4, 8], [2, 4, 6]
    ];

    for (const combination of winningCombinations) {
        const [a, b, c] = combination;
        if (gameBoard[a] && gameBoard[a] === gameBoard[b] && gameBoard[a] === gameBoard[c]) {
            gameActive = false;
            return true;
        }
    }

    return false;
}

function isBoardFull() {
    return gameBoard.every(cell => cell !== '');
}

function resetGame() {
    gameBoard = ['', '', '', '', '', '', '', '', ''];
    gameActive = true;
    currentPlayer = 'X';
    cells.forEach(cell => cell.textContent = '');
}

