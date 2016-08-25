'use strict';

// ========================================================================
// Time:   5min
// Submit: 1
// ========================================================================

/**
 * @param {number} num
 * @return {number[]}
 */
var countBits = function(num) {
  if (!Number.isInteger(num) || num < 0) {
    return [];
  }

  let result = [0];
  let n = 1;

  while (n < num + 1) {
    result = result.concat(result);
    for (let i = n; i < result.length; i++) {
      result[i]++;
    }
    n *= 2;
  }

  return result.slice(0, num + 1);
};

console.log(countBits(5));
