'use strict';

// ========================================================================
// Time:   15min
// Submit: 2
//  when init dp[0][i], don't overwrite dp[0][0]
// ========================================================================


// Given a string S and a string T, count the number of distinct subsequences of T in S.

// A subsequence of a string is a new string which is formed from the original string by
// deleting some (can be none) of the characters without disturbing the relative positions
// of the remaining characters. (ie, "ACE" is a subsequence of "ABCDE" while "AEC" is not).

// Here is an example:
// S = "rabbbit", T = "rabbit"

// Return 3.

/**
 * @param {string} s
 * @param {string} t
 * @return {number}
 */
var numDistinct = function(s, t) {
  if (!s || !t || typeof s !== 'string' || typeof t !== 'string') {
    return 0;
  }

  const m = s.length;
  const n = t.length;
  const dp = [];

  for (let i = 0; i < m + 1; i++) {
    dp[i] = [];
    dp[i][0] = 1;
  }

  for (let i = 1; i < n + 1; i++) {
    dp[0][i] = 0;
  }

  for (let i = 1; i < m + 1; i++) {
    for (let j = 1; j < n + 1; j++) {
      if (s[i - 1] === t[j - 1]) {
        dp[i][j] = dp[i - 1][j - 1] + dp[i - 1][j];
      } else {
        dp[i][j] = dp[i - 1][j];
      }
    }
  }

  return dp[m][n];
};

console.log(numDistinct('rabbbit', 'rabbit'));
