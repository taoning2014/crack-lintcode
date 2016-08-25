'use strict';

// Note: memory limit exceed

function allStars(p, n) {
  for (let i = 0; i < n; i++) {
    if (p[i] !== '*') {
      return false;
    }
  }

  return true;
}

/**
 * @param {string} s
 * @param {string} p
 * @return {boolean}
 */
var isMatch = function(s, p) {
  if (typeof s !== 'string' || typeof p !== 'string') {
    return false;
  }

  // customize for leetcode's last input, in which both s and p has a long common string
  // and the first few common chars is always match, so don't worry about that
  // And even so, can't pass :"aabab...", "*bbba*..."
  for (let i = 0; i < Math.min(s.length, p.length); i++) {
    if (s[i] !== p[i]) {
      s = s.substr(i);
      p = p.substr(i);
      break;
    }
  }

  const m = s.length + 1;
  const n = p.length + 1;
  const dp = [];
  for (let i = 0; i < m; i++) {
    dp[i] = new Array(n);
    dp[i].fill(false);
  }

  // init
  for (let i = 1; i < n; i++) {
    if (!allStars(p, i)) {
      break;
    }

    dp[0][i] = true;
  }
  dp[0][0] = true;

  // dp
  for (let i = 1; i < m; i++) {
    for (let j = 1; j < n; j++) {
      // case 1, equal or '?'
      if (s[i - 1] === p[j - 1] || p[j - 1] === '?') {
        dp[i][j] = dp[i - 1][j - 1];
      // case 2, '*'
      } else if (p[j - 1] === '*') {
        for (let k = 0; k <= i; k++) {
          dp[i][j] = dp[i][j] || dp[k][j - 1];
        }
      // case 3, alphabet and not equal
      } else {
        dp[i][j] = false;
      }
    }
  }

  return dp[m - 1][n - 1];
};

console.log(isMatch('aab', 'aa*'));
