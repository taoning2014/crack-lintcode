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

// =====
// Note:
// 1, don't name '1dto2d', don't begin function name with number

function oneDToTwoD(num, rowLength, colLength) {
  var row = Math.floor(num / colLength);
  var col = num % colLength;
  return {
    row: row,
    col: col
  };
}

/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
var searchMatrix = function(matrix, target) {
  var l;
  var r;
  var mid;
  var row;
  var col;

  if (!matrix || !matrix.length) {
    return -1;
  }

  l = 0;
  r = matrix.length * matrix[0].length - 1;

  while (l <= r) {
    mid = l + Math.floor((r - l) / 2);
    row = oneDToTwoD(mid, matrix.length, matrix[0].length).row;
    col = oneDToTwoD(mid, matrix.length, matrix[0].length).col;

    if (target < matrix[row][col]) {
      r = mid - 1;
    } else if (target > matrix[row][col]) {
      l = mid + 1;
    } else {
      return true;
    }
  }

  return false;
};
