// Pass but time out

// Given a sorted array, remove the duplicates in place such that each element appear only once and
// return the new length.

// Do not allocate extra space for another array, you must do this in place with constant memory.

// For example,
// Given input array nums = [1,1,2],

// Your function should return length = 2, with the first two elements of nums being 1 and 2
// respectively. It doesn't matter what you leave beyond the new length.
'use strict';
require('chai').should();

function moveBack(array, start, end) {
  var i = start;

  while (i < end - 1) {
    exchange(array, i, i + 1);
    i++;
  }
}

function exchange(array, p, q) {
  var temp = array[p];
  array[p] = array[q];
  array[q] = temp;
}

/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
  var l;
  var r;

  if (!nums || !nums.length) {
    return 0;
  }

  l = 1;
  r = nums.length;

  while (l < r) {
    if (nums[l] === nums[l - 1]) {
      moveBack(nums, l, r--);
    } else {
      l++;
    }
  }

  return r;
};

// Solution 2. No time out solution.
/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
  var i;
  var j;

  if (!nums || !nums.length) {
    return 0;
  }

  for (i = 1, j = 1; i < nums.length; i++) {
    if (nums[i] !== nums[i - 1]) {
      nums[j++] = nums[i];
    }
  }

  return j;
};

describe('Test', function() {
  it('Should pass', function() {
    console.log(removeDuplicates([]));
    console.log(removeDuplicates([1]));
    console.log(removeDuplicates([1, 2, 3, 4]));
  });

  it('Should pass', function() {
    console.log(removeDuplicates([1, 1])); // 1
    console.log(removeDuplicates([1, 1, 2, 2, 2, 3, 4])); // 4
  });
});
