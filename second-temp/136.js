'use strict';

// ========================================================================
// Time:   3min
// Submit: 1
// ========================================================================

/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function(nums) {
  if (!Array.isArray(nums) || nums.length === 0) {
    return NaN;
  }

  let cur = 0;
  for (let i = 0; i < nums.length; i++) {
    cur ^= nums[i];
  }

  return cur;
};
