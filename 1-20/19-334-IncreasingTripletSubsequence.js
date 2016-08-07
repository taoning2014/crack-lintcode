'use strict';

// Given an unsorted array return whether an increasing subsequence of length 3 exists or not in the array.

// Formally the function should:
// Return true if there exists i, j, k
// such that arr[i] < arr[j] < arr[k] given 0 ≤ i < j < k ≤ n-1 else return false.
// Your algorithm should run in O(n) time complexity and O(1) space complexity.

// Examples:
// Given [1, 2, 3, 4, 5],
// return true.

// Given [5, 4, 3, 2, 1],
// return false.
// 5 7 1 8
// refer: https://discuss.leetcode.com/topic/37281/clean-and-short-with-comments-c

/**
 * @param {number[]} nums
 * @return {boolean}
 */
var increasingTriplet = function(nums) {
  if (!Array.isArray(nums) || nums.length < 3) {
    return false;
  }

  let small = Number.POSITIVE_INFINITY;
  let mid = Number.POSITIVE_INFINITY;
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] <= small) {
      small = nums[i]
    } else if (nums[i] <= mid) {
      mid = nums[i]
    } else {
      return true;
    }
  }

  return false;
};

console.log(increasingTriplet([1, 2, 3, 4, 5]));
