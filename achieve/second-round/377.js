'use strict';

// ========================================================================
// Time:   15min
// Submit: 1 Refer: https://discuss.leetcode.com/topic/52186/my-3ms-java-dp-solution
// ========================================================================

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var combinationSum4 = function(nums, target) {
  if (!Array.isArray(nums) || !Number.isInteger(target)) {
    return 0;
  }

  nums.sort((p, q) => parseInt(p, 10) - parseInt(q, 10));

  const dp = new Array(target + 1);
  dp.fill(0);

  for (let i = 1; i < dp.length; i++) {
    for (let j = 0; j < nums.length; j++) {
      if (nums[j] > i) {
        break;
      } else if (nums[j] === i) {
        dp[i]++;
      } else {
        dp[i] += dp[i - nums[j]];
      }
    }
  }

  return dp[target];
};

console.log(combinationSum4([1, 2, 3], 4));
