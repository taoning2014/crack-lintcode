'use strict';

// ========================================================================
// Time:   5min
// Submit: 1 time out
// ========================================================================

/**
 * @param {number[]} nums
 * @param {number} k
 * @param {number} t
 * @return {boolean}
 */
var containsNearbyAlmostDuplicate = function(nums, k, t) {
  if (!Array.isArray(nums) || !Number.isInteger(k) || !Number.isInteger(t) || k < 1) {
    return false;
  }

  for (let i = 0; i < nums.length - 1; i++) {
    for (let j = i + 1; i < nums.length && j - i <= k; j++) {
      if (Math.abs(nums[i] - nums[j]) <= t) {
        return true;
      }
    }
  }

  return false;
};
