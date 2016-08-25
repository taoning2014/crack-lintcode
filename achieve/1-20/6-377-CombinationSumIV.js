'use strict';

// Given an integer array with all positive numbers and no duplicates, find the number of possible combinations that add up to a positive integer target.

// Example:

// nums = [1, 2, 3]
// target = 4

// The possible combination ways are:
// (1, 1, 1, 1)
// (1, 1, 2)
// (1, 2, 1)
// (1, 3)
// (2, 1, 1)
// (2, 2)
// (3, 1)

// Note that different sequences are counted as different combinations.

// Therefore the output is 7.
// Follow up:
// What if negative numbers are allowed in the given array?
// How does it change the problem?
// What limitation we need to add to the question to allow negative numbers?

// Solution 1: Time out
// var result;

// function _combinationSum4(nums, target, curSum) {
//   if (curSum === target) {
//     result++;
//     return;
//   }

//   if(curSum > target) {
//     return;
//   }

//   for (let i = 0; i < nums.length; i++) {
//     _combinationSum4(nums, target, curSum + nums[i]);
//   }
// }

// /**
//  * @param {number[]} nums
//  * @param {number} target
//  * @return {number}
//  */
// var combinationSum4 = function(nums, target) {
//   if (!Array.isArray(nums)) {
//     return 0;
//   }

//   result = 0;
//   _combinationSum4(nums, target, 0);
//   return result;
// };

// Solution 2:
function getSum(nums, target, dp) {
  if (dp.has(target)) {
    return dp.get(target);
  }

  let curSum = 0;
  for (let i = 0; i < nums.length; i++) {
    if (target - nums[i] >= 0) {
      curSum += getSum(nums, target - nums[i], dp);
    }
  }

  dp.set(target, curSum);
  return curSum;
}

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var combinationSum4 = function(nums, target) {
  if (!Array.isArray(nums)) {
    return 0;
  }

  const dp = new Map();
  dp.set(0, 1);
  return getSum(nums, target, dp);
};

console.log(combinationSum4([4,2,1], 10));
