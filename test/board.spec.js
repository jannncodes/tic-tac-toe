const expect = require('chai').expect;
const Board = require('../src/board.js');
const cells = [{}, {}, {}, {}, {}, {}, {}, {}, {}];

describe('the board', () => {
  it('is a 3 x 3 grid', () => {
    const testBoard = new Board(cells);
    expect(testBoard.length).to.eq(3);
    expect(testBoard[0].length).to.eq(3);
  });
});
