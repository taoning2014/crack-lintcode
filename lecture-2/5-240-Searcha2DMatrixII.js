// Write an efficient algorithm that searches for a value in an m x n matrix.
// This matrix has the following properties:

// Integers in each row are sorted in ascending from left to right.
// Integers in each column are sorted in ascending from top to bottom.
// For example,

// Consider the following matrix:

// [
//   [1,   4,  7, 11, 15],
//   [2,   5,  8, 12, 19],
//   [3,   6,  9, 16, 22],
//   [10, 13, 14, 17, 24],
//   [18, 21, 23, 26, 30]
// ]
// Given target = 5, return true.

// Given target = 20, return false.

'use strict';
require('chai').should();

// // Solution 1. Wrong. Only do bs in last row, get the rowIndex, then do bs in this row and
// //  next row (if next row exist). can't pass [[1,6][2,7][3,8]] target 3

// // 1, if not find, return left hand, where the positon should be the element if it is there
// function binarySearchCol(matrix, target, colIndex) {
//   var l = 0;
//   var r = matrix.length - 1;
//   var mid;

//   while (l <= r) {
//     mid = l + Math.floor((r - l) / 2);
//     if (target < matrix[mid][colIndex]) {
//       r = mid - 1;
//     } else if (target > matrix[mid][colIndex]) {
//       l = mid + 1;
//     } else {
//       return mid;
//     }
//   }

//   return l;
// }

// function binarySearchRow(matrix, target, rowIndex) {
//   var l = 0;
//   var r = matrix[0].length - 1;
//   var mid;

//   while (l <= r) {
//     mid = l + Math.floor((r - l) / 2);
//     if (target < matrix[rowIndex][mid]) {
//       r = mid - 1;
//     } else if (target > matrix[rowIndex][mid]) {
//       l = mid + 1;
//     } else {
//       return mid;
//     }
//   }

//   return l;
// }
// /**
//  * @param {number[][]} matrix
//  * @param {number} target
//  * @return {boolean}
//  */
// var searchMatrix = function(matrix, target) {
//   var searched = {
//     row: [],
//     col: []
//   };
//   var rowIndex;
//   var colIndex;

//   if (!matrix || !matrix.length) {
//     return false;
//   }

//   while (true) {
//     rowIndex = binarySearchCol(matrix, target, 0);
//     colIndex = binarySearchRow(matrix, target, rowIndex);
//     if (matrix[rowIndex][colIndex] === target) {
//       return true;
//     }
//     if (searched.row.indexOf(rowIndex) !== -1 || searched.col.indexOf(colIndex) !== -1) {
//       return false;
//     } else {
//       searched.row.push(rowIndex);
//       searched.col.push(colIndex);
//     }
//   }

//   return false;
// };

// ================= right solution =================
// Solution 2.
var searchMatrix = function(matrix, target) {
  var rowLength;
  var colLength;
  var row;
  var col;

  if (!matrix || !matrix.length) {
    return false;
  }

  rowLength = matrix.length;
  colLength = matrix[0].length;
  row = rowLength - 1;
  col = 0;

  while (row >= 0 && col < colLength ) {
    if(target < matrix[row][col]) {
      row--
    } else if (target > matrix[row][col]) {
      col++
    } else {
      return true;
    }
  }
  return false;
}

describe('Test', function() {

  it('Should pass', function() {
    var matrix = [[-5]];
    console.log(searchMatrix(matrix, -2));
  })

  it('Should pass', function() {
    var matrix = [[1,1]];
    console.log(searchMatrix(matrix, 2));
  })

  it('Should pass', function() {
    var matrix = [[1,4],[2,5]];
    console.log(searchMatrix(matrix, 2));
  })

  it('Should pass', function() {
    var matrix = [
      [1, 4, 7, 11, 15],
      [2, 5, 8, 12, 19],
      [3, 6, 9, 16, 22],
      [10, 13, 14, 17, 24],
      [18, 21, 23, 26, 30]
    ];
    console.log(searchMatrix(matrix, 4));
    console.log(searchMatrix(matrix, 7));
    console.log(searchMatrix(matrix, 10));
    console.log(searchMatrix(matrix, 31));
  })
})
