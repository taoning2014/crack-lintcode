'use strict';

// ========================================================================
// Time:   5min
// Submit: 3
//  1, time out
//  2, when use hashmap, haven't consider curSum === k
// ========================================================================

// Given an array nums and a target value k, find the maximum length of a subarray
// that sums to k. If there isn't one, return 0 instead.

// Example 1:
// Given nums = [1, -1, 5, -2, 3], k = 3,
// return 4. (because the subarray [1, -1, 5, -2] sums to 3 and is the longest)

// Example 2:
// Given nums = [-2, -1, 2, 1], k = 1,
// return 2. (because the subarray [-1, 2] sums to 1 and is the longest)

// Follow Up:
// Can you do it in O(n) time?

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var maxSubArrayLen = function(nums, k) {
  if (!Array.isArray(nums) || !Number.isInteger(k)) {
    return 0;
  }

  const record = new Map();
  let curMax = 0;
  let curSum = 0;
  for (let i = 0; i < nums.length; i++) {
    curSum += nums[i];
    const diff = curSum - k;
    if (curSum === k) {
      curMax = i + 1
    } else if (record.has(diff)) {
      curMax = Math.max(i - record.get(diff), curMax);
    }

    if (!record.has(curSum)) {
      record.set(curSum, i);
    }
  }

  return curMax;
};

console.log(maxSubArrayLen([1, -1, 5, -2, 3], 3));
console.log(maxSubArrayLen([-2, -1, 2, 1], 1));
