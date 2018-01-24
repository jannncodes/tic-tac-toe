import Board from '../src/board.js';
const htmlBoard = new Board();
htmlBoard.buildBoard();

const gameBoard = document.getElementById('board');

htmlBoard.grid.forEach(row => {
  row.forEach(() => {
    const htmlBoardCell = document.createElement('div');
    htmlBoardCell.className = 'cell';
    gameBoard.appendChild(htmlBoardCell);
  });
});

