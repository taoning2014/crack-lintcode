'use strict';

// Calculate the sum of two integers a and b, but you are not allowed to use the operator + and -.

// Example:
// Given a = 1 and b = 2, return 3.

// Refer: https://discuss.leetcode.com/topic/49771/java-simple-easy-understand-solution-with-explanation/2
/**
 * @param {number} a
 * @param {number} b
 * @return {number}
 */
var getSum = function(a, b) {
  if (!Number.isInteger(a) || !Number.isInteger(b)) {
    return NaN;
  }

  while (b !== 0) {
    const temp = a & b;
    a = a ^ b;
    b = temp << 1;
  }

  return a;
};

console.log(getSum(1, -3));
