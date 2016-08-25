'use strict';

// ========================================================================
// Time:   15min
// Submit: 2
//  1, Notice some of the element in dp is not init, so they will be undifined
//    either init all of them or return !! before dp[i][j] to convert
// ========================================================================

/**
 * @param {string} s1
 * @param {string} s2
 * @param {string} s3
 * @return {boolean}
 */
var isInterleave = function(s1, s2, s3) {
  if (typeof s1 !== 'string' || typeof s2 !== 'string' || typeof s2 !== 'string' || s1.length + s2.length !== s3.length) {
    return false;
  }

  const m = s1.length;
  const n = s2.length;
  const dp = [];

  for (let i = 0; i < m + 1; i++) {
    dp[i] = [];
    if (s1.substring(0, i) === s3.substring(0, i)) {
      dp[i][0] = true;
    }
  }

  for (let i = 0; i < n + 1; i++) {
    if (s2.substring(0, i) === s3.substring(0, i)) {
      dp[0][i] = true;
    }
  }

  for (let i = 1; i < m + 1; i++) {
    for (let j = 1; j < n + 1; j++) {
      if ((s1[i - 1] === s3[i + j - 1] && dp[i - 1][j])
        || (s2[j - 1] === s3[i + j - 1] && dp[i][j - 1])) {
        dp[i][j] = true;
      }
    }
  }

  return !!dp[m][n];
};

console.log(isInterleave('aa', 'bb', 'abab'));
