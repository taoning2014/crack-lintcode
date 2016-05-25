// Given a m x n grid filled with non-negative numbers, find a path from
// top left to bottom right which minimizes the sum of all numbers along its path.

// Note: You can only move either down or right at any point in time.
'use strict';
require('chai').should();

/**
 * @param {number[][]} grid
 * @return {number}
 */
var minPathSum = function(grid) {
  var sums;
  var i;
  var j;
  var m;
  var n;

  if (!grid || !grid.length || !grid[0].length) {
    return 0;
  }

  m = grid.length;
  n = grid[0].length;

  // init sums
  sums = [];
  for (i = 0; i < m; i++) {
    sums[i] = [];
  }

  sums[0][0] = grid[0][0];

  for (i = 0; i < m; i++) {
    for (j = 0; j < n; j++) {
      if (i === 0 && j === 0) {
        continue;
      } else if (i === 0) {
        sums[i][j] = sums[i][j - 1] + grid[i][j];
      } else if (j === 0) {
        sums[i][j] = sums[i - 1][j] + grid[i][j];
      } else {
        sums[i][j] = Math.min(sums[i - 1][j], sums[i][j - 1]) + grid[i][j];
      }
    }
  }

  return sums[m - 1][n - 1];
};

describe('Test', function () {
  it('Should pass', function () {
    console.log(minPathSum([[1,2,3]])); // 6
    console.log(minPathSum([[1,1,1],[2,2,2]])); // 5
  })
})
