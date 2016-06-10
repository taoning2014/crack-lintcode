// Find the contiguous subarray within an array (containing at least one number) which has the largest sum.

// For example, given the array [−2,1,−3,4,−1,2,1,−5,4],
// the contiguous subarray [4,−1,2,1] has the largest sum = 6.

// More practice:
// If you have figured out the O(n) solution, try coding another solution using the divide and conquer
// approach, which is more subtle.
'use strict';
require('chai').should();

/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function(nums) {
  var curSum = 0;
  var minSum = 0;
  var curMax = Number.NEGATIVE_INFINITY;
  var i;

  if (!nums || !nums.length) {
    return NaN;
  }

  for (i = 0; i < nums.length; i++) {
    curSum += nums[i];
    // BUG: can't change the sequence of the following 2 lines
    curMax = Math.max(curSum - minSum, curMax);
    minSum = Math.min(minSum, curSum);
  }

  return curMax;
};

describe('Test', function() {
  it('Should pass', function() {
    console.log(maxSubArray([-2,1,-3,4,-1,2,1,-5,4]));
  });
});
