// There is a fence with n posts, each post can be painted with one of the k colors.

// You have to paint all the posts such that no more than two adjacent fence posts have the same color.

// Return the total number of ways you can paint the fence.

// Note:
// n and k are non-negative integers.
'use strict';
require('chai').should();
// Solution 1: Not work
/**
 * @param {number} n
 * @param {number} k
 * @return {number}
 */
// var numWays = function(n, k) {
//   if (!n || !k) {
//     return 0;
//   }

//   if (k === 1 && n < 3) {
//     return 1;
//   }

//   if (k === 1) {
//     return 0;
//   }

//   if (n === 1) {
//     return k;
//   }

//   return k * Math.pow(k - 1, n - 1)
//     + (n - 1) * k * Math.pow(k - 1, Math.max(0, n - 2))
//     + (n - 2) * (n - 3) / 2 * k * Math.pow(k - 1, Math.max(0, n - 3));
// };

// Solution 2: From https://leetcode.com/discuss/73073/easy-to-understand-java-o-n-runtime-o-1-space
/**
 * @param {number} n
 * @param {number} k
 * @return {number}
 */
var numWays = function(n, k) {
  var dp = [];
  var i;

  if (!n || !k) {
    return 0;
  }

  // init
  dp[0] = k;
  dp[1] = dp[0] * k;

  for (i = 2; i < n; i++) {
    dp[i] = dp[i - 1] * (k - 1) + dp[i - 2] * (k - 1);
  }
  console.log(dp);
  return dp[n-1];
};

describe('Test', function() {
  it('Should pass', function() {
    console.log(numWays(3, 2));
  });
});
