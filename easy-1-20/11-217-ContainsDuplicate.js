// Given an array of integers, find if the array contains any duplicates.

// Your function should return true if any value appears at least twice in the array,
// and it should return false if every element is distinct.
'use strict';
require('chai').should();


// @param {number[]} nums
// @return {boolean}
var containsDuplicate = function(nums) {
  var obj = {};

  if (!nums) {
    return false;
  }

  for (var i = 0; i < nums.length; i++) {
    if (!obj[nums[i]]) {
      obj[nums[i]] = true;
    } else {
      return true;
    }
  }

  return false;
};

describe('Test', function() {
  it('empty array should return false', function() {
    containsDuplicate(null).should.be.false;
    containsDuplicate([]).should.be.false;
  });

  it('empty array should return false', function() {
    containsDuplicate([1, 2, 3, 4]).should.be.false;
  });

  it('empty array should return false', function() {
    containsDuplicate([1, 4, 3, 4]).should.be.true;
  });
});
