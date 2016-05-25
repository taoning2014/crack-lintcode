// Suppose a sorted array is rotated at some pivot unknown to you beforehand.

// (i.e., 0 1 2 4 5 6 7 might become 4 5 6 7 0 1 2).

// Find the minimum element.

// You may assume no duplicate exists in the array.
'use strict';
require('chai').should();

/**
 * @param {number[]} nums
 * @return {number}
 */
var findMin = function(nums) {
  var l;
  var r;
  var mid;

  if (!nums || !nums.length) {
    return;
  }

  l = 0;
  r = nums.length - 1;
  while (l <= r) {
    mid = l + Math.floor((r - l) / 2);
    if (nums[nums.length - 1] < nums[mid]) {
      l = mid + 1;
    } else {
      r = mid - 1;
    }
  }

  return nums[l];
};

describe('Test', function() {
  it('Should pass', function() {
    console.log(findMin([4, 5, 6, 7, -1, 0, 1, 2]));
    console.log(findMin([4, 5, 6, 7, 8, 1]));
    console.log(findMin([4, 5, 6, 7, 8]));
  })
})
