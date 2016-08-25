'use strict';

// ========================================================================
// Time:   3min
// Submit: 1
// ========================================================================

/**
 * @constructor
 * @param {number[]} nums
 */
var NumArray = function(nums) {
  let curSum = 0;
  this.subArray = [];

  for (let i = 0; i < nums.length; i++) {
    curSum += nums[i];
    this.subArray[i] = curSum;
  }

};

/**
 * @param {number} i
 * @param {number} j
 * @return {number}
 */
NumArray.prototype.sumRange = function(i, j) {
  if (i === 0) {
    return this.subArray[j];
  }

  return this.subArray[j] - this.subArray[i - 1];
};


/**
 * Your NumArray object will be instantiated and called as such:
 * var numArray = new NumArray(nums);
 * numArray.sumRange(0, 1);
 * numArray.sumRange(0, 2);
 */
