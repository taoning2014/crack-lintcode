'use strict';

// Note: pay attention to the input type, I treated it as {number[][]}

function dfs(grid, i, j, m, n, id) {
  // visit this node
  grid[i][j] = id;

  // find all unvisited neighbors, and visit them
  //  up
  if (i > 0 && grid[i - 1][j] === '1') {
    dfs(grid, i - 1, j, m, n, id);
  }

  //  down
  if (i < m - 1 && grid[i + 1][j] === '1') {
    dfs(grid, i + 1, j, m, n, id);
  }

  // left
  if (j > 0 && grid[i][j - 1] === '1') {
    dfs(grid, i, j - 1, m, n, id);
  }

  // right
  if (j < n - 1 && grid[i][j + 1] === '1') {
    dfs(grid, i, j + 1, m, n, id);
  }
}

/**
 * @param {character[][]} grid
 * @return {number}
 */
var numIslands = function(grid) {
  if (!Array.isArray(grid) || grid.length === 0) {
    return 0;
  }

  const m = grid.length;
  const n = grid[0].length;
  let id = 1;

  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      if (grid[i][j] !== '1') {
        continue;
      }

      id++;
      dfs(grid, i, j, m, n, id)

    }
  }

  return id - 1;
};

var matrix = [
  [1]
];

console.log(numIslands(["11110","11010","11000","00000"]));
