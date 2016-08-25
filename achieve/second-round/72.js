'use strict';

// Given two words word1 and word2, find the minimum number of steps required to
// convert word1 to word2. (each operation is counted as 1 step.)

// You have the following 3 operations permitted on a word:

// a) Insert a character
// b) Delete a character
// c) Replace a character

/**
 * @param {string} word1
 * @param {string} word2
 * @return {number}
 */
var minDistance = function(word1, word2) {
  if (typeof word1 !== 'string' || typeof word2 !== 'string') {
    return -1;
  }

  const m = word1.length;
  const n = word2.length;
  const dp = [];
  for (let i = 0; i <= m; i++) {
    dp[i] = [];
  }

  // init
  for (let i = 0; i <= m; i++) {
    dp[i][0] = i;
  }

  for (let i = 0; i <= n; i++) {
    dp[0][i] = i;
  }

  for (let i = 1; i <= m; i++) {
    for (let j = 1; j <= n; j++) {
      if (word1[i - 1] === word2[j - 1]) {
        dp[i][j] = Math.min(dp[i - 1][j - 1], dp[i - 1][j] + 1, dp[i][j - 1] + 1);
      } else {
        dp[i][j] = Math.min(dp[i - 1][j - 1] + 1, dp[i - 1][j] + 1, dp[i][j - 1] + 1);
      }
    }
  }

  return dp[m][n];
};

console.log(minDistance('a', 'ab'));
