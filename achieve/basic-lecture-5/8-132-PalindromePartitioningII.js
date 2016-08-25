// Given a string s, partition s such that every substring of the partition is a palindrome.

// Return the minimum cuts needed for a palindrome partitioning of s.

// For example, given s = "aab",
// Return 1 since the palindrome partitioning ["aa","b"] could be produced using 1 cut.
'use strict';
require('chai').should();

// Solution 1. Memory Limit Exceeded
function getIsPalindrome(str) {
  var result = [];
  var step;
  var i;

  for (i = 0; i < str.length; i++) {
    result[i] = [];
  }

  for (i = 0; i < str.length; i++) {
    result[i][i] = true;
  }

  for (i = 0; i < str.length - 1; i++) {
    result[i][i + 1] = (str.charAt(i) === str.charAt(i + 1));
  }

  for (step = 2; step < str.length; step++) {
    for (i = 0; i + step < str.length; i++) {
      result[i][i + step] = result[i + 1][i + step - 1] && (str.charAt(i) === str.charAt(i + step));
    }
  }

  return result;
}

/**
 * @param {string} s
 * @return {number}
 */
var minCut = function(s) {
  var dp = [];
  var isPalindrome;
  var i;
  var j;

  if (!s || !s.length) {
    return false;
  }

  for (i = 0; i < s.length + 1; i++) {
    dp[i] = i;
  }

  isPalindrome = getIsPalindrome(s);

  for (i = 1; i < s.length + 1; i++) {
    for (j = i - 1; j >= 0; j--) {
      if (isPalindrome[j][i - 1]) {
        dp[i] = Math.min(dp[j] + 1, dp[i]);
      }
    }
  }

  return dp[s.length] - 1;
};

describe('Test', function() {
  it('Should pass', function() {
    // console.log(minCut('abc'));
    // console.log(minCut('aabb'));
    console.log(minCut('abcccb'));
  });
});
