'use strict';

// ========================================================================
// Time:   5min
// Submit: 1
// ========================================================================

// Given an integer (signed 32 bits), write a function to check whether it is a power of 4.

// Example:
// Given num = 16, return true. Given num = 5, return false.

// Follow up: Could you solve it without loops/recursion?

/**
 * @param {number} num
 * @return {boolean}
 */
var isPowerOfFour = function(num) {
  if (!Number.isInteger(num) || num < 1) {
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
