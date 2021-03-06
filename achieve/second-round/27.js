'use strict';

// ========================================================================
// Time:   5min
// Submit: 1
// ========================================================================

// Given an array and a value, remove all instances of that value in place and return the new length.

// Do not allocate extra space for another array, you must do this in place with constant memory.

// The order of elements can be changed. It doesn't matter what you leave beyond the new length.

// Example:
// Given input array nums = [3,2,2,3], val = 3

// Your function should return length = 2, with the first two elements of nums being 2.

/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
var removeElement = function(nums, val) {
  if (!Array.isArray(nums)) {
    return 0;
  }

  let i;
  let j;
  for (i = 0, j = 0; j < nums.length; j++) {
    if (nums[j] !== val) {
      nums[i++] = nums[j]
    }
  }

  return i;
};

console.log(removeElement([], 3));
console.log(removeElement([3,3,3,3], 3));
