'use strict';

// ========================================================================
// Time:   13min
// Submit: 1
// ========================================================================

// Given an integer n, generate a square matrix filled with elements from 1 to n * n in spiral order.

// For example,
// Given n = 3,

// You should return the following matrix:
// [
//  [ 1, 2, 3 ],
//  [ 8, 9, 4 ],
//  [ 7, 6, 5 ]
// ]

function helper(matrix, start, curLen, offSet) {
  for (let i = 0; i < curLen; i++, start++) {
    matrix[offSet][offSet + i] = start;
    matrix[offSet + i][offSet + curLen] = curLen * 1 + start;
    matrix[offSet + curLen][offSet + curLen - i] = curLen * 2 + start;
    matrix[offSet + curLen - i][offSet] = curLen * 3 + start;
  }

  return curLen * 3 + start;
}

/**
 * @param {number} n
 * @return {number[][]}
 */
var generateMatrix = function(n) {
  if (!Number.isInteger(n) || n < 1) {
    return [];
  }

  const matrix = new Array(n);
  for (let i = 0; i < n; i++) {
    matrix[i] = new Array(n);
    matrix[i].fill(n * n)
  }

  for(let start = 1, curLen = n - 1, offSet = 0; curLen > 0; curLen -= 2, offSet++) {
    start = helper(matrix, start, curLen, offSet)
  }

  return matrix;
};


console.log(generateMatrix(1));
console.log(generateMatrix(2));
console.log(generateMatrix(3));
console.log(generateMatrix(4));
