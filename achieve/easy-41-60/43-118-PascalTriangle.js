// Given numRows, generate the first numRows of Pascal's triangle.

// For example, given numRows = 5,
// Return

// [
//      [1],
//     [1,1],
//    [1,2,1],
//   [1,3,3,1],
//  [1,4,6,4,1]
// ]

'use strict';
require('chai').should();

/**
 * @param {number} numRows
 * @return {number[][]}
 */
var generate = function(numRows) {
  var triangle = [];
  var i;
  var j;

  if (!Number.isInteger(numRows) || numRows < 1) {
    return [];
  }

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


describe('Test', function() {
  it('Should pass', function() {
    console.log(generate('not number'));
    console.log(generate(0));
    console.log(generate(1));
    console.log(generate(5));
  })
})
