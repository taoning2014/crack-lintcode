'use strict';

// ========================================================================
// Time:   10min
// Submit: 3
//  1, Not sure what to pass in for slice(), length or index
//  2, Not sure how to use apply in function
// ========================================================================

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var rotate = function(nums, k) {
  if (!Array.isArray(nums)) {
    return;
  }

  k = k % nums.length;

  if (k === 0) {
    return;
  }

  const temp = nums.splice(0, nums.length - k);
  Array.prototype.push.apply(nums, temp);
};

console.log(rotate([1,2,3,4,5,6,7], 3));
