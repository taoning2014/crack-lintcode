// Given an array of non-negative integers, you are initially positioned at the first index of the array.

// Each element in the array represents your maximum jump length at that position.

// Your goal is to reach the last index in the minimum number of jumps.

// For example:
// Given array A = [2,3,1,1,4]

// The minimum number of jumps to reach the last index is 2. (Jump 1 step from index
// 0 to 1, then 3 steps to the last index.)
'use strict';
require('chai').should();

// Solution 1. Time our for input [1,1,1,1...];
// Since this is n*n solution, haven't find a better one yet
/**
 * @param {number[]} nums
 * @return {number}
 */
// var jump = function(nums) {
//   // each elements is a value, Number.MAX_VALUE means can't jump to this position
//   // positive value means minimum step to jump to this position
//   var canJumpArray = new Array(nums.length);
//   var i;
//   var j;

//   if (!nums || !nums.length) {
//     return false;
//   }

//   canJumpArray.fill(Number.MAX_VALUE);
//   canJumpArray[0] = 0;
//   for (i = 1; i < nums.length; i++) {
//     for (j = i - 1; j >= 0; j--) {
//       if (canJumpArray[j] !== Number.MAX_VALUE && (i - j <= nums[j])) {
//         canJumpArray[i] = Math.min(canJumpArray[j] + 1, canJumpArray[i]);
//       }
//     }
//   }

//   return canJumpArray[nums.length - 1];
// };


// Solutioin 2.
// var jump = function(nums) {
//   let needJumpTimes = []

//   if (!nums || !nums.length) {
//     return false;
//   }

//   for (let i = 0; i < nums.length; i++) {
//     needJumpTimes[i] = i;
//   }

//   for (let i = 0; i < nums.length; i++) {
//     for (let j = 1; j <= nums[i] && j + i < nums.length; j++) {
//       needJumpTimes[i + j] = Math.min(needJumpTimes[i + j], needJumpTimes[i] + 1);
//     }
//   }

//   return needJumpTimes[nums.length - 1];
// };

// Solution 3. Refer: https://leetcode.com/discuss/90523/easy-understand-o-n-time-o-1-space-code
var jump = function(nums) {
  if (!nums || !nums.length) {
    return -1;
  }

  if (nums.length === 1) {
    return 0;
  }

  let curJump = nums[0];
  let nextJump = nums[0];
  let step = 1;

  for (let i = 0; i < nums.length; i++) {
    if (curJump < i) {
      curJump = nextJump;
      step++;
    }

    if (nextJump < i + nums[i]) {
      nextJump = i + nums[i];
    }

    if (curJump >= nums.length - 1) {
      return step;
    }
  }

  return -1;
};

describe('Test', function() {
  it('Should pass', function() {
    console.log(jump([2,3,1,1,4]));
    console.log(jump([4,3,1,1,4]));
  })
})
