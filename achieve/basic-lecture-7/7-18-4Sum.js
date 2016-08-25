// Given an array S of n integers, are there elements a, b, c, and d in S
// such that a + b + c + d = target? Find all unique quadruplets in the array
// which gives the sum of target.

// Note: The solution set must not contain duplicate quadruplets.

// For example, given array S = [1, 0, -1, 0, -2, 2], and target = 0.

// A solution set is:
// [
//   [-1,  0, 0, 1],
//   [-2, -1, 1, 2],
//   [-2,  0, 0, 2]
// ]
'use strict';
require('chai').should();
// -2 -1 0 0 1 2
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[][]}
 */
var fourSum = function(nums, target) {
  const result = [];

  if (!nums || nums.length < 4 || !Number.isInteger(target)) {
    return result;
  }

  nums.sort((p, q) => {
    return parseInt(p, 10) - parseInt(q, 10);
  });

  for (let i = 0; i < nums.length - 3; i++) {
    if (i > 0 && nums[i] === nums[i - 1]) {
      continue;
    }

    for (let j = i + 1; j < nums.length - 2; j++) {
      if (j > i + 1 && nums[j] === nums[j - 1]) {
        continue;
      }

      let l = j + 1;
      let r = nums.length - 1;
      while (l < r) {
        let curSum = nums[i] + nums[j] + nums[l] + nums[r];
        if (curSum === target) {
          if (l > j + 1 && nums[l] === nums[l - 1]) {
            l++;
            continue;
          }

          if (r < nums.length - 1 && nums[r] === nums[r + 1]) {
            r--;
            continue;
          }

          result.push([nums[i], nums[j], nums[l], nums[r]]);
          l++;
          r--;
        } else if (curSum < target) {
          l++;
        } else {
          r--;
        }
      }
    }
  }

  return result;
};

describe('Test', function() {
  it('Should pass', function() {
    console.log(fourSum([1, 0, -1, 0, -2, 2], 0));
  });
});
