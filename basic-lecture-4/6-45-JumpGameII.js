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
var jump = function(nums) {
  // each elements is a value, Number.MAX_VALUE means can't jump to this position
  // positive value means minimum step to jump to this position
  var canJumpArray = new Array(nums.length);
  var i;
  var j;

  if (!nums || !nums.length) {
    return false;
  }

  canJumpArray.fill(Number.MAX_VALUE);
  canJumpArray[0] = 0;
  for (i = 1; i < nums.length; i++) {
    for (j = i - 1; j >= 0; j--) {
      if (canJumpArray[j] !== Number.MAX_VALUE && (i - j <= nums[j])) {
        canJumpArray[i] = Math.min(canJumpArray[j] + 1, canJumpArray[i]);
      }
    }
  }

  return canJumpArray[nums.length - 1];
};

describe('Test', function() {
  it('Should pass', function() {
    console.log(jump([]));
    console.log(jump([5]));
    console.log(jump([2, 2]));
    console.log(jump([2, 3, 1, 1, 4]));
  })
})
