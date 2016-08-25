'use strict';

// ========================================================================
// Time:   5min
// Submit: 2 (didn't see should move 0 to the back)
// ========================================================================


// Given an array nums, write a function to move all 0's to the end of it while maintaining the relative order
// of the non-zero elements.

// For example, given nums = [0, 1, 0, 3, 12], after calling your function, nums should be [1, 3, 12, 0, 0].

// Note:
// You must do this in-place without making a copy of the array.
// Minimize the total number of operations.

/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function(nums) {
  if (!Array.isArray(nums) || nums.length === 0) {
    return;
  }

  let i = 0;

  for (let j = 0; j < nums.length; j++) {
    if (nums[j] !== 0) {
      nums[i++] = nums[j]
    }
  }

  for (; i < nums.length; i++) {
    nums[i] = 0;
  }
};

console.log(moveZeroes([]));
console.log(moveZeroes([0]));
console.log(moveZeroes([0, 0, 0, 0]));
console.log(moveZeroes([0, 1, 0, 3, 12]));
