'use strict';

// ========================================================================
// Time:   5min
// Submit: 1
// ========================================================================

// Given an integer, write a function to determine if it is a power of two.

/**
 * @param {number} n
 * @return {boolean}
 */
var isPowerOfTwo = function(n) {
  if(!Number.isInteger(n) || n <= 0) {
    return false;
  }

  while (n !== 1) {
    if (n % 2 !== 0) {
      return false;
    }

    n /= 2;
  }

  return true;
};
