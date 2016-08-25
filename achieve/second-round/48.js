'use strict';

// ========================================================================
// Time:   13min
// Submit: 1
// ========================================================================

// You are given an n x n 2D matrix representing an image.

// Rotate the image by 90 degrees (clockwise).

// Follow up:
// Could you do this in-place?

function helper(matrix, offset, curLen) {
  for (let i = 0; i < curLen; i++) {
    const temp = matrix[offset + curLen - i][offset];
    matrix[offset + curLen - i][offset] = matrix[offset + curLen][offset + curLen - i];
    matrix[offset + curLen][offset + curLen - i] = matrix[offset + i][offset + curLen];
    matrix[offset + i][offset + curLen] = matrix[offset][offset + i];
    matrix[offset][offset + i] = temp;
  }
}

/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
var rotate = function(matrix) {
  if (!Array.isArray(matrix) || matrix.length === 0
      || !Array.isArray(matrix[0]) || matrix[0].length === 0) {
    return;
  }

  const n = matrix.length;
  for (let offset = 0, curLen = n - 1; curLen > 0; offset++, curLen -= 2) {
    helper(matrix, offset, curLen);
  }
};
