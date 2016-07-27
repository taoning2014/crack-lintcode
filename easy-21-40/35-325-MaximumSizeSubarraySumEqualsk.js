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

'use strict';
require('chai').should();

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
// var maxSubArrayLen = function(nums, k) {
//   var i;
//   var j;
//   var curSum;
//   var curMaxLen = 0;

//   if (!nums.length) {
//     return curMaxLen;
//   }

//   for (i = 0; i < nums.length; i++) {
//     curSum = 0;
//     for (j = i; j < nums.length; j++) {
//       curSum += nums[j];
//       if (curSum === k && j - i + 1 > curMaxLen) {
//         curMaxLen = j - i + 1;
//       }
//     }
//   }

//   return curMaxLen;
// };

// Solution, refer: https://discuss.leetcode.com/topic/33259/o-n-super-clean-9-line-java-solution-with-hashmap
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var maxSubArrayLen = function(nums, k) {
  if (!Array.isArray(nums) || !Number.isInteger(k)) {
    return 0;
  }

  const map = new Map();
  let curSum = 0;
  let curMax = 0;
  for (let i = 0; i < nums.length; i++) {
    curSum += nums[i];
    if (curSum === k) {
      curMax = i + 1;
    } else if (map.has(curSum - k)) {
      curMax = Math.max(curMax, i - map.get(curSum - k));
    }
    if (!map.has(curSum)) {
      map.set(curSum, i);
    };
  }

  return curMax;
}

describe('Test', function() {
  it('Should pass', function() {
    maxSubArrayLen([1, -1, 5, -2, 3], 3).should.equal(4);
    maxSubArrayLen([-2, -1, 2, 1], 1).should.equal(2)
    maxSubArrayLen([1, -1, 5, -2, 3], -10).should.equal(0);
  });
});
