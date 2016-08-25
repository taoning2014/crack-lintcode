'use strict';

// ========================================================================
// Time:   5min
// Submit: 1
// ========================================================================

// Given an array of integers, find if the array contains any duplicates.

// Your function should return true if any value appears at least twice in the array,
// and it should return false if every element is distinct.

/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function(nums) {
  if (!nums) {
    return false;
  }

  nums.sort((p, q) => parseInt(p, 10) - parseInt(q, 10));

  for (let i = 0; i < nums.length - 1; i++) {
    if (nums[i] === nums[i + 1]) {
      return true;
    }
  }

  return false;
};
