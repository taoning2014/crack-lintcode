// Given an unsorted array of integers, find the length of longest increasing subsequence.

// For example,
// Given [10, 9, 2, 5, 3, 7, 101, 18],
// The longest increasing subsequence is [2, 3, 7, 101], therefore the length is 4.
// Note that there may be more than one LIS combination, it is only necessary for you to return the length.

// Your algorithm should run in O(n2) complexity.

// Follow up: Could you improve it to O(n log n) time complexity?
'use strict';
require('chai').should();

/**
 * @param {number[]} nums
 * @return {number}
 */
var lengthOfLIS = function(nums) {
  var array;
  var i;
  var j;

  if (!nums || !nums.length) {
    return 0;
  }

  array = new Array(nums.length);

  array.fill(1);

  for (i = 1; i < nums.length; i++) {
    for (j = i - 1; j >= 0; j--) {
      if (nums[j] < nums[i]) {
        array[i] = Math.max(array[i], array[j] + 1);
      }
    }
  }

  return Math.max.apply(null, array);
};

describe('Test', function() {
  it('Should pass', function() {
    console.log(lengthOfLIS([]));
    console.log(lengthOfLIS([1]));
    console.log(lengthOfLIS([1, 5]));
    console.log(lengthOfLIS([10, 9, 2, 5, 3, 7, 101, 18]));
  });
});
