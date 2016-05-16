// Given an array nums, write a function to move all 0's to the end of it while maintaining the relative order
// of the non-zero elements.

// For example, given nums = [0, 1, 0, 3, 12], after calling your function, nums should be [1, 3, 12, 0, 0].

// Note:
// You must do this in-place without making a copy of the array.
// Minimize the total number of operations.

// ====
// Note:
// 1, deep equal in chai for assertions for array
// 2, use !falsy value to convert it to false
// 3, use of Array.splice: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/splice

// @param {number[]} nums
// @return {void} Do not return anything, modify nums in-place instead.
'use strict';
var should = require('chai').should();

var moveZeroes = function(nums) {
  if (!nums) {
    return;
  }

  var count = 0;
  var index = 0;
  while (index < nums.length) {
    if (nums[index] === 0) {
      nums.splice(index, 1);
      count++;
      continue;
    }
    index++;
  }
  for (var i = 0; i < count; i++) {
    nums.push(0);
  }
};

describe('Test', function() {
  var array0 = [];
  var array1 = [0];
  var array2 = [0, 1];
  var array3 = [0, 0, 1];
  var array4 = [1, 0, 2, 3, 0, 0];

  it('Should Pass 0', function() {
    moveZeroes(array0);
    array0.should.to.be.empty;
  });

  it('Should Pass 1', function() {
    moveZeroes(array1);
    array1.should.deep.equal([0]);
  });

  it('Should Pass 2', function() {
    moveZeroes(array2);
    array2.should.deep.equal([1, 0]);
  });

  it('Should Pass 3', function() {
    moveZeroes(array3);
    array3.should.deep.equal([1, 0, 0]);
  });

  it('Should Pass 4', function() {
    moveZeroes(array4);
    array4.should.deep.equal([1, 2, 3, 0, 0, 0]);
  });
});
