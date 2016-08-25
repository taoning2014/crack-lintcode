'use strict';

// Find the contiguous subarray within an array (containing at least one number) which
// has the largest sum.

// For example, given the array [−2,1,−3,4,−1,2,1,−5,4],
// the contiguous subarray [4,−1,2,1] has the largest sum = 6.

// Solution 1. Substract subarray
/**
 * @param {number[]} nums
 * @return {number}
 */
// var maxSubArray = function(nums) {
//   if (!Array.isArray(nums) || nums.length === 0) {
//     return 0;
//   }

//   let curSum = 0;
//   let curMin = 0;
//   let curMax = 0;
//   for (let i = 0; i < nums.length; i++) {
//     curSum += nums[i];
//     curMax = Math.max(curSum - curMin, curMax);
//     curMin = Math.min(curSum, curMin);
//   }

//   return curMax;
// };

// Solution 2. Refer: http://www.geeksforgeeks.org/largest-sum-contiguous-subarray/
/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function(nums) {
  if (!Array.isArray(nums) || nums.length === 0) {
    return 0;
  }

  let curMax = 0;
  let curSum = 0;
  for (let i = 0; i < nums.length; i++) {
    curSum += nums[i];
    curMax = Math.max(curSum, curMax);
    if (curSum < 0) {
      curSum = 0;
    }
  }

  // if all elements are less than 0, will return 0
  if (curMax === 0) {
    return Math.max.apply(null, nums);
  }

  return curMax;
};

console.log(maxSubArray([-2, 1, -3, 4, -1, 2, 1, -5, 4]));
