// Say you have an array for which the ith element is the price of a given stock on day i.

// Design an algorithm to find the maximum profit. You may complete as many transactions as you
// like (ie, buy one and sell one share of the stock multiple times).
// However, you may not engage in multiple transactions at the same time
// (ie, you must sell the stock before you buy again).
'use strict';
require('chai').should();

// Solution 1.
/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
  var maxProfit = 0;
  // will also keep buy in price here, don't do that.
  // Code will look confusing. Put one kind of variable into one place
  var isHaving = false;
  var buyInPrice;
  var i;

  for (i = 0; i < prices.length - 1; i++) {
    if (isHaving) {
      if (prices[i] > prices[i + 1]) {
        maxProfit = maxProfit + (prices[i] - buyInPrice);
        isHaving = false;
      }
    } else {
      if (prices[i] < prices[i + 1]) {
        isHaving = true;
        buyInPrice = prices[i];
      }
    }
  }

  if (isHaving) {
    maxProfit = maxProfit + (prices[prices.length - 1] - buyInPrice);
  }

  return maxProfit;
};


// Solution 2 from: http://www.jiuzhang.com/solutions/best-time-to-buy-and-sell-stock-ii/
/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit2 = function(prices) {
  var profit = 0;
  var diff;
  var i;

  if (!prices) {
    return NaN;
  }

  for (i = 1; i < prices.length; i++) {
    diff = prices[i] - prices[i - 1];
    if (diff > 0) {
      profit += diff;
    }
  }

  return profit;
};

describe('Test', function() {
  it('Should pass', function() {
    console.log(maxProfit2([0, 1, 2, 1, 2, 4, 1, 3])); // 7
    console.log(maxProfit2([2, 2, 5])); // 3
    console.log(maxProfit2([5, 2, 2, 3])); // 3
  });
});
