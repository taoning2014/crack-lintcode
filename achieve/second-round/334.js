'use strict';

// ========================================================================
// Time:   5min
// Submit: 2 notice need <= instead of <, e.g. input: [1,1,1,1]
// ========================================================================


/**
 * @param {number[]} nums
 * @return {boolean}
 */
var increasingTriplet = function(nums) {
  if (!Array.isArray(nums) || nums.length < 3) {
    return false;
  }

  let small = Number.POSITIVE_INFINITY;
  let mid = Number.POSITIVE_INFINITY;
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] <= small) {
      small = nums[i];
    } else if (nums[i] <= mid) {
      mid = nums[i];
    } else {
      return true;
    }
  }

  return false;
};
