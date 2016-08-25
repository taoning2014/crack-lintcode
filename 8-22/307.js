'use strict';

// Note: 'this' didn't refer to the object in helper function

// Solution 1. Time out
/*
function numberInRange(i, length) {
  if (!Number.isInteger(i) || i < 0 || i >= length) {
    return false;
  }

  return true;
}

function calculateSubArraySum(nums, subArraySum, start) {
  let curSum;
  if (start === 0) {
    curSum = 0;
  } else {
    curSum = subArraySum[start - 1];
  }

  for (let i = start; i < nums.length; i++) {
    curSum += nums[i];
    subArraySum[i] = curSum;
  }
}

var NumArray = function(nums) {
  if (!Array.isArray(nums)) {
    nums = [];
  }

  this.nums = nums;
  this.subArraySum = [];

  calculateSubArraySum(this.nums, this.subArraySum, 0);
};

NumArray.prototype.update = function(i, val) {
  if (!numberInRange(i, this.nums.length) || !Number.isInteger(val)) {
    return;
  }

  this.nums[i] = val;

  calculateSubArraySum(this.nums, this.subArraySum, i);
};

NumArray.prototype.sumRange = function(i, j) {
  if (!numberInRange(i, this.nums.length) || !numberInRange(j, this.nums.length) || i > j) {
    return;
  }

  // TODO: consider i === j;

  if (i === 0) {
    return this.subArraySum[j];
  }

  return this.subArraySum[j] - this.subArraySum[i - 1];
};
*/

// Solution 2. Still time out
// Note: Instead of update the subarray, will cost is large, keep an update table, use the origin
//  subarray, then loop through update table to modify the result before return

function inRange(key, l, r) {
  return key >= l && key <= r;
}

function checkInput(i, length) {
  if (!Number.isInteger(i) || i < 0 || i >= length) {
    return false;
  }

  return true;
}

function calculateSubArraySum(nums, subArraySum) {
  let curSum = 0;
  for (let i = 0; i < nums.length; i++) {
    curSum += nums[i];
    subArraySum[i] = curSum;
  }
}

function updateSum(map, i, j, curSum) {
  for (let key of map.keys()) {
    if (inRange(key, i, j)) {
      curSum += parseInt(map.get(key));
    }
  }

  return curSum;
}

/**
 * @constructor
 * @param {number[]} nums
 */
var NumArray = function(nums) {
  if (!Array.isArray(nums)) {
    nums = [];
  }

  this.nums = nums;
  this.subArraySum = [];
  // key: position, value: update value
  this.updateHistory = new Map();

  calculateSubArraySum(this.nums, this.subArraySum);
};

/**
 * @param {number} i
 * @param {number} val
 * @return {void}
 */
NumArray.prototype.update = function(i, val) {
  if (!checkInput(i, this.nums.length) || !Number.isInteger(val)) {
    return;
  }

  const diff = val - this.nums[i];
  // BUG: should directly assign diff instead of add it
  this.updateHistory.set(i, diff);

  // if (this.updateHistory.has(i)) {
  //   this.updateHistory.set(i, this.updateHistory.get(i) + diff);
  // } else {
  //   this.updateHistory.set(i, diff);
  // }
};

/**
 * @param {number} i
 * @param {number} j
 * @return {number}
 */
NumArray.prototype.sumRange = function(i, j) {
  if (!checkInput(i, this.nums.length) || !checkInput(j, this.nums.length) || i > j) {
    return;
  }

  let curSum;
  if (i === 0) {
    curSum = this.subArraySum[j];
  } else {
    curSum = this.subArraySum[j] - this.subArraySum[i - 1];
  }

  return updateSum(this.updateHistory, i, j, curSum);
};

var nums = [7, 2, 7, 0, 2];
var numArray = new NumArray(nums);
numArray.update(4,6);
numArray.update(0,2);
numArray.update(0,9);
console.log(numArray.sumRange(4,4));
numArray.update(3,8);
console.log(numArray.sumRange(0,4));
numArray.update(4,1);
console.log(numArray.sumRange(0,3));
console.log(numArray.sumRange(0,4));
numArray.update(0,4);
