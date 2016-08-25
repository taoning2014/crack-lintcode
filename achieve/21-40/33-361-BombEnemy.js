'use strict';

// Given a 2D grid, each cell is either a wall 'W', an enemy 'E' or empty '0' (the number zero), return the maximum enemies you can kill using one bomb.
// The bomb kills all the enemies in the same row and column from the planted point until it hits the wall since the wall is too strong to be destroyed.
// Note that you can only put the bomb at an empty cell.

// Example:
// For the given grid

// 0 E 0 0
// E 0 W E
// 0 E 0 0

// return 3. (Placing a bomb at (1,1) kills 3 enemies)

// refer: https://discuss.leetcode.com/topic/48565/short-o-mn-solution/2

/**
 * @param {character[][]} grid
 * @return {number}
 */
var maxKilledEnemies = function(grid) {
  if (!Array.isArray(grid) || !Array.isArray(grid[0]) || grid.length === 0 || grid[0].length === 0) {
    return 0;
  }

  const m = grid.length;
  const n = grid[0].length;
  let result = 0;
  let rowNum = 0;
  let colNum = new Array(n);
  colNum.fill(0);

  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      if (j === 0 || grid[i][j - 1] === 'W') {
        rowNum = 0;
        for (let k = j; k < n && grid[i][k] !== 'W'; k++) {
          if (grid[i][k] === 'E') {
            rowNum++;
          }
        }
      }

      if (i === 0 || grid[i - 1][j] === 'W') {
        colNum[j] = 0;
        for (let k = i; k < m && grid[k][j] !== 'W'; k++) {
          if (grid[k][j] === 'E') {
            colNum[j]++;
          }
        }
      }

      if (grid[i][j] === '0') {
        result = Math.max(rowNum + colNum[j], result);
      }
    }
  }

  return result;
};

var grid = [
  ['0', 'E', '0', '0'],
  ['E', '0', 'W', 'E'],
  ['0', 'E', '0', '0']
];

console.log(maxKilledEnemies(grid));
