'use strict';

/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function(nums) {
  if (!Array.isArray(nums)) {
    return 0;
  }

  let curMax = Number.NEGATIVE_INFINITY;
  let curSum = 0;
  for (let i = 0; i < nums.length; i++) {
    curSum += nums[i];
    curMax = Math.max(curSum, curMax);
    if (curSum < 0) {
      curSum = 0;
    }
  }

  return curMax;
};

console.log(maxSubArray([-2, -1, -3]));
console.log(maxSubArray([-2, 1, -3, 4, -1, 2, 1, -5, 4]));
