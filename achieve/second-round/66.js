'use strict';

// ========================================================================
// Time:   5min
// Submit: 1
// ========================================================================

// Given a non-negative number represented as an array of digits, plus one to the number.

// The digits are stored such that the most significant digit is at the head of the list.

/**
 * @param {number[]} digits
 * @return {number[]}
 */
var plusOne = function(digits) {
  if (!Array.isArray(digits) || digits.length === 0) {
    return []
  }

  digits[digits.length - 1]++;

  for (let i = digits.length - 1; i >= 0; i--) {
    if (digits[i] === 10 && i !== 0) {
      digits[i] = 0;
      digits[i - 1]++;
    }
  }

  if (digits[0] === 10) {
    digits[0] = 0;
    digits.unshift(1);
  }

  return digits;
};

console.log(plusOne([9, 9]));
console.log(plusOne([9, 1, 9]));
console.log(plusOne([1, 9]));
