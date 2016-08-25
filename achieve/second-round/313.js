'use strict';

// ========================================================================
// Time:   9min
// Submit: 1
// ========================================================================

/**
 * @param {number} n
 * @param {number[]} primes
 * @return {number}
 */
var nthSuperUglyNumber = function(n, primes) {
  if (!Number.isInteger(n) || n < 1 || !Array.isArray(primes) || primes.length === 0) {
    return 0;
  }

  const indexes = new Array(primes.length);
  const ugly = new Array(n);
  indexes.fill(0);
  ugly.fill(Number.POSITIVE_INFINITY);
  ugly[0] = 1;

  for (let i = 1; i < n; i++) {
    for (let j = 0; j < primes.length; j++) {
      ugly[i] = Math.min(ugly[i], primes[j] * ugly[indexes[j]]);
    }

    for (let j = 0; j < primes.length; j++) {
      if (ugly[i] === primes[j] * ugly[indexes[j]]) {
        indexes[j]++;
      }
    }
  }

  return ugly[n - 1];
};

console.log(nthSuperUglyNumber(12, [2, 7, 13, 19] ));
