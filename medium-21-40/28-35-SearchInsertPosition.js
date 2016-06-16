// Given a sorted array and a target value, return the index if the target is found.
// If not, return the index where it would be if it were inserted in order.

// You may assume no duplicates in the array.

// Here are few examples.
// [1,3,5,6], 5 → 2
// [1,3,5,6], 2 → 1
// [1,3,5,6], 7 → 4
// [1,3,5,6], 0 → 0
'use strict';
require('chai').should();

function binarySearch(nums, target) {
  let l = 0;
  let r = nums.length - 1;
  let mid;

  while (l <= r) {
    mid = l + Math.floor((r - l) / 2);
    if (nums[mid] < target) {
      l = mid + 1;
    } else if (nums[mid] > target) {
      r = mid - 1;
    } else {
      return mid;
    }
  }

  return l;
}

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var searchInsert = function(nums, target) {
  if (!nums || !nums.length) {
    return 0;
  }

  return binarySearch(nums, target);
};

describe('Test', function () {
  it('Should pass', function () {
    console.log(searchInsert([1,3,5,6], 5));
    console.log(searchInsert([1,3,5,6], 2));
    console.log(searchInsert([1,3,5,6], 7));
    console.log(searchInsert([1,3,5,6], 0));
  })
})
