// Given a non-negative integer n, count all numbers with unique digits, x, where 0 ≤ x < (10 power of n).

// Example:
// Given n = 2, return 91. (The answer should be the total numbers in the range of 0 ≤ x < 100, excluding [11,22,33,44,55,66,77,88,99])

// Hint:

// 1) A direct way is to use the backtracking approach.

// 2) Backtracking should contains three states which are (the current number, number of steps
//  to get that number and a bitmask which represent which number is marked as visited so far in the current number).
//  Start with state (0,0,0) and count all valid number till we reach number of steps equals to 10n.

// 3) This problem can also be solved using a dynamic programming approach and some knowledge of combinatorics.

// 4) Let f(k) = count of numbers with unique digits with length equals k.

// 5) f(1) = 10, ..., f(k) = 9 * 9 * 8 * ... (9 - k + 2) [The first factor is 9 because a number cannot start with 0].
'use strict';
require('chai').should();

function curCount(n) {
  let curSum = 9;
  let cur = 9;
  for (let i = 1; i < n; i++) {
    curSum *= cur;
    cur--;
  }

  return curSum;
}

/**
 * @param {number} n
 * @return {number}
 */
var countNumbersWithUniqueDigits = function(n) {
  if (!Number.isInteger(n) || n < 0) {
    return -1;
  }

  let dp = [];
  dp[0] = 1;
  dp[1] = 10;

  // create 2 digits to 10 digits
  for (let i = 2; i <= 10; i++) {
    dp[i] = dp[i - 1] + curCount(i);
  }

  // the difference will increase only when n is less than 10
  if (n <= 10) {
    return dp[n];
  }

  return dp[10];
};

describe('Test', function () {
  it('Should pass', function () {
    console.log(countNumbersWithUniqueDigits(1));
    console.log(countNumbersWithUniqueDigits(2));
    console.log(countNumbersWithUniqueDigits(11));
  });
});
