'use strict';

// ========================================================================
// Time:   5min
// Submit: 2(line 15 should include 0)
// ========================================================================

// Given an integer, write a function to determine if it is a power of three.

/**
 * @param {number} n
 * @return {boolean}
 */
var isPowerOfThree = function(n) {
  if (!Number.isInteger(n) || n <= 0) {
    return false;
  }

  while (n !== 1) {
    if (n % 3 !== 0) {
      return false;
    }

    n /= 3;
  }

  return true;
};
