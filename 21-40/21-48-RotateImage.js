'use strict';
// You are given an n x n 2D matrix representing an image.

// Rotate the image by 90 degrees (clockwise).

// Follow up:
// Could you do this in-place?

function rotateOne(offset, curLen, matrix) {
  for (let i = 0; i < curLen; i++) {
    const temp = matrix[curLen - i + offset][offset];
    matrix[curLen - i + offset][offset] = matrix[curLen + offset][curLen - i + offset];
    matrix[curLen + offset][curLen - i + offset] = matrix[i + offset][curLen + offset];
    matrix[i + offset][curLen + offset] = matrix[offset][i + offset];
    matrix[offset][i + offset] = temp;
  }
}

/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
var rotate = function(matrix) {
  if (!Array.isArray(matrix) || !Array.isArray(matrix[0]) || matrix.length === 0 || matrix[0].length === 0) {
    return;
  }

  for (let offset = 0, curLen = matrix.length - 1; curLen > 0; curLen -= 2, offset++) {
    rotateOne(offset, curLen, matrix);
  }
};

var m1 = [[1,2],[3,4]];
var m2 = [[1,2,3], [4,5,6], [7,8,9]];
var m3 = [[1,2,3,4], [5,6,7,8],[9,10,11,12],[13,14,15,16]];
console.log(rotate(m1));
console.log(rotate(m2));
console.log(rotate(m3));
