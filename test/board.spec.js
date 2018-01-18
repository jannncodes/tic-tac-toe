const expect = require('chai').expect;
const Board = require('../src/board.js');
const Cell = require('../src/cell.js');

describe('the board', () => {
  const testBoard = new Board();
  testBoard.buildBoard();

  it('is a 3 x 3 grid', () => {
    expect(testBoard.grid.length).to.eq(3);
    expect(testBoard.grid[0].length).to.eq(3);
  });

  it('has cells that record a symbol in each grid spot', () => {
    testBoard.grid.forEach(row => {
      row.forEach(gridSpot => {
        expect(gridSpot).to.be.an.instanceOf(Cell);
      });
    });
  });

});
