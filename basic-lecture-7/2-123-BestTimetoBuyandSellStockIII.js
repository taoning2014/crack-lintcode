// Say you have an array for which the ith element is the price of a given stock on day i.

// Design an algorithm to find the maximum profit. You may complete at most two transactions.

// Note:
// You may not engage in multiple transactions at the same time (ie, you must sell the stock before
// you buy again).
'use strict';
require('chai').should();

/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
  var leftToRight = [];
  var rightToLeft = [];
  var maxProfit = Number.NEGATIVE_INFINITY;
  var curProfit;
  var curMin;
  var curMax;
  var i;

  if (!prices || !prices.length) {
    return NaN;
  }

  // Left to right calculate every day's max profit
  curMin = prices[0];
  leftToRight[0] = 0;
  for (i = 1; i < prices.length; i++) {
    if (prices[i] < curMin) {
      curMin = prices[i];
    }
    leftToRight[i] = Math.max(leftToRight[i - 1], prices[i] - curMin);
  }

  // Right to left, do same thing
  curMax = prices[prices.length - 1];
  rightToLeft[prices.length - 1] = 0
  for (i = prices.length - 2; i >= 0; i--) {
    if (prices[i] > curMax) {
      curMax = prices[i];
    }
    rightToLeft[i] = Math.max(rightToLeft[i + 1], curMax - prices[i]);
  }

  for (i = 0; i < prices.length; i++) {
    curProfit = leftToRight[i] + rightToLeft[i];
    if (maxProfit < curProfit) {
      maxProfit = curProfit;
    }
  }

  return maxProfit;
};

describe('Test', function() {
  it('Should pass', function() {
    console.log(maxProfit([1, 2, 3]));
    console.log(maxProfit([1, 4, 1, 5]));
  });
});
