'use strict';

// Solution 1. Time out for [1,2,5], 100

// var minCount;

// function dfs(coins, curAmount, count) {
//   if (curAmount === 0) {
//     minCount = Math.min(count, minCount);
//     return;
//   }

//   if (curAmount < 0) {
//     return;
//   }

//   for (let i = coins.length - 1; i >= 0; i--) {
//     dfs(coins, curAmount - coins[i], count + 1);
//   }
// }

/**
 * @param {number[]} coins
 * @param {number} amount
 * @return {number}
 */
// var coinChange = function(coins, amount) {
//   if (!Array.isArray(coins) || coins.length === 0
//     || !Number.isInteger(amount) || amount < 0) {
//     return -1;
//   }

//   minCount = Number.POSITIVE_INFINITY;
//   dfs(coins, amount, 0);

//   return (minCount === Number.POSITIVE_INFINITY ? -1 : minCount);
// };

// Solution 2. Need to find Lowest common multiple
// Refer: 4th mathod of http://zh.wikihow.com/求两个数的最小公倍数
// Note: still timeout for [186,419,83,408],6249

// var minCount;

// function findGCD(num1, num2) {
//   if (num1 < num2) {
//     const temp = num1;
//     num1 = num2;
//     num2 = temp;
//   }

//   while (num2 !== 0) {
//     const mod = num1 % num2;
//     num1 = num2;
//     num2 = mod;
//   }

//   return num1;
// }

// function findLCM(coins) {
//   if (coins.length === 1) {
//     return coins[0];
//   }

//   let gcd = coins[0];
//   for (let i = 1; i < coins.length; i++) {
//     gcd = findGCD(gcd, coins[i]);
//   }

//   let lcm = 1;
//   for (let i = 0; i < coins.length; i++) {
//     lcm *= coins[i];
//   }

//   return lcm / gcd;
// }

// function dfs(coins, curAmount, count) {
//   if (curAmount === 0) {
//     minCount = Math.min(count, minCount);
//     return;
//   }

//   if (curAmount < 0) {
//     return;
//   }

//   for (let i = coins.length - 1; i >= 0; i--) {
//     dfs(coins, curAmount - coins[i], count + 1);
//   }
// }

// var coinChange = function(coins, amount) {
//   if (!Array.isArray(coins) || coins.length === 0
//     || !Number.isInteger(amount) || amount < 0) {
//     return -1;
//   }

//   coins.sort((p, q) => parseInt(p, 10) - parseInt(q, 10));

//   // find lcm
//   const lcm = findLCM(coins);
//   console.log(`lcm: ${lcm}`);

//   // count using largest in the coins
//   const maxCoin = coins[coins.length - 1];
//   let count = 0;
//   while (amount > lcm) {
//     amount -= maxCoin;
//     count++;
//   }

//   // find rest
//   minCount = Number.POSITIVE_INFINITY;
//   dfs(coins, amount, count);

//   return (minCount === Number.POSITIVE_INFINITY ? -1 : minCount);
// };

// Solution 3
// Refer:
//  1, https://discuss.leetcode.com/topic/32475/c-o-n-amount-time-o-amount-space-dp-solution
//  2, https://discuss.leetcode.com/topic/32519/6-7-lines-2-ways
// Note: Remember when algorithm grows in power of n, try DP
/**
 * @param {number[]} coins
 * @param {number} amount
 * @return {number}
 */
var coinChange = function(coins, amount) {
  if (!Array.isArray(coins) || coins.length === 0
    || !Number.isInteger(amount) || amount < 0) {
    return -1;
  }

  const dp = new Array(amount + 1);
  dp.fill(Number.POSITIVE_INFINITY);
  dp[0] = 0;

  for (let i = 1; i <= amount; i++) {
    for (let j = 0; j < coins.length; j++) {
      if (coins[j] <= i && dp[i - coins[j]] !== Number.POSITIVE_INFINITY) {
        dp[i] = Math.min(dp[i - coins[j]] + 1, dp[i]);
      }
    }
  }

  return (dp[amount] === Number.POSITIVE_INFINITY ? -1 : dp[amount]);
};

console.log(coinChange([186,419,83,408],6));
// console.log((coinChange([1,2,5], 100)));
