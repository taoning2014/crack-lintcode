'use strict';

// ========================================================================
// Time:   5min
// Submit: 1
// ========================================================================

/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
  if(!Number.isInteger(x) || x < 0) {
    return false;
  }

  let digit = 1;
  while (digit <= x) {
    digit *= 10;
  }

  digit /= 10;

  while (x !== 0) {
    if (Math.floor(x / digit) !== x % 10) {
      return false;
    }

    x = x % digit;
    x = Math.floor(x / 10);
    digit /= 100;
  }

  return true;
};

console.log(isPalindrome(10));
console.log(isPalindrome(9));
