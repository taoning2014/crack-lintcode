// Given an array of numbers nums, in which exactly two elements appear only once and all the
// other elements appear exactly twice. Find the two elements that appear only once.

// For example:

// Given nums = [1, 2, 1, 3, 2, 5], return [3, 5].

// Note:
// The order of the result is not important. So in the above example, [5, 3] is also correct.
// Your algorithm should run in linear runtime complexity. Could you implement it using only
// constant space complexity?
'use strict';
require('chai').should();

function dec2bin(dec) {
  return (dec >>> 0).toString(2);
}

function findFlag(xor) {
  var bits = dec2bin(xor).split('');
  return 1 << (bits.length - 1);
}
/**
 * @param {number[]} nums
 * @return {number[]}
 */
var singleNumber = function(nums) {
  var xor = 0;
  var num1 = 0;
  var num2 = 0;
  var i;
  var flag;

  if (!nums) {
    return [NaN, NaN];
  }

  for (i = 0; i < nums.length; i++) {
    xor ^= nums[i];
  }

  flag = findFlag(xor);

  for (i = 0; i < nums.length; i++) {
    if (flag & nums[i]) {
      num1 ^= nums[i];
    } else {
      num2 ^= nums[i];
    }
  }

  return [num1, num2];
};

describe('Test', function() {
  it('Should pass', function() {
    console.log(singleNumber([1, 2, 1, 3, 2, 5]));
    console.log(singleNumber([1, 2, 1, 0, 2, 5]));
  });
});
