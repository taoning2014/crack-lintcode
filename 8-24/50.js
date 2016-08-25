'use strict';

// Note: use of Number.ifFinite()

/**
 * @param {number} x
 * @param {number} n
 * @return {number}
 */
var myPow = function(x, n) {
  if (!Number.isFinite(x) || !Number.isInteger(n) || x === 0) {
    return 0;
  }

  if (n === 0) {
    return 1;
  }

  if (x === 1) {
    return x;
  }

  if (x === -1) {
    return (n % 2 === 1 ? -1 : 1);
  }

  // sign of n
  let sign = n < 0 ? -1 : 1;
  n = Math.abs(n);

  let result = 1;
  for (let i = 0; i < n; i++) {
    // over flow max, min
    if (result < Number.MIN_SAFE_INTEGER || result > Number.MAX_SAFE_INTEGER) {
      return 0;
    }

    // under flow
    if (x > 0 && result < Number.MIN_VALUE) {
      return 0;
    }

    result *= x;
  }

  if (sign < 0) {
    return 1 / result;
  }

  return result;
};

console.log(myPow(-8.88023, 3));
console.log(myPow(8.88023, 3));
console.log(myPow(0.0001, 33333333333333));
