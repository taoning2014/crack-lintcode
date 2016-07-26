// Description:

// Count the number of prime numbers less than a non-negative number, n.

'use strict';
require('chai').should();

// Solution 1.
// function isPrime(num) {
//   for (let i = 2; i * i <= num; i++) {
//     if (num % i === 0) {
//       return false;
//     }
//   }

//   return true;
// }
/**
 * @param {number} n
 * @return {number}
 */
// var countPrimes = function(n) {
//   let count = 0;

//   if (!Number.isInteger(n) || n < 2) {
//     return 0;
//   }

//   for (let i = 2; i < n; i++) {
//     if (isPrime(i)) {
//       count++
//     }
//   }

//   return count;
// };

// Solution 2. Refer to hint of this problem
/**
 * @param {number} n
 * @return {number}
 */
var countPrimes = function(n) {
  let count = 0;

  if (!Number.isInteger(n) || n <= 2) {
    return 0;
  }

  let isPrime = [];
  for (let i = 2; i < n; i++) {
    isPrime[i] = true;
  }

  for (let i = 2; i * i < n; i++) {
    if (!isPrime[i]) {
      continue;
    }

    for (let j = i * i; j < n; j += i) {
      isPrime[j] = false;
    }
  }

  for (let i = 2; i < n; i++) {
    if (isPrime[i]) {
      count++;
    }
  }

  return count;
};
describe('Test', function() {
  it('Should pass', function() {
    console.log(countPrimes(3)); // 1
    console.log(countPrimes(4)); // 2
    console.log(countPrimes(5)); // 2
    console.log(countPrimes(12)); // 2 3 5 7 11
  });
});
