// You are a professional robber planning to rob houses along a street.
// Each house has a certain amount of money stashed, the only constraint
// stopping you from robbing each of them is that adjacent houses have security
// system connected and it will automatically contact the police if two adjacent houses
// were broken into on the same night.

// Given a list of non-negative integers representing the amount of money of each house,
// determine the maximum amount of money you can rob tonight without alerting the police.

'use strict';
require('chai').should();

// Solution 1. Wrong。只想到了从开始位置或者开始位置的下个位置开始，并且一直隔一个，偷道最后，不能pass[2,1,1,2]
/**
 * @param {number[]} nums
 * @return {number}
 */
// var rob = function(nums) {
//   var way1 = 0;
//   var way2 = 0;
//   var i;

//   if (!nums.length) {
//     return 0;
//   }

//   if (nums.length === 1) {
//     return nums[0];
//   }

//   // way 1
//   for (i = 0; i < nums.length; i += 2) {
//     way1 += nums[i];
//   }

//   // way 2
//   for (i = 1; i < nums.length; i += 2) {
//     way2 += nums[i];
//   }

//   return Math.max(way1, way2);
// };

// Solution 2
var rob = function(nums) {
  var sumArray = [];
  var i;
  var j;

  if (!nums.length) {
    return 0;
  }

  for (i = 0; i < nums.length; i++) {
    sumArray[i] = nums[i];
  }

  for (i = 1; i < nums.length; i++) {
    for (j = 0; j < i - 1; j++) {
      if (sumArray[i] < sumArray[j] + nums[i]) {
        sumArray[i] = sumArray[j] + nums[i];
      }
    }
  }

  return Math.max.apply(null, sumArray);
};

describe('Test', function() {
  it('Should pass', function() {
    rob([]).should.equal(0);
  });

  it('Should pass', function() {
    rob([1]).should.equal(1);
  });

  it('Should pass', function() {
    rob([1, 10]).should.equal(10);
  });

  it('Should pass', function() {
    rob([1, 10, 1]).should.equal(10);
  });

  it('Should pass', function() {
    rob([5, 6, 2]).should.equal(7);
  });

  it('Should pass', function() {
    rob([2, 1, 1, 2]).should.equal(4);
  });
});
