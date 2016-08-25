'use strict';

/**
 * @param {number[][]} costs
 * @return {number}
 */
// var minCostII = function(costs) {
//   if (!Array.isArray(costs) || costs.length === 0 || !Array.isArray(costs[0]) || costs[0].length === 0) {
//     return 0;
//   }

//   const dp = [];
//   const n = costs.length;
//   const k = costs[0].length;
//   for (let i = 0; i < n; i++) {
//     dp[i] = new Array(k);
//     dp[i].fill(Number.POSITIVE_INFINITY);
//   }

//   // re-init first row
//   for (let i = 0; i < k; i++) {
//     dp[0][i] = costs[0][i];
//   }

//   // dp through each row
//   for (let i = 1; i < n; i++) {
//     for (let j = 0; j < k; j++) {
//       for (let pre = 0; pre < k; pre++) {
//         if (pre === j) {
//           continue;
//         }

//         dp[i][j] = Math.min(dp[i][j], dp[i - 1][pre] + costs[i][j]);
//       }
//     }
//   }

//   return Math.min.apply(null, dp[n - 1]);
// };

// Solution2
// Refer: https://discuss.leetcode.com/topic/22580/ac-java-solution-without-extra-space
/**
 * @param {number[][]} costs
 * @return {number}
 */
var minCostII = function(costs) {
  if (!Array.isArray(costs) || costs.length === 0 || !Array.isArray(costs[0]) || costs[0].length === 0) {
    return 0;
  }

  const n = costs.length;
  const k = costs[0].length;

  let min1 = -1;
  let min2 = -1;

  for (let i = 0; i < n; i++) {
    const last1 = min1;
    const last2 = min2;

    min1 = -1;
    min2 = -1;

    for (let j = 0; j < k; j++) {
      if (j !== last1) {
        costs[i][j] += last1 < 0 ? 0 : costs[i - 1][last1];
      } else {
        costs[i][j] += last2 < 0 ? 0 : costs[i - 1][last2];
      }

      if (min1 < 0 || costs[i][j] < costs[i][min1]) {
        min2 = min1;
        min1 = j;
      } else if (min2 < 0 || costs[i][j] < costs[i][min2]) {
        min2 = j;
      }
    }
  }

  return costs[n - 1][min1];
};

var matrix = [
  [1, 3, 2, 5],
  [3, 1, 5, 2],
  [1, 2, 5, 3],
];
console.log(minCostII(matrix));
