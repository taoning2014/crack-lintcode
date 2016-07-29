'use strict';

// Given a positive integer num, write a function which returns True if num is a perfect square else False.

// Note: Do not use any built-in library function such as sqrt.

// Example 1:

// Input: 16
// Returns: True
// Example 2:

// Input: 14
// Returns: False

function bsf(right, target) {
  let l = 0;
  let r = right;

  while (l <= r) {
    const mid = l + Math.floor((r - l) / 2);
    const square = mid * mid;
    if (square < target) {
      l = mid + 1;
    } else if (square > target) {
      r = mid - 1;
    } else {
      return true;
    }
  }

  return false;
}

function findRight(num) {
  let r = 1;
  while (r < num) {
    r *= 2;
  }

  return r;
}

/**
 * @param {number} num
 * @return {boolean}
 */
var isPerfectSquare = function(num) {
  if (!Number.isInteger(num) || num < 1) {
    return false;
  }

  // find range
  const range = findRight(num);

  // use bsf to find
  return bsf(range, num);
};

console.log(isPerfectSquare(1));
console.log(isPerfectSquare(2));
console.log(isPerfectSquare(14));
console.log(isPerfectSquare(16));
