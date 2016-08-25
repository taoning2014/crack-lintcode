// Given a string S and a string T, count the number of distinct subsequences of T in S.

// A subsequence of a string is a new string which is formed from the original string by deleting
// some (can be none) of the characters without disturbing the relative positions of the remaining characters. (ie, "ACE" is a subsequence of "ABCDE" while "AEC" is not).

// Here is an example:
// S = "rabbbit", T = "rabbit"

// Return 3.
'use strict';
require('chai').should();

/**
 * @param {string} s
 * @param {string} t
 * @return {number}
 */
var numDistinct = function(s, t) {
  var match;
  var n;
  var m;
  var i;
  var j;

  n = s.length;
  m = t.length;
  match = [];
  for (i = 0; i < n + 1; i++) {
    match[i] = [];
  }

  // init
  for (i = 0; i < n + 1; i++) {
    match[i][0] = 1;
  }
  for (j = 1; j < m + 1; j++) {
    match[0][j] = 0;
  }

  for (i = 1; i < n + 1; i++) {
    for (j = 1; j < m + 1; j++) {
      if (s.charAt(i - 1) === t.charAt(j - 1)) {
        match[i][j] = match[i - 1][j] + match[i - 1][j - 1];
      } else {
        match[i][j] = match[i - 1][j];
      }
    }
  }
  return match[n][m];
};

describe('Test', function() {
  it('Should pass', function() {
    // console.log(numDistinct('', 'a')); // 0
    // console.log(numDistinct('a', '')); // 1
    // console.log(numDistinct('aaa', 'a')); // 3
    console.log(numDistinct('rabbbit', 'rabbit')); // 3
  })
})
