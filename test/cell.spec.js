const expect = require('chai').expect;
const Cell = require('../src/cell.js');

describe('a cell', () => {
  const testCell = new Cell();
  it('is an object', () => {
    expect(testCell).to.be.an('object');
  });

  it('is initialized with an empty string for current symbol', () => {
    expect(testCell.symbol).to.eq('');
  });

  it('has a method to change the symbol from empty string to character', () => {
    testCell.recordSymbol('X');
    expect(testCell.symbol).to.eq('X');
  });

  it('cannot be overriden with a new symbol choice', () => {
    testCell.recordSymbol('O');
    expect(testCell.symbol).to.eq('X');
  });
});
