// Given an array of integers, every element appears twice except for one. Find that single one.

// Note:
// Your algorithm should have a linear runtime complexity. Could you implement it without using extra memory?

'use strict';
require('chai').should();

/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function(nums) {
    var result = 0;
    var i;

    if (!nums || !nums.length) {
      return NaN;
    }

    for (i = 0; i < nums.length; i++) {
      if (!Number.isInteger(nums[i])) {
        return NaN;
      }

      result = result ^ nums[i];
    }

    return result;
};

describe('Test', function () {
  it('Should pass', function () {
    console.log(singleNumber([1,1,2,2,4]));
  })
})
