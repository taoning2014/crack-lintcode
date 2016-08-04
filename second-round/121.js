'use strict';

// ========================================================================
// Time:   7min
// Submit: 2 (didn't see the condition only one transaction)
// ========================================================================

// Say you have an array for which the ith element is the price of a given stock on day i.

// If you were only permitted to complete at most one transaction (ie, buy one and sell one
//   share of the stock), design an algorithm to find the maximum profit.

/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
  if (!Array.isArray(prices) || prices.length === 0) {
    return 0;
  }

  let curMax = 0;
  let curMin = prices[0]
  for (let i = 1; i < prices.length; i++) {
    curMax = Math.max(prices[i] - curMin, curMax);
    curMin = Math.min(prices[i], curMin);
  }

  return curMax;
};

console.log(maxProfit([7, 1, 5, 3, 6, 4]));
