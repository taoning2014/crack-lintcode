'use strict';

// ========================================================================
// Time:   4min
// Submit: 1
// ========================================================================

/**
 * @param {number} n - a positive integer
 * @return {number} - a positive integer
 */
var reverseBits = function(n) {
  if (!Number.isInteger(n) || n < 0 || n > Math.pow(2, 32) - 1) {
    return 0;
  }

  let result = 0;
  for (let i = 0; i < 32; i++) {
    result *= 2;
    if (n % 2 === 1) {
      result++;
    }

    n = Math.floor(n / 2);
  }

  return result;
};

console.log(reverseBits(43261596));
