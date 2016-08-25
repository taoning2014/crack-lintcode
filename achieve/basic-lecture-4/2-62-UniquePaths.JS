// A robot is located at the top-left corner of a m x n grid (marked 'Start' in the diagram below).

// The robot can only move either down or right at any point in time. The robot is trying to reach
// the bottom-right corner of the grid (marked 'Finish' in the diagram below).

// How many possible unique paths are there?
'use strict';
require('chai').should();

/**
 * @param {number} m
 * @param {number} n
 * @return {number}
 */
var uniquePaths = function(m, n) {
  var moves;
  var i;
  var j;

  if (m === 0 || n === 0) {
    return 0;
  }

  // init moves
  moves = [];
  for (i = 0; i < m; i++) {
    moves[i] = [];
  }
  moves[0][0] = 1;

  for (i = 0; i < m; i++) {
    for (j = 0; j < n; j++) {
      if (i === 0 && j === 0) {
        continue;
      } else if (i === 0) {
        moves[i][j] = moves[i][j-1];
      } else if (j === 0) {
        moves[i][j] = moves[i-1][j];
      } else {
        moves[i][j] = moves[i-1][j] + moves[i][j-1];
      }
    }
  }

  return moves[m-1][n-1];
};

describe('Test', function () {
  it('Should pass', function () {
    console.log(uniquePaths(1, 1));
    console.log(uniquePaths(2, 2));
    console.log(uniquePaths(1, 7));
    console.log(uniquePaths(2, 3));
  });
});
