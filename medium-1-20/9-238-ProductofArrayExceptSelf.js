// Given an array of n integers where n > 1, nums, return an array output such
// that output[i] is equal to the product of all the elements of nums except nums[i].

// Solve it without division and in O(n).

// For example, given [1,2,3,4], return [24,12,8,6].

// Follow up:
// Could you solve it with constant space complexity? (Note: The output array
// does not count as extra space for the purpose of space complexity analysis.)
'use strict';
require('chai').should();

/**
 * @param {number[]} nums
 * @return {number[]}
 */
var productExceptSelf = function(nums) {
  var result = [];
  var i;

  if (!nums) {
    return result;
  }

  result[0] = 1;
  for (i = 1; i < nums.length; i++) {
    result[i] = result[i - 1] * nums[i - 1];
  }

  for (i = nums.length - 1; i > 0; i--) {
    result[i] *= result[0];
    result[0] *= nums[i];
  }

  return result;
};

describe('Test', function() {
  it('Should pass', function() {
    console.log(productExceptSelf([1,2,3,4]));
    console.log(productExceptSelf([0,2,3,4]));
  });
});
