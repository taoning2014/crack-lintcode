/**
 * @param {number[][]} triangle
 * @return {number}
 */
var minimumTotal = function(triangle) {
  if (!Array.isArray(triangle) || triangle.length === 0
    || !Array.isArray(triangle[0]) || triangle[0].length === 0) {
    return 0;
  }

  const dp = [];
  for (let i = 0; i < triangle.length; i++) {
    dp[i] = [];
  }
  dp[0][0] = triangle[0][0];

  for (let i = 1; i < triangle.length; i++) {
    for (let j = 0; j < triangle[i].length; j++) {
      if (j === 0) {
        dp[i][j] = dp[i - 1][j] + triangle[i][j];
      } else if (j === triangle[i].length - 1) {
        dp[i][j] = dp[i - 1][j - 1] + triangle[i][j];
      } else {
        dp[i][j] = Math.min(dp[i - 1][j - 1], dp[i - 1][j]) + triangle[i][j];
      }
    }
  }

  return Math.min.apply(null, dp[triangle.length - 1]);
};
