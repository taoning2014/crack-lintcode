'use strict';

// Write an efficient algorithm that searches for a value in an m x n matrix.
// This matrix has the following properties:

// Integers in each row are sorted from left to right.
// The first integer of each row is greater than the last integer of the previous row.
// For example,

// Consider the following matrix:

// [
//   [1,   3,  5,  7],
//   [10, 11, 16, 20],
//   [23, 30, 34, 50]
// ]
// Given target = 3, return true.

function helper(matrix, m, n, mid) {
  const row = Math.floor(mid / n);
  const col = mid % n;

  return matrix[row][col];
}

/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
var searchMatrix = function(matrix, target) {
  if (!Array.isArray(matrix) || matrix.length === 0
    || !Array.isArray(matrix[0]) || matrix[0].length === 0
    || !Number.isInteger(target)) {
    false;
  }

  const m = matrix.length;
  const n = matrix[0].length;
  let l = 0;
  let r = (m - 1) * n + n - 1;

  while (l <= r) {
    const mid = l + Math.floor((r - l) / 2);
    const cmp = helper(matrix, m, n, mid);
    if (cmp < target) {
      l = mid + 1;
    } else if (cmp > target) {
      r = mid - 1;
    } else {
      return true;
    }
  }

  return false;
};


var matrix = [
  [1, 3, 5, 7],
  [10, 11, 16, 20],
  [23, 30, 34, 50]
]
console.log(searchMatrix(matrix, 16));
console.log(searchMatrix(matrix, 12));
