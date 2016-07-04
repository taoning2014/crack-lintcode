// Follow up for N-Queens problem.

// Now, instead outputting board configurations, return the total number of distinct solutions.

/**
 * @param {number} n
 * @return {number}
 */

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

var totalNQueens = function(n) {
    return solveNQueens(n).length;
};
