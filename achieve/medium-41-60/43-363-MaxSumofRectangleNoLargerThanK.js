'use strict';

// Given a non-empty 2D matrix matrix and an integer k, find the max sum of a rectangle in
// the matrix such that its sum is no larger than k.

// Example:
// Given matrix = [
//   [1,  0, 1],
//   [0, -2, 3]
// ]
// k = 2
// The answer is 2. Because the sum of rectangle [[0, 1], [-2, 3]] is 2 and 2 is the max
// number no larger than k (k = 2).

// Note:
// The rectangle inside the matrix must have an area > 0.
// What if the number of rows is much larger than the number of columns?

// Refer: https://discuss.leetcode.com/topic/48875/accepted-c-codes-with-explanation-and-references/2

function addToCurRow(matrix, curRow, colNum) {
  for (let i = 0; i < curRow.length; i++) {
    curRow[i] += matrix[i][colNum];
  }
}

function subArrayLessThanK(nums, k) {
  let curDiff = Number.POSITIVE_INFINITY;
  let curMax = Number.NEGATIVE_INFINITY;

  for (let i = 0; i < nums.length; i++) {
    let curSum = 0;
    for (let j = i; j < nums.length; j++) {
      curSum += nums[j];

      if (k >= curSum && Math.abs(k - curSum) < curDiff) {
        curDiff = Math.abs(k - curSum);
        curMax = curSum;
      }
    }
  }

  return curMax;
}

/**
 * @param {number[][]} matrix
 * @param {number} k
 * @return {number}
 */
var maxSumSubmatrix = function(matrix, k) {
  if (!Array.isArray(matrix) || matrix.length === 0 || !Array.isArray(matrix[0]) || matrix[0].length === 0) {
    return 0;
  }

  const row = matrix.length;
  const col = matrix[0].length;
  const curRow = new Array(row);
  let curMax = Number.NEGATIVE_INFINITY;

  for (let l = 0; l < col; l++) {
    curRow.fill(0);

    for (let r = l; r < col; r++) {
      // get cur row
      addToCurRow(matrix, curRow, r);

      // find cur best
      curMax = Math.max(subArrayLessThanK(curRow, k), curMax);
    }
  }

  return curMax;
};

// var matrix = [
//   [1, 0, 1],
//   [0, -2, 3]
// ];

var matrix = [
  [5, -4, -3, 4],
  [-3, -4, 4, 5],
  [5, 1, 5, -4]
];

console.log(maxSumSubmatrix(matrix, -2));
