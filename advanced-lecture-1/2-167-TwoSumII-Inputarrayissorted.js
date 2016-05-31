// Given an array of integers that is already sorted in ascending order, find
// two numbers such that they add up to a specific target number.

// The function twoSum should return indices of the two numbers such that they
// add up to the target, where index1 must be less than index2. Please note that
// your returned answers (both index1 and index2) are not zero-based.

// You may assume that each input would have exactly one solution.

// Input: numbers={2, 7, 11, 15}, target=9
// Output: index1=1, index2=2
'use strict';
require('chai').should();

function binarySearch(nums, target, searchStart, searchEnd) {
  var l = searchStart;
  var r = searchEnd;
  var mid;

  while (l <= r) {
    mid = l + Math.floor((r - l) / 2);
    if (target < nums[mid]) {
      r = mid - 1;
    } else if (target > nums[mid]) {
      l = mid + 1;
    } else {
      return mid;
    }
  }

  return -1;
}

/**
 * @param {number[]} numbers
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(numbers, target) {
  var index;
  var i;

  for (i = 0; i < numbers.length; i++) {
    index = binarySearch(numbers, target - numbers[i], i + 1, numbers.length - 1);
    if (index !== -1) {
      return [i + 1, index + 1]
    }
  }

  return [-1, -1]
};


describe('Test', function () {
  it('Should pass', function () {
    console.log(twoSum([2, 7, 11, 15], 9));
    console.log(twoSum([0, 0, 11, 15], 0));
  })
})
