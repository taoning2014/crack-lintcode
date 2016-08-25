'use strict';

// refer: https://discuss.leetcode.com/topic/30250/15ms-easy-to-understand-java-solution

/**
 * @constructor
 * @param {number[][]} matrix
 */
var NumMatrix = function(matrix) {
  if (!Array.isArray(matrix) || matrix.length === 0) {
    matrix = [[]];
  }

  this.matrix = matrix;
  this.curSums = [];
  this.rowNum = matrix.length;
  this.colNum = matrix[0].length;

  // init
  for (let i = 0; i < this.rowNum; i++) {
    this.curSums[i] = [];
  }

  for (let j = 0; j < this.colNum; j++) {
    let curSum = 0;
    for (let i = 0; i < this.rowNum; i++) {
      curSum += matrix[i][j];
      this.curSums[i][j] = curSum;
    }
  }
};

/**
 * @param {number} row
 * @param {number} col
 * @param {number} val
 * @return {void}
 */
NumMatrix.prototype.update = function(row, col, val) {
  let curSum = (row === 0 ? 0 : this.curSums[row - 1][col]);
  this.matrix[row][col] = val;

  for (let i = row; i < this.rowNum; i++) {
    curSum += this.matrix[i][col];
    this.curSums[i][col] = curSum;
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
  let sum = 0;
  for (let j = col1; j <= col2; j++) {
    sum += this.curSums[row2][j];

    if (row1 > 0) {
      sum -= this.curSums[row1 - 1][j];
    }
  }

  return sum;
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

console.log(numMatrix.sumRegion(1, 1, 1, 1));
console.log(numMatrix.update(3, 2, 2));
console.log(numMatrix.sumRegion(2, 1, 4, 3));

