// Implement wildcard pattern matching with support for '?' and '*'.

// '?' Matches any single character.
// '*' Matches any sequence of characters (including the empty sequence).

// The matching should cover the entire input string (not partial).

// The function prototype should be:
// bool isMatch(const char *s, const char *p)

// Some examples:
// isMatch("aa","a") → false
// isMatch("aa","aa") → true
// isMatch("aaa","aa") → false
// isMatch("aa", "*") → true
// isMatch("aa", "a*") → true
// isMatch("ab", "?*") → true
// isMatch("aab", "c*a*b") → false

/**
 * @param {string} s
 * @param {string} p
 * @return {boolean}
 */
var isMatch = function(s, p) {
  var dp = [];
  var i;
  var j;

  for (i = 0; i < s.length + 1; i++) {
    dp[i] = [];
  }

  for (i = 0; i < s.length + 1; i++) {
    dp[i][0] = false;
  }

  for (i = 0; i < p.length + 1; i++) {
    dp[0][i] = false;
  }

  for (i = 1; i < s.length + 1; i++) {
    for (j = i)
  }
};
