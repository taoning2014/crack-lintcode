// Given an array S of n integers, find three integers in S such that the sum is closest
// to a given number, target. Return the sum of the three integers. You may assume that
// each input would have exactly one solution.

//     For example, given array S = {-1 2 1 -4}, and target = 1.

//     The sum that is closest to the target is 2. (-1 + 2 + 1 = 2).

'use strict';
require('chai').should();
// -3 0 1 2   1
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var threeSumClosest = function(nums, target) {
  let minDiff = Number.MAX_VALUE;
  let curSum;
  let result;

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
      curSum = nums[i] + nums[l] + nums[r];
      if (minDiff > Math.abs(target - curSum)) {
        minDiff = Math.abs(target - curSum);
        result = curSum;
      }

      if (curSum < target) {
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
    console.log(threeSumClosest([-4, -1, 1, 2], 1));
    console.log(threeSumClosest([1, 1, 1, 0], -100));
    console.log(threeSumClosest([0, 2, 1, -3], 1));
    console.log(threeSumClosest([1, 1, -1, -1, 3], -1));
  });
});
