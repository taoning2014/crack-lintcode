'use strict';

function createList(n) {
  const result = [];
  for (let i = 1; i * i <= n; i++) {
    result.push(i * i);
  }

  return result;
}

/**
 * @param {number} n
 * @return {number}
 */
var numSquares = function(n) {
  if (!Number.isInteger(n) || n <= 0) {
    return 0;
  }

  const list = createList(n);
  const dp = new Array(n + 1);
  dp.fill(Number.POSITIVE_INFINITY);
  dp[0] = 0;

  for (let i = 1; i <= n; i++) {
    for (let j = 0; j < list.length; j++) {
      if (i < list[j]) {
        break;
      }

      if (i === list[j]) {
        dp[i] = 1;
      } else {
        dp[i] = Math.min(dp[i - list[j]] + 1, dp[i]);
      }
    }
  }

  return (dp[n] === Number.POSITIVE_INFINITY ? 0 : dp[n]);
};

console.log(numSquares(1));
console.log(numSquares(13));
