'use strict';

// Given a set of distinct positive integers, find the largest subset such that every pair (Si, Sj)
// of elements in this subset satisfies: Si % Sj = 0 or Sj % Si = 0.

// If there are multiple solutions, return any subset is fine.

// Example 1:

// nums: [1,2,3]

// Result: [1,2] (of course, [1,3] will also be ok)
// Example 2:

// nums: [1,2,4,8]

// Result: [1,2,4,8]

// Solution 1. Refer: https://discuss.leetcode.com/topic/49456/c-solution-with-explanations/2
// Note: Can't use native sort for numbers => can't use nums.sort()
/**
 * @param {number[]} nums
 * @return {number[]}
 */
var largestDivisibleSubset = function(nums) {
  if (!Array.isArray(nums) || nums.length === 0) {
    return [];
  }

  nums.sort((p, q) => parseInt(p, 10) - parseInt(q, 10));

  const len = nums.length;
  const dp = new Array(len);
  const parent = new Array(len);
  let m = 0;
  let mi = 0;
  dp.fill(0);
  parent.fill(0);

  for (let i = len - 1; i >= 0; i--) {
    for (let j = i; j < len; j++) {
      if (nums[j] % nums[i] === 0 && dp[i] < dp[j] + 1) {
        dp[i] = dp[j] + 1;
        parent[i] = j;
      }

      if (dp[i] > m) {
        m = dp[i];
        mi = i;
      }
    }
  }

  const result = [];
  for (let i = 0; i < m; i++) {
    result.push(nums[mi]);
    mi = parent[mi];
  }

  return result;
};

// console.log(largestDivisibleSubset([1, 2, 4, 8]));
console.log(largestDivisibleSubset([1, 2, 4, 8, 16]));
