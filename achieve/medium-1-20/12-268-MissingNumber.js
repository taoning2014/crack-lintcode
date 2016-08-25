// Given an array containing n distinct numbers taken from 0, 1, 2, ..., n, find the one that is missing from the array.

// For example,
// Given nums = [0, 1, 3] return 2.

// Note:
// Your algorithm should run in linear runtime complexity. Could you implement it using only constant extra space complexity?

// BUG: Array is not sorted

'use strict';
require('chai').should();

// Solution 1. Not linear.
/**
 * @param {number[]} nums
 * @return {number}
 */
// var missingNumber = function(nums) {
//   var i;

//   if (!nums) {
//     return NaN;
//   }

//   nums.sort(function(p, q){
//     return parseInt(p, 10) - parseInt(q, 10);
//   });

//   for (i = 0; i < nums.length - 1; i++) {
//     if (nums[i + 1] - nums[i] !== 1) {
//       return i + 1;
//     }
//   }

//   if (nums[0] !== 0) {
//     return 0;
//   } else {
//     return nums.length;
//   }

// };

// Solution 2. Linear. Awesome smart: https://leetcode.com/discuss/103553/xor-java-solution
/**
 * @param {number[]} nums
 * @return {number}
 */
var missingNumber = function(nums) {
  var missing = 0;
  var i;

  if (!nums) {
    return NaN;
  }

  for (i = 0; i < nums.length; i++) {
    missing ^= i;
    missing ^= nums[i];
  }

  missing ^= nums.length;

  return missing;
};

describe('Test', function() {
  it('Should pass', function() {
    console.log(missingNumber(''));
    console.log(missingNumber([]));
    console.log(missingNumber([0]));
    console.log(missingNumber([1, 0]));

    // console.log(missingNumber([1, 2, 3]));
    // console.log(missingNumber([0, 1, 2]));
    // console.log(missingNumber([0, 1, 3]));
    // console.log(missingNumber([0, 1, 2, 4]));
  });
});
