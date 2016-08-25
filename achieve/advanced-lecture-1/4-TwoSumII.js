// From: http://www.lintcode.com/en/problem/two-sum-ii/

// iven an array of integers, find how many pairs in the array such that
// their sum is bigger than a specific target number. Please return the number of pairs.

// E.g.
// Given numbers = [2, 7, 11, 15], target = 24. Return 1. (11 + 15 is the only pair)
'use strict';
require('chai').should();

var twoSum = function(nums, target) {
  var count = 0;
  var l = 0;
  var r = nums.length - 1;

  while (l < r) {
    if (nums[l] + nums[r] > target) {
      count = count + (r - l);
      r--;
    } else {
      l++;
    }
  }

  return count;
}

describe('Test', function () {
  it('Should pass', function () {
    console.log(twoSum([2, 7, 11, 15], 24));
  })
})
