// Given an array with n objects colored red, white or blue, sort them so that objects of
// the same color are adjacent, with the colors in the order red, white and blue.

// Here, we will use the integers 0, 1, and 2 to represent the color red, white, and blue respectively.

// Note:
// You are not suppose to use the library's sort function for this problem.

// Follow up:
// A rather straight forward solution is a two-pass algorithm using counting sort.
// First, iterate the array counting number of 0's, 1's, and 2's, then overwrite array
// with total number of 0's, then 1's and followed by 2's.

// Could you come up with an one-pass algorithm using only constant space?
'use strict';
require('chai').should();

function exchange(nums, i, j) {
  let temp = nums[i];
  nums[i] = nums[j];
  nums[j] = temp;
}
/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var sortColors = function(nums) {
  if (!nums) {
    return;
  }

  let l = 0;
  let i = 0;
  let r = nums.length - 1;

  while (i <= r) {
    if (nums[i] === 0) {
      exchange(nums, i++, l++);
    } else if (nums[i] === 2) {
      exchange(nums, i, r--);
    } else {
      i++;
    }
  }

};

describe('Test', function() {
  it('Should pass', function() {
    console.log(sortColors([0, 1, 0, 0, 1, 1, 2]));
  });
});
