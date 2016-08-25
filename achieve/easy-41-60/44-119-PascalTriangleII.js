// Given an index k, return the kth row of the Pascal's triangle.

// For example, given k = 3,
// Return [1,3,3,1].

// =====
// Note:
// 1, I copy question 118, didn't notice the difference of rowIndex and the former param 'numRows';
'use strict';
require('chai').should();

function generate(numRows) {
  var triangle = [];
  var i;
  var j;

  // BUG: remember to init the array
  for (i = 0; i < numRows; i++) {
    triangle[i] = [];
  }

  triangle[0] = [1];
  for (i = 1; i < numRows; i++) {
    for (j = 0; j < i + 1; j++) {
      if (j === 0) {
        triangle[i][j] = triangle[i - 1][j];
      } else if (j === i) {
        triangle[i][j] = triangle[i - 1][j - 1];
      } else {
        triangle[i][j] = triangle[i - 1][j - 1] + triangle[i - 1][j];
      }
    }
  }

  return triangle;
};
/**
 * @param {number} rowIndex
 * @return {number[]}
 */
var getRow = function(rowIndex) {
  if (!Number.isInteger(rowIndex) || rowIndex < 0) {
    return [];
  }
  return generate(rowIndex+1)[rowIndex];
};

describe('Test', function() {
  it('Should pass', function() {
    console.log(getRow('not number'));
    console.log(getRow(0));
    console.log(getRow(1));
    console.log(getRow(5));
  })
})
