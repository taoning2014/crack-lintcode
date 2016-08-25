'use strict';

// We are playing the Guess Game. The game is as follows:

// I pick a number from 1 to n. You have to guess which number I picked.

// Every time you guess wrong, I'll tell you whether the number I picked is higher or lower.

// However, when you guess a particular number x, and you guess wrong, you pay $x. You win the
// game when you guess the number I picked.

// Example:

// n = 10, I pick 8.

// First round:  You guess 5, I tell you that it's higher. You pay $5.
// Second round: You guess 7, I tell you that it's higher. You pay $7.
// Third round:  You guess 9, I tell you that it's lower. You pay $9.

// Game over. 8 is the number I picked.

// You end up paying $5 + $7 + $9 = $21.
// Given a particular n ≥ 1, find out how much money you need to have to guarantee a win.

// Hint:

// 1, The best strategy to play the game is to minimize the maximum loss you could possibly face.
//  Another strategy is to minimize the expected loss. Here, we are interested in the first scenario.

// 2, Take a small example (n = 3). What do you end up paying in the worst case?

// 3, Check out this article if you're still stuck.

// 4, The purely recursive implementation of minimax would be worthless for even a small n.
//  You MUST use dynamic programming.

// 5, As a follow-up, how would you modify your code to solve the problem of minimizing the expected
//  loss, instead of the worst-case loss?


// Solution 1. Wrong, shouldn't use binary search.
/**
 * @param {number} n
 * @return {number}
 */
// var getMoneyAmount = function(n) {
//   if (!Number.isInteger(n) || n < 2) {
//     return 0;
//   }

//   let l = 1;
//   let r = n;
//   let total = 0;

//   while (l < r) {
//     // need to see how many numbers between n, n === 4 is the only special case
//     if (r - l === 3) {
//       total += (l + 2);
//       r = l + 1;
//     }

//     const mid = l + Math.floor((r - l) / 2);
//     total += mid;
//     l = mid + 1;
//   }

//   return total;
// };

// Solution 2. Refer: https://discuss.leetcode.com/topic/51353/simple-dp-solution-with-explanation

function helper(dp, start, end) {
  if (start >= end) {
    return 0;
  }

  if (!!dp[start][end]) {
    return dp[start][end];
  }

  dp[start][end] = Number.POSITIVE_INFINITY;
  for (let i = start; i <= end; i++) {
    const temp = i + Math.max(helper(dp, start, i - 1), helper(dp, i + 1, end));
    dp[start][end] = Math.min(temp, dp[start][end]);
  }

  return dp[start][end];
}

/**
 * @param {number} n
 * @return {number}
 */
var getMoneyAmount = function(n) {
  if (!Number.isInteger(n) || n < 2) {
    return 0;
  }

  const dp = [];
  for (let i = 0; i < n + 1; i++) {
    dp[i] = [];
  }

  helper(dp, 1, n);

  return dp[1][n];
}

console.log(getMoneyAmount(2));
console.log(getMoneyAmount(3));
console.log(getMoneyAmount(5));
console.log(getMoneyAmount(10));
