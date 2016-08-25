// Suppose a sorted array is rotated at some pivot unknown to you beforehand.

// (i.e., 0 1 2 4 5 6 7 might become 4 5 6 7 0 1 2).

// You are given a target value to search. If found in the array return its index, otherwise return -1.

// You may assume no duplicate exists in the array.
'use strict';
require('chai').should();

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function(nums, target) {
  var moveCount = 0;
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

  // solve the special case, where the are duplicate element at rotate positon
  // move the left duplicate to right, in this case, need to record how many
  // moved manually
  while (nums.length > 1 && nums[0] === lastEleValue) {
    let temp = nums.shift();
    nums.push(temp);
    moveCount++;
  }

  while (l <= r) {
    mid = l + Math.floor((r - l) / 2);
    // both on rotated left or both on rotated right
    if ((target > lastEleValue && nums[mid] > lastEleValue) || (target <= lastEleValue && nums[mid] <= lastEleValue)) {
      if (nums[mid] < target) {
        l = mid + 1;
      } else if (nums[mid] > target) {
        r = mid - 1;
      } else {
        return mid + moveCount;
      }
    }
    // mid on left, target on right
    else if (nums[mid] > lastEleValue && target <= lastEleValue) {
      l = mid + 1;
    }
    // mid on right, target on left
    else if (nums[mid] <= lastEleValue && target > lastEleValue) {
      r = mid - 1;
    }

  }

  return -1;
};


describe('Test', function() {
  it('Should pass', function() {
    console.log(search([1], 1));
    console.log(search([1], 0));
  });

  it('Should pass', function() {
    console.log(search([3, 3, 3, 4, 5, 1, 2, 3, 3, 3], 4));
    console.log(search([1, 2, 3, 4, 5], 1));
    console.log(search([1, 2, 3, 4, 5], 5));
    console.log(search([5, 1, 2, 3, 4], 5));
    console.log(search([5, 1, 2, 3, 4], 0));
    console.log(search([5, 1, 2, 3, 4], 6));
  });

  it('Should pass', function() {
    console.log(search([6, 7, 8, 9, 1, 2, 3, 4, 5], 1));
    console.log(search([6, 7, 8, 9, 1, 2, 3, 4, 5], 7));
    console.log(search([6, 7, 8, 9, 1, 2, 3, 4, 5], 4));
    console.log(search([6, 7, 8, 9, 1, 2, 3, 4, 5], 0));
    console.log(search([6, 7, 8, 9, 1, 2, 3, 4, 5], 10));
  });
});
