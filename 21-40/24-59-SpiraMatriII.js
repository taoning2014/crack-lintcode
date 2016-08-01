'use strict';

// Given an integer n, generate a square matrix filled with elements from 1 to n2 in spiral order.

// For example,
// Given n = 3,

// You should return the following matrix:
// [
//  [ 1, 2, 3 ],
//  [ 8, 9, 4 ],
//  [ 7, 6, 5 ]
// ]

function fillOne(offset, len, result, start) {
  if (len === 0) {
    result[offset][offset] = start;
    return start + 1;
  }

  let i;
  let j;
  for (i = start, j = 0; j < len; i++, j++) {
    result[offset][offset + j] = i;
    result[offset + j][offset + len] = len + i;
    result[offset + len][len + offset - j] = len * 2 + i;
    result[len + offset - j][offset] = len * 3 + i;
  }

  return len * 3 + i;
}

/**
 * @param {number} n
 * @return {number[][]}
 */
var generateMatrix = function(n) {
  if (!Number.isInteger(n) || n < 1) {
    return [];
  }

  // init
  const result = new Array(n);
  for (let i = 0; i < n; i++) {
    result[i] = new Array(n);
  }

  for (let offset = 0, len = n - 1, start = 1; len >= 0; offset++, len -= 2) {
    start = fillOne(offset, len, result, start);
  }

  return result;
};

console.log(generateMatrix(1));
console.log(generateMatrix(2));
console.log(generateMatrix(3));
console.log(generateMatrix(4));
