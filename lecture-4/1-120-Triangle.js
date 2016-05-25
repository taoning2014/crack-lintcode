// Given a triangle, find the minimum path sum from top to bottom.
// Each step you may move to adjacent numbers on the row below.

// For example, given the following triangle
// [
//      [2],
//     [3,4],
//    [6,5,7],
//   [4,1,8,3]
// ]
// The minimum path sum from top to bottom is 11 (i.e., 2 + 3 + 5 + 1 = 11).
'use strict';
require('chai').should();

// // Solution 1. DP with divide and couquer
// var record;

// function _minimumTotal(triangle, x, y) {
//   var left;
//   var right;

//   if (x === triangle.length) {
//     return 0;
//   }

//   if (record[x][y] !== Number.MAX_VALUE) {
//     return record[x][y];
//   }

//   left = _minimumTotal(triangle, x + 1, y);
//   right = _minimumTotal(triangle, x + 1, y + 1);

//   record[x][y] = Math.min(left, right) + triangle[x][y];

//   return record[x][y];
// }

// /**
//  * @param {number[][]} triangle
//  * @return {number}
//  */
// var minimumTotal = function(triangle) {
//   var i;
//   var j;

//   if (!triangle || !triangle.length) {
//     return 0;
//   }

//   record = [];

//   for (i = 0; i < triangle.length; i++) {
//     record[i] = [];
//     for (j = 0; j < triangle[i].length; j++) {
//       record[i][j] = Number.MAX_VALUE;
//     }
//   }
//   return _minimumTotal(triangle, 0, 0);
// };


// Solution 2: bottom up
// var minimumTotal = function(triangle) {
//   var i;
//   var j;
//   var record;

//   if (!triangle || !triangle.length) {
//     return 0;
//   }

//   record = [];

//   // Bug, can use fill, it will do a shallow copy of this empty array
//   // record.fill([]);
//   for (i = 0; i < triangle.length; i++) {
//     record[i] = [];
//   }

//   // fill last row
//   for (i = 0; i < triangle[triangle.length-1].length; i++) {
//     record[triangle.length-1][i] = triangle[triangle.length-1][i];
//   }

//   for (i = triangle.length-2; i >= 0; i--) {
//     for (j = 0; j < triangle[i].length; j++) {
//       record[i][j] = Math.min(record[i+1][j], record[i+1][j+1]) + triangle[i][j];
//     }
//   }

//   return record[0][0];
// };


// Solution 3: top down
var minimumTotal = function(triangle) {
  var i;
  var j;
  var record;

  if (!triangle || !triangle.length) {
    return 0;
  }

  record = [];

  // Bug, can use fill, it will do a shallow copy of this empty array
  // record.fill([]);
  for (i = 0; i < triangle.length; i++) {
    record[i] = [];
  }

  // fill first row
  record[0][0] = triangle[0][0];

  for (i = 1; i < triangle.length; i++) {
    for (j = 0; j < triangle[i].length; j++) {
      if (j === 0) {
        record[i][j] = record[i-1][j] + triangle[i][j];
      } else if (j === triangle[i].length - 1) {
        record[i][j] = record[i-1][j-1] + triangle[i][j];
      } else {
        record[i][j] = Math.min(record[i-1][j-1], record[i-1][j]) + triangle[i][j];
      }
    }
  }

  return Math.min.apply(null, record[triangle.length-1]);
};

describe('Test', function() {
  it('Should pass', function() {
    console.log(minimumTotal([
      [10]
    ]));
  });

  it('Should pass', function() {
    console.log(minimumTotal([
      [-10]
    ]));
  });

  it('Should pass', function() {
    console.log(minimumTotal([
      [2],
      [3, 4],
      [6, 5, 7],
      [4, 1, 8, 3]
    ]));
  })
});
