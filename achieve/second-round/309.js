'use strict';

// ========================================================================
// Time:   35min
// Submit: 1
//  refer: https://discuss.leetcode.com/topic/30680/share-my-dp-solution-by-state-machine-thinking/2
// ========================================================================

/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
  if (!Array.isArray(prices) || prices.length === 0) {
    return 0;
  }

  const length = prices.length;
  const rest = new Array(length);
  const buy = new Array(length);
  const sell = new Array(length);

  rest[0] = 0;
  buy[0] = -1 * prices[0];
  sell[0] = 0;

  for (let i = 1; i < length; i++) {
    rest[i] = Math.max(rest[i - 1], sell[i - 1]);
    buy[i] = Math.max(buy[i - 1], rest[i - 1] - prices[i]);
    sell[i] = buy[i - 1] + prices[i];
  }

  return Math.max(rest[length - 1], sell[length - 1]);
};

console.log(maxProfit([1, 2, 3, 0, 2]));

// class Solution {
// public:
//   int maxProfit(vector<int>& prices){
//     if (prices.size() <= 1) return 0;
//     vector<int> s0(prices.size(), 0);
//     vector<int> s1(prices.size(), 0);
//     vector<int> s2(prices.size(), 0);
//     s1[0] = -prices[0];
//     s0[0] = 0;
//     s2[0] = INT_MIN;
//     for (int i = 1; i < prices.size(); i++) {
//       s0[i] = max(s0[i - 1], s2[i - 1]);
//       s1[i] = max(s1[i - 1], s0[i - 1] - prices[i]);
//       s2[i] = s1[i - 1] + prices[i];
//     }
//     return max(s0[prices.size() - 1], s2[prices.size() - 1]);
//   }
// };
