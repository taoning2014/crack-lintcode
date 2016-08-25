'use strict';

/**
 * @constructor
 * @param {number[][]} matrix
 */
var NumMatrix = function(matrix) {
  if(!Array.isArray(matrix) || matrix.length === 0
    || !Array.isArray(matrix[0]) || matrix[0].length === 0) {
    matrix = [[]];
  }

  const m = matrix.length;
  const n = matrix[0].length;

  this.subArrays = [];
  for (let i = 0; i < m; i++) {
    let curSum = 0;
    this.subArrays[i] = [];
    for (let j = 0; j < n; j++) {
      curSum += matrix[i][j];
      this.subArrays[i][j] = curSum;
    }
  }

};

/**
 * @param {number} row1
 * @param {number} col1
 * @param {number} row2
 * @param {number} col2
 * @return {number}
 */
NumMatrix.prototype.sumRegion = function(row1, col1, row2, col2) {
  if (!Number.isInteger(row1) || !Number.isInteger(col1)
    || !Number.isInteger(row2) || !Number.isInteger(col2)
    || row1 < 0 || row2 < row1 || col1 < 0 || col2 < col1) {
    return 0;
  }

  // TODO: consider row1 === row2
  let curSum = 0;
  for (let i = row1; i <= row2; i++) {
    const sum1 = this.subArrays[i][col2];
    const sum2 = (col1 === 0 ? 0 : this.subArrays[i][col1 - 1]);
    curSum = curSum + sum1 - sum2;
  }

  return curSum;
};


// Your NumMatrix object will be instantiated and called as such:
var matrix = [
  [3, 0, 1, 4, 2],
  [5, 6, 3, 2, 1],
  [1, 2, 0, 1, 5],
  [4, 1, 0, 1, 7],
  [1, 0, 3, 0, 5]
]
var numMatrix = new NumMatrix(matrix);
console.log(numMatrix.sumRegion(0, 0, 0, 0));
console.log(numMatrix.sumRegion(1, 2, 3, 4));

