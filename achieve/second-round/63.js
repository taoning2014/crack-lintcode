var uniquePaths = function(m, n) {
  if (!Number.isInteger(m) || !Number.isInteger(n) || m < 1 || n < 1) {
    return 0;
  }

  const dp = [];
  for (let i = 0; i < m; i++) {
    dp[i] = [];
  }
  dp[0][0] = 1;

  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      if (i === 0 && j === 0) {
        continue;
      } else if (i === 0) {
        dp[i][j] = dp[i][j - 1];
      } else if (j === 0) {
        dp[i][j] = dp[i - 1][j];
      } else {
        dp[i][j] = dp[i - 1][j] + dp[i][j - 1];
      }
    }
  }

  return dp[m - 1][n - 1];
};

/**
 * @param {number[][]} obstacleGrid
 * @return {number}
 */
var uniquePathsWithObstacles = function(obstacleGrid) {
  if (!Array.isArray(obstacleGrid) || obstacleGrid.length === 0
    || !Array.isArray(obstacleGrid[0]) || obstacleGrid[0].length === 0
    || obstacleGrid[0][0] === 1) {
    return 0;
  }

  const m = obstacleGrid.length;
  const n = obstacleGrid[0].length;

  const dp = [];
  for (let i = 0; i < m; i++) {
    dp[i] = [];
  }
  dp[0][0] = 1;

  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      if (i === 0 && j === 0) {
        continue;
      } else if (obstacleGrid[i][j] === 1) {
        dp[i][j] = 0;
      } else if (i === 0) {
        dp[i][j] = dp[i][j - 1];
      } else if (j === 0) {
        dp[i][j] = dp[i - 1][j];
      } else {
        dp[i][j] = dp[i - 1][j] + dp[i][j - 1];
      }
    }
  }

  return dp[m - 1][n - 1];
};
