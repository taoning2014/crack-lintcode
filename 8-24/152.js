'use strict';
// Solution 1.
// Note: Wrong understanding of the problem. 'contiguous subarray' means
//  the index is contiguous, not the value in the neighboring elements
/**
 * @param {number[]} nums
 * @return {number}
 */
// var maxProduct = function(nums) {
//   if (!Array.isArray(nums) || nums.length === 0) {
//     return NaN;
//   }

//   if (nums.length === 1) {
//     return nums[0];
//   }

//   let curMax = Number.NEGATIVE_INFINITY;
//   for (let i = 0; i < nums.length; i++) {
//     let cur = nums[i];
//     for (let j = i; j < nums.length - 1; j++) {
//       if (nums[j + 1] - nums[j] === 1) {
//         cur *= nums[j + 1];
//       } else {
//         curMax = Math.max(cur, curMax);
//         break;
//       }
//     }

//     curMax = Math.max(cur, curMax);
//   }

//   return curMax;
// };

// Solution 2.
// refer: https://discuss.leetcode.com/topic/51712/2-passes-scan-beats-99/2
var maxProduct = function(nums) {
  if (!Array.isArray(nums) || nums.length === 0) {
    return NaN;
  }

  let curMax = Number.NEGATIVE_INFINITY;
  let product = 1;

  for (let i = 0; i < nums.length; i++) {
    product *= nums[i];
    curMax = Math.max(product, curMax);

    if (product === 0) {
      product = 1;
    }
  }

  product = 1;
  for (let i = nums.length - 1; i >= 0; i--) {
    product *= nums[i];
    curMax = Math.max(product, curMax);

    if (product === 0) {
      product = 1;
    }
  }

  return curMax;
};

console.log(maxProduct([2, 3, -2, 4]));
