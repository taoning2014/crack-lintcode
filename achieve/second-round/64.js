/**
 * @param {number[][]} grid
 * @return {number}
 */
var minPathSum = function(grid) {
  if (!Array.isArray(grid) || grid.length === 0
    || !Array.isArray(grid[0]) || grid[0].length === 0) {
    return 0;
  }

  const m = grid.length;
  const n = grid[0].length;

  const dp = [];
  for(let i = 0; i < m; i++) {
    dp[i] = [];
  }
  dp[0][0] = grid[0][0];

  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      if (i === 0 && j === 0) {
        continue;
      } else if (i === 0) {
        dp[i][j] = dp[i][j - 1] + grid[i][j];
      } else if (j === 0) {
        dp[i][j] = dp[i - 1][j] + grid[i][j];
      } else {
        dp[i][j] = Math.min(dp[i - 1][j], dp[i][j - 1]) + grid[i][j];
      }
    }
  }

  return dp[m - 1][n - 1];
};
