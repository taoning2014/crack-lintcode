// Follow up for "Find Minimum in Rotated Sorted Array":
// What if duplicates are allowed?

// Would this affect the run-time complexity? How and why?
// Suppose a sorted array is rotated at some pivot unknown to you beforehand.

// (i.e., 0 1 2 4 5 6 7 might become 4 5 6 7 0 1 2).

// Find the minimum element.

// The array may contain duplicates.

// BUG: 没有想清楚[3,1,3]的情况。
'use strict';
require('chai').should();

var _findMin = function(nums) {
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

/**
 * @param {number[]} nums
 * @return {number}
 */
var findMin = function(nums) {
  var i;
  if (!nums || !nums.length) {
    return NaN;
  }

  // process first few elements which equals to last
  for (i = 0; i < nums.length - 1; i++) {
    if (nums[i] !== nums[nums.length - 1]) {
      break;
    }
  }

  nums = nums.slice(i);
  return _findMin(nums);
};

describe('Test', function() {
  it('Should pass', function() {
    console.log(findMin([]));
    console.log(findMin([1]));
    console.log(findMin([1, 2]));
    console.log(findMin([3, 1, 3]));
    console.log(findMin([3, 1, 3, 3]));
    // console.log(findMin([4, 5, 6, 7, 8, 1]));
    // console.log(findMin([4, 5, 6, 7, 8]));
 })
})
