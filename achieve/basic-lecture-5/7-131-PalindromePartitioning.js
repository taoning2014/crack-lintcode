// Given a string s, partition s such that every substring of the partition is a palindrome.

// Return all possible palindrome partitioning of s.

// For example, given s = "aab",
// Return

//   [
//     ["aa","b"],
//     ["a","a","b"]
//   ]
'use strict';
require('chai').should();

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
 * @return {string[][]}
 */
var partition = function(s) {
  var dp = [];
  var isPalindrome;
  var copy;
  var i;
  var j;
  var k;

  if (!s || !s.length) {
    return false;
  }

  for (i = 0; i < s.length + 1; i++) {
    dp[i] = [];
  }
  dp[0].push([]);

  isPalindrome = getIsPalindrome(s);

  for (i = 1; i < s.length + 1; i++) {
    for (j = i - 1; j >= 0; j--) {
      if (isPalindrome[j][i - 1]) {
        for (k = 0; k < dp[j].length; k++) {
          copy = dp[j][k].slice();
          copy.push(s.substring(j, i));
          dp[i].push(copy);
        }
      }
    }
  }

  return dp[s.length];
};

describe('Test', function() {
  it('Should pass', function() {
    console.log(partition('aab'));
  });
});
