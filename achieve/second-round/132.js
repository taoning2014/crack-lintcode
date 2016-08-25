'use strict';

// ========================================================================
// Time:   25min
// Submit: 1
// Note: instead of dp has value of how many cuts, can assign how many words
//  it can have, then don't need to assign dp[0] = -1
// ========================================================================

// function createMatrix(s) {
//   const n = s.length;
//   const isPalindrome = [];

//   for (let i = 0; i < n; i++) {
//     isPalindrome[i] = [];
//     isPalindrome[i][i] = true;
//   }

//   for (let i = 0; i < n - 1; i++) {
//     isPalindrome[i][i + 1] = (s[i] === s[i + 1]);
//   }

//   for (let step = 2; step < n; step++) {
//     for (let i = 0; i + step < n; i++) {
//       isPalindrome[i][i + step] = isPalindrome[i + 1][i + step - 1] && (s[i] === s[i + step]);
//     }
//   }

//   return isPalindrome;
// }

// /**
//  * @param {string} s
//  * @return {number}
//  */
// var minCut = function(s) {
//   if (!s || typeof s !== 'string') {
//     return -1;
//   }

//   const isPalindrome = createMatrix(s);
//   const n = s.length;
//   const dp = [];
//   for (let i = 1; i < n + 1; i++) {
//     dp[i] = i - 1;
//   }
//   dp[0] = -1;

//   for (let i = 1; i < n + 1; i++) {
//     for (let j = 0; j < i; j++) {
//       if (!isPalindrome[j][i - 1]) {
//         continue;
//       }

//       dp[i] = Math.min(dp[j] + 1, dp[i]);
//     }
//   }

//   return dp[n];
// };
// console.log(minCut('aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaabbaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa'));

// ========================================================================
// Solution 2
// Time:   25min
// Submit: 1
// Refer:
// ========================================================================

// https://discuss.leetcode.com/topic/2840/my-solution-does-not-need-a-table-for-palindrome-is-it-right-it-uses-only-o-n-space
/**
 * @param {string} s
 * @return {number}
 */
var minCut = function(s) {
  if (!s || typeof s !== 'string') {
    return 0;
  }

  const dp = [];
  for (let i = 0; i <= s.length; i++) {
    dp[i] = i - 1;
  }

  for (let i = 0; i < s.length; i++) {
    for (let j = 0; i - j >= 0 && i + j < s.length && s[i - j] === s[i + j]; j++) {
      dp[i + j + 1] = Math.min(dp[i - j] + 1, dp[i + j + 1])
    }

    for (let j = 1; i - j + 1 >= 0 && i + j < s.length && s[i - j + 1] === s[i + j]; j++) {
      dp[i + j + 1] = Math.min(dp[i - j + 1] + 1, dp[i + j + 1]);
    }
  }

  return dp[s.length];
};

console.log(minCut('abaa'));
console.log(minCut('abba'));
