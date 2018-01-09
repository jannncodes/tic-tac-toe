const Cell = class Cell {
  constructor() {
    this.symbol = '';
  }

  recordSymbol(symbol) {
    if (this.symbol === '') {
      this.symbol = symbol;
    } else {
      alert('that space is already taken!');
    }
  }
};

module.exports = Cell;
