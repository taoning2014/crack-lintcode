'use strict';

// ========================================================================
// Time:   10min
// Submit: 1
// ========================================================================

/**
 * @param {number} num
 * @return {boolean}
 */
var isPerfectSquare = function(num) {
  if (!Number.isInteger(num) || num < 0) {
    return false;
  }

  let l = 0;
  let r = num;
  while (l <= r) {
    const mid = l + Math.floor((r - l) / 2);
    const square = mid * mid;
    if (square < num) {
      l = mid + 1;
    } else if (square > num) {
      r = mid - 1;
    } else {
      return true;
    }
  }

  return false;
};

console.log(isPerfectSquare(8));
console.log(isPerfectSquare(4));
console.log(isPerfectSquare(16));
console.log(isPerfectSquare(17));
