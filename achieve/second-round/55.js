'use strict';

// ========================================================================
// Time:   5min
// Submit: 1
// ========================================================================

/**
 * @param {number[]} nums
 * @return {boolean}
 */
var canJump = function(nums) {
  if (!Array.isArray(nums) || nums.length === 0) {
    return false;
  }

  const dp = new Array(nums.length);
  dp.fill(false);
  dp[0] = true;

  for (let i = 1; i < nums.length; i++) {
    for (let j = i - 1; j >= 0; j--) {
      if (dp[j] && i - j <= nums[j]) {
        dp[i] = true;
      }
    }
  }

  return dp[nums.length - 1];
};
