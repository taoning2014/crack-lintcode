'use strict';

// ========================================================================
// Time:   5min
// Submit: 2(Line 52 don't assign next to n to update n)
// Note: No matter how simple / hard the code is, run a full loop in head
// ========================================================================

// Write an algorithm to determine if a number is "happy".

// A happy number is a number defined by the following process:
// Starting with any positive integer, replace the number by the sum of
// the squares of its digits, and repeat the process until the number equals 1
// (where it will stay), or it loops endlessly in a cycle which does not include 1.
// Those numbers for which this process ends in 1 are happy numbers.

// Example: 19 is a happy number (9_2 means 9 * 9)
// 1_2 + 9_2 = 82
// 8_2 + 2_2 = 68
// 6_2 + 8_2 = 100
// 1_2 + 0_2 + 0_2 = 1

function helper(n) {
  let curSum = 0;

  while (n !== 0) {
    curSum += (n % 10) * (n % 10);
    n = Math.floor(n / 10);
  }

  return curSum;
}

/**
 * @param {number} n
 * @return {boolean}
 */
var isHappy = function(n) {
  if (!Number.isInteger(n) || n <= 0) {
    return false;
  }

  const record = new Set();
  record.add(n);
  while (n !== 1) {
    const next = helper(n);

    if (record.has(next)) {
      return false;
    }

    record.add(next);
    n = next;
  }

  return true;
};
