 const cells = document.querySelectorAll('.cell'); 
 const statusText = document.getElementById('status'); 
 const newGameBtn = document.getElementById('newGame'); 
 const friendModeBtn = document.getElementById('friendMode'); 
 const computerModeBtn = document.getElementById('computerMode');

let board = ['', '', '', '', '', '', '', '', '']; 
let currentPlayer = 'X'; 
let isGameActive = true; 
let vsComputer = false;

const winningConditions = [ 
    [0, 1, 2], [3, 4, 5], [6, 7, 8], [0, 3, 6], [1, 4, 7], [2, 5, 8], [0, 4, 8], [2, 4, 6] ];

friendModeBtn.addEventListener('click', () => { vsComputer = false; resetGame(); });

computerModeBtn.addEventListener('click', () => { vsComputer = true; resetGame(); });

cells.forEach(cell => { cell.addEventListener('click', () => { 
    if (!isGameActive || cell.textContent !== '') return; handleMove(cell); }); });

function handleMove(cell)
 { const index = cell.dataset.index; 
    board[index] = currentPlayer; 
    cell.textContent = currentPlayer; 
    checkWinner(); currentPlayer = 
    currentPlayer === 'X' ? 'O' : 'X'; 
    
if (vsComputer && currentPlayer === 'O' && isGameActive) { computerMove(); } }

function checkWinner() { 
    for (let condition of winningConditions) { 
        let [a, b, c] = condition; 
        if (board[a] && board[a] === board[b] && board[a] === board[c]) { isGameActive = false; statusText.textContent ='الفائز' ; '${board[a]}'; return; } }
        if (!board.includes('')) { isGameActive = false; statusText.textContent = 'تعادل!'; } }

function computerMove() { 
    let availableCells = board.map((val, idx) => val === '' ? idx : null).filter(val => val !== null); 
    let randomIndex = availableCells[Math.floor(Math.random() * availableCells.length)];
       board[randomIndex] = 'O'; 
       cells[randomIndex].textContent = 'O'; 
       checkWinner(); currentPlayer = 'X'; }

function resetGame() { board = ['', '', '', '', '', '', '', '', '']; 
    isGameActive = true; 
    currentPlayer = 'X'; 
    statusText.textContent = ''; 
    cells.forEach(cell => cell.textContent = ''); }

newGameBtn.addEventListener('click', resetGame);