'use strict';

// ========================================================================
// Time:   5min
// Submit: 1
// ========================================================================

// Given a non-negative integer num, repeatedly add all its digits until the result has only one digit.

// For example:

// Given num = 38, the process is like: 3 + 8 = 11, 1 + 1 = 2. Since 2 has only one digit, return it.

// Follow up:
// Could you do it without any loop/recursion in O(1) runtime?

function helper(num) {
  let cur = 0;
  while (num !== 0) {
    cur += num % 10
    num = Math.floor(num / 10);
  }

  return cur;
}

/**
 * @param {number} num
 * @return {number}
 */
var addDigits = function(num) {
  if (!Number.isInteger(num) || num < 0) {
    return 0;
  }

  while (num > 9) {
    num = helper(num);
  }

  return num;
};

console.log(addDigits(0));
console.log(addDigits(1));
console.log(addDigits(9));
console.log(addDigits(10));
console.log(addDigits(99));
