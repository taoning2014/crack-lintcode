'use strict';

// ========================================================================
// Time:   5min
// Submit: 1
// ========================================================================

/**
 * @param {number} x
 * @return {number}
 */
var reverse = function(x) {
  if (!Number.isInteger(x)) {
    return 0;
  }

  let sign = x < 0 ? -1 : 1;
  x = Math.abs(x);

  let result = 0;
  while(x !== 0) {
    result = result * 10 + x % 10;
    x = Math.floor(x / 10);
  }

  result *= sign;

  if (result > Math.pow(2, 31) - 1 || result < Math.pow(2, 31) * -1) {
    return 0;
  }

  return result;
};

console.log(reverse(531));
console.log(reverse(500));
