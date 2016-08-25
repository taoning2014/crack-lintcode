'use strict';

// ========================================================================
// Time:   5min
// Submit: 2 should be n not n - 1
// ========================================================================

/**
 * @param {number} n
 * @return {number}
 */
var climbStairs = function(n) {
  if (!Number.isInteger(n) || n < 0) {
    return 0;
  }

  const dp = [];
  dp[0] = 1;
  dp[1] = 1;

  for (let i = 2; i <= n; i++) {
    dp[i] = dp[i - 1] + dp[i - 2];
  }

  return dp[n];
};
