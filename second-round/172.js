'use strict';

// ========================================================================
// Time:   5min
// Submit: 1
// ========================================================================

/**
 * @param {number} n
 * @return {number}
 */
var trailingZeroes = function(n) {
  if (!Number.isInteger(n) || n < 1) {
    return 0;
  }

  let count = 0;
  while (n > 0) {
    count += Math.floor(n / 5);
    n = Math.floor(n / 5);
  }

  return count;
};

console.log(trailingZeroes(25));
console.log(trailingZeroes(30));
