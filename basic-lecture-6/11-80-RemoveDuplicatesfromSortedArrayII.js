// Follow up for "Remove Duplicates":
// What if duplicates are allowed at most twice?

// For example,
// Given sorted array nums = [1,1,1,2,2,3],

// Your function should return length = 5, with the first five elements of nums being
// 1, 1, 2, 2 and 3. It doesn't matter what you leave beyond the new length.

'use strict';
require('chai').should();

/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
  if (!nums || nums.length < 2) {
    return nums ? nums.length : 0;
  }

  nums.sort((p, q) => {
    return parseInt(p, 10) - parseInt(q, 10);
  });

  let i = 1;
  let j = 1;
  while (i < nums.length) {
    if (nums[i] !== nums[i - 1]) {
      nums[j++] = nums[i++];
    } else {
      nums[j++] = nums[i++];
      while (nums[i] === nums[i - 1]) {
        i++;
      }
    }
  }

  return j;
};

describe('Test', function() {
  it('Should pass', function() {
    console.log(removeDuplicates([1, 1, 1, 2, 2, 2, 2, 2, 3, 3, 3]));
  });
});
