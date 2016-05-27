// Given an array of integers and an integer k, find out whether there are two distinct
// indices i and j in the array such that nums[i] = nums[j] and the difference between
// i and j is at most k.
'use strict';
require('chai').should();

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {boolean}
 */
var containsNearbyDuplicate = function(nums, k) {
  var i;
  var j;

  if (!nums || !Number.isInteger(k) || k < 1) {
    return false;
  }

  for (i = 0; i < nums.length - 1; i++) {
    for (j = i + 1; j < nums.length && j <= i + k; j++) {
      if (nums[i] === nums[j]) {
        return true;
      }
    }
  }

  return false;
};

describe('Test', function() {
  it('Should pass', function() {
    console.log(containsNearbyDuplicate([1, 2, 1], 2)); // true
    console.log(containsNearbyDuplicate([1, 2, 3, 1], 2)); // false
  });
});
