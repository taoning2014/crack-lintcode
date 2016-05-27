// A peak element is an element that is greater than its neighbors.

// Given an input array where num[i] ≠ num[i+1], find a peak element and return its index.

// The array may contain multiple peaks, in that case return the index to any one of the peaks is fine.

// You may imagine that num[-1] = num[n] = -∞.

// For example, in array [1, 2, 3, 1], 3 is a peak element and your function should return the index number 2.FindPeakElement.js
'use strict';
require('chai').should();

/**
 * @param {number[]} nums
 * @return {number}
 */
var findPeakElement = function(nums) {
  var i;

  if (!nums || !nums.length) {
    return -1;
  }

  // only one element
  if (nums.length === 1) {
    return 0;
  }

  // test 1st and last element
  if (nums[0] > nums[1]) {
    return 0;
  }
  if (nums[nums.length - 1] > nums[nums.length - 2]) {
    return nums.length - 1;
  }

  // more than 2 elements
  for (i = 1; i < nums.length - 1; i++) {
    if (nums[i] > nums[i - 1] && nums[i] > nums[i + 1]) {
      return i;
    }
  }

};

describe('Test', function() {
  it('Should pass', function() {
    console.log(findPeakElement());
    console.log(findPeakElement([]));
    console.log(findPeakElement([1]));
    console.log(findPeakElement([1, 2])); // 2
    console.log(findPeakElement([1, 2, 3, 1])); // 2
    console.log(findPeakElement([4, 2, 3, 1])); // 2
  })
})
