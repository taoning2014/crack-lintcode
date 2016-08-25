// Follow up for "Unique Paths":

// Now consider if some obstacles are added to the grids. How many unique paths would there be?

// An obstacle and empty space is marked as 1 and 0 respectively in the grid.

// For example,
// There is one obstacle in the middle of a 3x3 grid as illustrated below.

// [
//   [0,0,0],
//   [0,1,0],
//   [0,0,0]
// ]
// The total number of unique paths is 2.

// Note: m and n will be at most 100.
'use strict';
require('chai').should();

/**
 * @param {number[][]} obstacleGrid
 * @return {number}
 */
var uniquePathsWithObstacles = function(obstacleGrid) {
  var moves;
  var i;
  var j;
  var m;
  var n;

  if (!obstacleGrid || !obstacleGrid.length || !obstacleGrid[0].length || obstacleGrid[0][0] === 1) {
    return 0;
  }

  m = obstacleGrid.length;
  n = obstacleGrid[0].length;

  // init moves array
  moves = [];
  for (i = 0; i < m; i++) {
    moves[i] = [];
  }

  moves[0][0] = 1;

  for (i = 0; i < m; i++) {
    for (j = 0; j < n; j++) {
      if (obstacleGrid[i][j] === 1) {
        moves[i][j] = 0;
        continue;
      }

      if (i === 0 && j === 0) {
        continue;
      } else if (i === 0) {
        moves[i][j] = moves[i][j - 1];
      } else if (j === 0) {
        moves[i][j] = moves[i - 1][j];
      } else {
        moves[i][j] = moves[i - 1][j] + moves[i][j - 1];
      }
    }
  }

  return moves[m - 1][n - 1];
};

describe('Test', function() {
  it('Should pass', function() {
    var obstacleGrid = [
      [0, 0, 0],
      [0, 1, 0],
      [0, 0, 0]
    ];
    console.log(uniquePathsWithObstacles(obstacleGrid));
    console.log(uniquePathsWithObstacles([[0, 0]]));
  });
});
