// Given an array of size n, find the majority element.
// The majority element is the element that appears more than ⌊ n/2 ⌋ times.

// You may assume that the array is non-empty and the majority element always exist in the array.
// ====
// Note:
// 1, Using 'ForInStatement' is not allowed, so

'use strict';
require('chai').should();

// @param {number[]} nums
// @return {number}
var majorityElement = function(nums) {
  var obj = {};
  var result;

  for (var i = 0; i < nums.length; i++) {
    if (!obj[nums[i]]) {
      obj[nums[i]] = 1;
    } else {
      obj[nums[i]]++;
    }
  }

  // for (var key in obj) {
  //   if (obj.hasOwnProperty(key) && obj[key] > (nums.length / 2)) {
  //     return key;
  //   }
  // }
  Object.keys(obj).forEach(function(key) {
    if (obj[key] > (nums.length / 2)) {
      result = key;
    }
  });

  return parseInt(result);
};

describe('Test', function() {
  it('Should Pass', function() {
    majorityElement([1, 2, 3, 3, 3, 3, 3, 3, 3, 3, 3, 4, 5, 6]).should.equal(3);
  });
});