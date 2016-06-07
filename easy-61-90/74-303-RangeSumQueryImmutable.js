// Given an integer array nums, find the sum of the elements between indices i and j (i ≤ j), inclusive.

// Example:
// Given nums = [-2, 0, 3, -5, 2, -1]

// sumRange(0, 2) -> 1
// sumRange(2, 5) -> -1
// sumRange(0, 5) -> -3
// Note:
// You may assume that the array does not change.
// There are many calls to sumRange function.
'use strict';
require('chai').should();

// Solution 1. Time out
/**
 * @constructor
 * @param {number[]} nums
 */
// var NumArray = function(nums) {
//   var i;

//   this.record = [];
//   this.nums = nums;

//   for (i = 0; i < nums.length; i++) {
//     this.record[i] = [];
//   }

// };

/**
 * @param {number} i
 * @param {number} j
 * @return {number}
 */
// NumArray.prototype.sumRange = function(i, j) {
//   var sum = 0;
//   var k;

//   if (this.record[i][j]) {
//     return this.record[i][j];
//   }

//   for (k = i; k <= j; k++) {
//     sum += this.nums[k];
//   }

//   this.record[i][j] = sum;

//   return sum;
// };


// Solution 2. Calculate all nums when init
// Still Time out, can't wait to see what is the better solution!
/**
 * @constructor
 * @param {number[]} nums
 */
// var NumArray = function(nums) {
//   var i;
//   var j;

//   this.record = [];

//   for (i = 0; i < nums.length; i++) {
//     this.record[i] = [];
//     this.record[i][i] = nums[i];
//   }

//   for (i = 0; i < nums.length; i++) {
//     for (j = i + 1; j < nums.length; j++) {
//       this.record[i][j] = this.record[i][j-1] + nums[j];
//     }
//   }

//   console.log('Construct matrix: ');
//   console.log(this.record);
// };

/**
 * @param {number} i
 * @param {number} j
 * @return {number}
 */
// NumArray.prototype.sumRange = function(i, j) {
//   return this.record[i][j];
// };


// Solution 3. From: https://leetcode.com/discuss/98846/java-concise-solution-without-if
/**
 * @constructor
 * @param {number[]} nums
 */
var NumArray = function(nums) {
  var i;

  this.record = [];
  this.record[0] = nums[0];

  for (i = 1; i < nums.length; i++) {
    this.record[i] = this.record[i - 1] + nums[i];
  }

};

/**
 * @param {number} i
 * @param {number} j
 * @return {number}
 */
NumArray.prototype.sumRange = function(i, j) {
  if (i === 0) {
    return this.record[j];
  } else {
    return this.record[j] - this.record[i - 1];
  }
};
/**
 * Your NumArray object will be instantiated and called as such:
 * var numArray = new NumArray(nums);
 * numArray.sumRange(0, 1);
 * numArray.sumRange(0, 2);
 */
describe('Test', function() {
  it('Should pass', function() {
    var nums = [-2, 0, 3];
    var numArray = new NumArray(nums);
    console.log(numArray.sumRange(0, 1));
    console.log(numArray.sumRange(0, 2));
    console.log(numArray.sumRange(1, 2));
  });
});
