'use strict';

// ========================================================================
// Time:   10min
// Submit: 1
// ========================================================================

// Write a function that takes an unsigned integer and returns the number of ’1' bits
// it has (also known as the Hamming weight).

// For example, the 32-bit integer ’11' has binary representation 00000000000000000000000000001011,
// so the function should return 3.

/**
 * @param {number} n - a positive integer
 * @return {number}
 */
var hammingWeight = function(n) {
  if (!Number.isInteger(n) || n < 0) {
    return 0;
  }

  let count = 0;

  while (n !== 0) {
    if (n % 2 === 1) {
      count++;
    }

    n = n >>> 1;
  }

  return count;
};

// console.log(hammingWeight(0));
// console.log(hammingWeight(3));
// console.log(hammingWeight(2147483647));
console.log(hammingWeight(2147483649));
