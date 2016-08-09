'use strict';

// ========================================================================
// Time:   5min
// Submit: 1
// ========================================================================

/**
 * @param {number[]} nums
 * @return {number}
 */
var missingNumber = function(nums) {
  if (!Array.isArray(nums) || nums.length === 0) {
    return -1;
  }

  let result = 0;
  for (let i = 0; i < nums.length; i++) {
    result ^= nums[i];
    result ^= i;
  }

  result ^= nums.length;

  return result;
};

