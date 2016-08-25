// The n-queens puzzle is the problem of placing n queens on an n×n chessboard such that no two queens attack each other.

// Given an integer n, return all distinct solutions to the n-queens puzzle.

// Each solution contains a distinct board configuration of the n-queens' placement, where 'Q' and '.' both indicate
// a queen and an empty space respectively.

// For example,
// There exist two distinct solutions to the 4-queens puzzle:

// [
//  [".Q..",  // Solution 1
//   "...Q",
//   "Q...",
//   "..Q."],

//  ["..Q.",  // Solution 2
//   "Q...",
//   "...Q",
//   ".Q.."]
// ]
'use strict';
require('chai').should();

function validPosition(curPosition, curQueens) {
  // is same column?
  for (let i = 0; i < curQueens.length; i++) {
    if (curQueens[i] === curPosition) {
      return false;
    }
  }

  // is same from left top to right bottom?
  for (let i = 0; i < curQueens.length; i++) {
    if (curPosition - curQueens[i] === curQueens.length - i) {
      return false;
    }
  }

  // is same from right top to left bottom?
  for (let i = 0; i < curQueens.length; i++) {
    if (curPosition + curQueens.length === curQueens[i] + i) {
      return false;
    }
  }

  return true;
}

function _solveNQueens(n, curQueens, numsResult) {
  if (n === curQueens.length) {
    numsResult.push(curQueens);
    return;
  }

  for (let i = 0; i < n; i++) {
    if (validPosition(i, curQueens)) {
      let copy = curQueens.slice();
      copy.push(i);
      _solveNQueens(n, copy, numsResult);
    }
  }
}

// [ [ 1, 3, 0, 2 ], [ 2, 0, 3, 1 ] ]
function buildStr(numsResult) {
  let strResult = [];

  for (let i = 0; i < numsResult.length; i++) {
    let curResult = [];
    for (let j = 0; j < numsResult[i].length; j++) {
      let curStr = '';
      for (let k = 0; k < numsResult[i].length; k++) {
        if (k === numsResult[i][j]) {
          curStr += 'Q'
        } else {
          curStr += '.';
        }
      }
      curResult.push(curStr);
    }
    strResult.push(curResult);
  }

  return strResult;
}

/**
 * @param {number} n
 * @return {string[][]}
 */
var solveNQueens = function(n) {
  let numsResult = [];

  if (!Number.isInteger(n) || n < 1) {
    return [];
  }

  // got result using number to stand for solution
  _solveNQueens(n, [], numsResult);

  // build string result based on numsResult
  return buildStr(numsResult);
};

describe('Test', function() {
  it('Should pass', function() {
    // console.log(solveNQueens(1));
    console.log(solveNQueens(1));
  });
});
