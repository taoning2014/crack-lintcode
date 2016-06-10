// Given an array S of n integers, are there elements a, b, c in
// S such that a + b + c = 0? Find all unique triplets in the array
// which gives the sum of zero.

// Note: The solution set must not contain duplicate triplets.

// For example, given array S = [-1, 0, 1, 2, -1, -4],

// A solution set is:
// [
//   [-1, 0, 1],
//   [-1, -1, 2]
// ]
'use strict';
require('chai').should();

/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function(nums) {
  const result = [];

  if (!nums || nums.length < 3) {
    return result;
  }

  nums.sort((p, q) => {
    return parseInt(p, 10) - parseInt(q, 10);
  });

  for (let i = 0; i < nums.length - 2; i++) {
    if (i > 0 && nums[i] === nums[i - 1]) {
      continue;
    }

    let l = i + 1;
    let r = nums.length - 1;
    while (l < r) {
      let curSum = nums[i] + nums[l] + nums[r];
      if (curSum === 0) {
        if (l > i + 1 && nums[l] === nums[l - 1]) {
          l++;
          continue;
        }

        if (r < nums.length - 1 && nums[r] === nums[r + 1]) {
          r--;
          continue;
        }
        result.push([nums[i], nums[l], nums[r]]);
        l++;
        r--;
      } else if (curSum < 0) {
        l++;
      } else {
        r--;
      }
    }
  }

  return result;
};

describe('Test', function() {
  it('Should pass', function() {
    // console.log(threeSum([-1, 0, 1, 2, -1, -4]));
    console.log(threeSum([-2, 0, 0, 2, 2]));
  });
});
