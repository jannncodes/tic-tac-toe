const Cell = require('./cell.js');

const Board = class Board {
  constructor() {
    this.grid = [];
  }

  buildBoard() {
    for (let i = 0; i < 3; i++) {
      this.grid.push([]);
      for (let j = 0; j < 3; j++) {
        const cell = new Cell();
        this.grid[i].push(cell);
      }
    }
  }
};

module.exports = Board;
