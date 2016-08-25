'use strict';

// ========================================================================
// Time:   5min
// Submit: 1
// ========================================================================

// Write a program to check whether a given number is an ugly number.
// Ugly numbers are positive numbers whose prime factors only include 2, 3, 5.
// For example, 6, 8 are ugly while 14 is not ugly since it includes another prime factor 7.
// Note that 1 is typically treated as an ugly number.

function isBase(num) {
  return [1, 2, 3, 5].indexOf(num) !== -1;
}

function findUglyFactor(num) {
  const array = [2, 3, 5];
  for (let i = 0; i < array.length; i++) {
    if (num % array[i] === 0) {
      return array[i];
    }
  }

  return -1;
}

/**
 * @param {number} num
 * @return {boolean}
 */
var isUgly = function(num) {
  if (!Number.isInteger(num) || num <= 0) {
    return false;
  }

  while (!isBase(num)) {
    const factor = findUglyFactor(num);
    if (factor !== -1) {
      num /= factor;
    } else {
      return false;
    }
  }

  return true;
};
