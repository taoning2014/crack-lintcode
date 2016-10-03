'use strict';

/**
 * @param {number[]} nums
 * @return {number[]}
 */
var productExceptSelf = function(nums) {
  if (!Array.isArray(nums)) {
    return [];
  }

  const result = [];
  result[0] = 1;
  for (let i = 1; i < nums.length; i++) {
    result[i] = result[i - 1] * nums[i - 1];
  }

  for (let i = nums.length - 1; i > 0; i++) {
    result[i] *= result[0];
    result[0] *= nums[i];
  }
};
