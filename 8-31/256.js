'use strict';

/**
 * @param {number[][]} costs
 * @return {number}
 */
var minCost = function(costs) {
  if (!Array.isArray(costs) || !Array.isArray(costs[0])) {
    return 0;
  }

  const dp = [];
  for (let i = 0; i < costs.length; i++) {
    dp[i] = [];
  }

  dp[0][0] = costs[0][0];
  dp[0][1] = costs[0][1];
  dp[0][2] = costs[0][2];

  for (let i = 1; i < costs.length; i++) {
    dp[i][0] = Math.min(dp[i - 1][1], dp[i - 1][2]) + costs[i][0];
    dp[i][1] = Math.min(dp[i - 1][0], dp[i - 1][1]) + costs[i][1];
    dp[i][2] = Math.min(dp[i - 1][0], dp[i - 1][1]) + costs[i][2];
  }

  return Math.max.apply(null, dp[costs.length - 1]);
};
