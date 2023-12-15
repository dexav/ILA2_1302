const vsButtons = document.querySelector('.vs-button');
const twoPlayerButton = document.getElementById('2Players');
const vsCompButton = document.getElementById('vsComputer');
const twoPlayerSection = document.querySelector('.game-section-twoPlayers');
const vsCompSection = document.querySelector('.game-section-vsComputer');
const restartButton = document.getElementById('restart-button');

function twoPlayersGame(){
    twoPlayerSection.style.display = "flex";
    vsCompSection.remove();
    vsButtons.style.display ="none";
    restartButton.style.display ="flex";
}

twoPlayerButton.addEventListener('click', twoPlayersGame);

function vsCompGame(){
    vsCompSection.style.display="flex";
    twoPlayerSection.remove();
    vsButtons.style.display="none";
    restartButton.style.display="flex";

}
vsCompButton.addEventListener('click', vsCompGame);

let currentPlayer = 'X';
let board = [['','',''],['','',''],['','','']];
let gameOver = false;

function twoPMakeMove(row, col){
    if(!gameOver && board[row][col] === ''){
        board[row][col] = currentPlayer;
        document.querySelector(`.row:nth-child(${row + 1}) .cell:nth-child(${col + 1}`).textContent = currentPlayer;
        if (checkWin()) {
            document.getElementById('winnerText-2Players').textContent = `${currentPlayer} wins!`;
            gameOver = true;
        } else if (checkTie()) {
            document.getElementById('winnerText-2Players').textContent = "It's a tie!";
            gameOver = true;
        } else {
            currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
        }
    }
}
function vsComMakeMove(row, col) {
    if (!gameOver && board[row][col] === '') {
        board[row][col] = currentPlayer;
        document.querySelector(`.row:nth-child(${row + 1}) .cell:nth-child(${col + 1}`).textContent = currentPlayer;

        if (checkWin()) {
            document.getElementById('winnerText-vsComp').textContent = `${currentPlayer} wins!`;
            gameOver = true;
        } else if (checkTie()) {
            document.getElementById('winnerText-vsComp').textContent = "It's a tie!";
            gameOver = true;
        } else {
            currentPlayer = currentPlayer === 'X' ? 'O' : 'X';

            if (!gameOver && currentPlayer === 'O') {
                setTimeout(makeComputerMove, 500); 
            }
        }
    }
}

function makeComputerMove() {
    if (!gameOver) {
        let row, col;
        do {
            row = Math.floor(Math.random() * 3);
            col = Math.floor(Math.random() * 3);
        } while (board[row][col] !== '');
        
        vsComMakeMove(row, col);
    }
}

function checkWin() {
    for (let i = 0; i < 3; i++) {
        if (
            (board[i][0] === currentPlayer && board[i][1] === currentPlayer && board[i][2] === currentPlayer) ||
            (board[0][i] === currentPlayer && board[1][i] === currentPlayer && board[2][i] === currentPlayer)
        ) {
            return true;
        }
    }
    
    if (
        (board[0][0] === currentPlayer && board[1][1] === currentPlayer && board[2][2] === currentPlayer) ||
        (board[0][2] === currentPlayer && board[1][1] === currentPlayer && board[2][0] === currentPlayer)
    ) {
        return true;
    }
    
    return false;
}

function checkTie() {
    for (let row of board) {
        if (row.includes('')) {
            return false;
        }
    }
    return true;
}


function restartGame() {
    currentPlayer = 'X';
    board = [['', '', ''], ['', '', ''], ['', '', '']];
    gameOver = false;

    document.querySelectorAll('.cell').forEach(cell => {
        cell.textContent = '';
    });

    document.getElementById('winnerText-2Players').textContent = '';
    
    document.getElementById('winnerText-vsComp').textContent = '';


        
}
restartButton.addEventListener('click', restartGame);