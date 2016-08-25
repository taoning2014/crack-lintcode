'use strict';

// ========================================================================
// Time:   8min
// Submit: 2
// ========================================================================

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {boolean}
 */
var containsNearbyDuplicate = function(nums, k) {
  if (!Array.isArray(nums) || !Number.isInteger(k) || k < 1) {
    return false;
  }

  const map = new Map();
  for (let i = 0; i < nums.length; i++) {
    if (map.has(nums[i])) {
      if (i - map.get(nums[i]) <= k) {
        return true;
      } else {
        map.set(nums[i], i);
      }
    } else {
      map.set(nums[i], i);
    }
  }

  return false;
};
