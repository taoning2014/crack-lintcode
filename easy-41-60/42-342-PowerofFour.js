// Given an integer (signed 32 bits), write a function to check whether it is a power of 4.

// Example:
// Given num = 16, return true. Given num = 5, return false.

// Follow up: Could you solve it without loops/recursion?

// =====
// Note:
// 1，好好理解题意，power of 4怎么会有－64？
// 2, 考虑特殊情况：0，1，－1
'use strict';
require('chai').should();

/**
 * @param {number} num
 * @return {boolean}
 */
var isPowerOfFour = function(num) {

  if (!Number.isInteger(num) || num <= 0) {
    return false;
  }

  while (num !== 1) {
    if (num % 4 !== 0) {
      return false;
    }
    num /= 4;
  }

  return true;
};

describe('Test', function () {
  it('Should pass', function () {
    console.log(isPowerOfFour());
    console.log(isPowerOfFour(3));
    console.log(isPowerOfFour(4));
    console.log(isPowerOfFour(64));
    console.log(isPowerOfFour(-16));
  })
})
