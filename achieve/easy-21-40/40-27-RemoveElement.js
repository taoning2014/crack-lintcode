// Given an array and a value, remove all instances of that value in place and return the new length.

// Do not allocate extra space for another array, you must do this in place with constant memory.

// The order of elements can be changed. It doesn't matter what you leave beyond the new length.

// Example:
// Given input array nums = [3,2,2,3], val = 3

// Your function should return length = 2, with the first two elements of nums being 2.
'use strict';
require('chai').should();

function exchange(array, p, q) {
  var temp = array[p];
  array[p] = array[q];
  array[q] = temp;
}
/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
var removeElement = function(nums, val) {
  var l = 0;
  var r = nums.length - 1;

  if (!nums || !nums.length) {
    return 0;
  }

  while (l <= r) {
    if (nums[l] === val) {
      exchange(nums, l, r--);
    } else {
      l++;
    }
  }

  return l;
};

describe('Test', function () {
  it('Should pass', function () {
    console.log(removeElement([], 1));
    console.log(removeElement([1], 1));
    console.log(removeElement([1,1], 1));
    console.log(removeElement([3,2,2,3], 5));
  });
});
