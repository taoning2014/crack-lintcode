'use strict';

// ========================================================================
// Time:   10min
// Submit: 3
// ========================================================================

/**
 * @param {number} n
 * @param {number} k
 * @return {number}
 */
var numWays = function(n, k) {
  if (!Number.isInteger(n) || !Number.isInteger(k) || n === 0 || k === 0) {
    return 0;
  }

  const dp = [];
  dp[0] = k;
  dp[1] = dp[0] * k;

  for (let i = 2; i < n; i++) {
    dp[i] = dp[i - 1] * (k - 1) + dp[i - 2] * (k - 1);
  }

  return dp[n - 1];
};
