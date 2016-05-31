// Unsolved, as I don't know how to proved they are at same side
// Suppose a sorted array is rotated at some pivot unknown to you beforehand.

// (i.e., 0 1 2 4 5 6 7 might become 4 5 6 7 0 1 2).

// You are given a target value to search. If found in the array return its index, otherwise return -1.

// You may assume no duplicate exists in the array.
'use strict';
require('chai').should();

function onSameSide(p1, p2, p3) {
  return p1 <= p2 || p1 >= p3
}

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function(nums, target) {
  var l;
  var r;
  var mid;
  var lastEleValue;

  if (!nums || !nums.length) {
    return -1;
  }

  l = 0;
  r = nums.length - 1;
  lastEleValue = nums[nums.length - 1];

  while (l <= r) {
    mid = l + Math.floor((r - l) / 2);
    if (target < nums[mid] && onSameSide(lastEleValue, target, nums[mid])) {
      r = mid - 1;
    } else if (target < nums[mid]) {
      l = mid + 1;
    } else if (target > nums[mid] && onSameSide(lastEleValue, nums[mid], target)) {
      l = mid + 1;
    } else if (target > nums[mid]) {
      r = mid - 1;
    } else {
      return mid;
    }
  }

  return -1;
};


describe('Test', function() {
  it('Should pass', function() {
    console.log(search([3, 1], 1));
    // console.log(search());
    // console.log(search([]));
    // console.log(search([1, 2, 3, 4, 5], 4));
    // console.log(search([1, 2, 3, 4, 5], 1));
    // console.log(search([1, 2, 3, 4, 5], 5));
    // console.log(search([5, 1, 2, 3, 4], 5));
  });
});
