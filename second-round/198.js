'use strict';

// ========================================================================
// Time:   10min
// Submit: 2 didn't consider length === 1
// ========================================================================

// You are a professional robber planning to rob houses along a street.
// Each house has a certain amount of money stashed, the only constraint
// stopping you from robbing each of them is that adjacent houses have security
// system connected and it will automatically contact the police if two adjacent houses
// were broken into on the same night.

// Given a list of non-negative integers representing the amount of money of each house,
// determine the maximum amount of money you can rob tonight without alerting the police.

/**
 * @param {number[]} nums
 * @return {number}
 */
var rob = function(nums) {
  if (!Array.isArray(nums) || nums.length === 0) {
    return 0;
  }

  if (nums.length === 1) {
    return nums[0];
  }

  const dp = new Array(nums.length);
  dp[0] = nums[0];
  dp[1] = nums[1];

  for (let i = 2; i < nums.length; i++) {
    dp[i] = nums[i];
    for (let j = i - 2; j >= 0; j--) {
      dp[i] = Math.max(dp[j] + nums[i], dp[i]);
    }
  }

  return Math.max.apply(null, dp);
};

console.log(rob([1, 2, 3, 4, 5, 6]));
