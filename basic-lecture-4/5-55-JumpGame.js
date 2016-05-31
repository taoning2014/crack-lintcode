// Given an array of non-negative integers, you are initially positioned at the first index of the array.

// Each element in the array represents your maximum jump length at that position.

// Determine if you are able to reach the last index.

// For example:
// A = [2,3,1,1,4], return true.

// A = [3,2,1,0,4], return false.
'use strict';
require('chai').should();

/**
 * @param {number[]} nums
 * @return {boolean}
 */
var canJump = function(nums) {
  // each elements is a boolean, true means it can jump to this position
  var canJumpArray = new Array(nums.length);
  var i;
  var j;

  if (!nums || !nums.length) {
    return false;
  }

  canJumpArray.fill(false);
  canJumpArray[0] = true;
  for (i = 1; i < nums.length; i++) {
    for (j = i - 1; j >= 0; j--) {
      if (canJumpArray[j] && (i - j <= nums[j])) {
        canJumpArray[i] = true;
        break;
      }
    }
  }

  return canJumpArray[nums.length - 1];
};

describe('Test', function () {
  it('Should pass', function () {
    console.log(canJump([]));
    console.log(canJump([2]));
    console.log(canJump([2,3,1,1,4]));
    console.log(canJump([3,2,1,0,4]));
  })
})
