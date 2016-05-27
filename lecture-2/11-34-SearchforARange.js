// Given a sorted array of integers, find the starting and ending position of a given target value.

// Your algorithm's runtime complexity must be in the order of O(log n).

// If the target is not found in the array, return [-1, -1].

// For example,
// Given [5, 7, 7, 8, 8, 10] and target value 8,
// return [3, 4].

'use strict';
require('chai').should();

function searchLeft(nums, target) {
  var l = 0;
  var r = nums.length - 1;
  var mid;

  while (l <= r) {
    mid = l + Math.floor((r - l) / 2);
    if (target <= nums[mid]) {
      r = mid - 1;
    } else {
      l = mid + 1;
    }
  }
  // 注意：这样去返回，l可能越界，到array length那个值
  return l;
}

function searchRight(nums, target) {
  var l = 0;
  var r = nums.length - 1;
  var mid;

  while (l <= r) {
    mid = l + Math.floor((r - l) / 2);
    if (target >= nums[mid]) {
      l = mid + 1;
    } else {
      r = mid - 1;
    }
  }

  return r;
}
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var searchRange = function(nums, target) {
  var start;
  var end;

  if (!nums || !nums.length) {
    return [-1, -1];
  }

  start = searchLeft(nums, target);
  end = searchRight(nums, target);

  if (start === nums.length || nums[start] !== target) {
    return [-1, -1];
  } else {
    return [start, end];
  }
};

describe('Test', function() {
  it('Should pass', function() {
    console.log(searchRange([1, 2, 3, 4, 5], 6));
    console.log(searchRange([1, 2, 3, 4, 5], 4));
    console.log(searchRange([1, 2, 3, 3, 3, 4, 5], 3));
    console.log(searchRange([1, 2, 3, 3, 3, 4, 5], 4));
  })
})
