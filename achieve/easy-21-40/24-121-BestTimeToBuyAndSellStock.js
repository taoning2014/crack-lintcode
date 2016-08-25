// Say you have an array for which the ith element is the price of a given stock on day i.

// If you were only permitted to complete at most one transaction (ie, buy one and sell one
//   share of the stock), design an algorithm to find the maximum profit.
'use strict';
require('chai').should();


// Solution 1, can't pass [2, 1, 2, 0, 1], this solution is bad, because the algorithm isn't right;
// @param {number[]} prices
// @return {number}
// var maxProfit = function(prices) {
//   var lh;
//   var rh;
//   var toRight;
//   var toLeft;
//   var curMax;

//   if (!prices || prices.length === 0) {
//     return 0;
//   }

//   lh = 0;
//   rh = prices.length - 1;
//   toRight = lh;
//   toLeft = rh;
//   curMax = prices[rh] - prices[lh];

//   while (lh < rh) {
//     // move left to right
//     while (toRight < rh) {
//       if (prices[lh] > prices[toRight]) {
//         if (curMax < prices[rh] - prices[toRight]) {
//           curMax = prices[rh] - prices[toRight];
//         }
//         break;
//       }
//       toRight++;
//     }

//     // move right to left
//     while (lh < toLeft) {
//       if (prices[rh] < prices[toLeft]) {
//         if (curMax < prices[toLeft] - prices[lh]) {
//           curMax = prices[toLeft] - prices[lh];
//         }
//         break;
//       }
//       toLeft--;
//     }

//     lh = toRight;
//     rh = toLeft;

//     if (lh < rh && curMax < prices[rh] - prices[lh]) {
//       curMax = prices[rh] - prices[lh];
//     }
//   }

//   return curMax < 0 ? 0 : curMax;
// };

// Solution 2, time out
// Improvement 1, use curLowestByInvalue.
// @param {number[]} prices
// @return {number}
// var maxProfit = function(prices) {
//   var curMax = 0;
//   var curLowestByInvalue = Number.MAX_VALUE;
//   if (!prices || prices.length === 0) {
//     return 0;
//   }
//   for (var buyInDay = 0; buyInDay < prices.length - 1; buyInDay++) {
//     if (curLowestByInvalue < prices[buyInDay]) {
//       continue;
//     } else {
//       curLowestByInvalue = prices[buyInDay];
//     }
//     for (var sellDay = buyInDay + 1; sellDay < prices.length; sellDay++) {
//       var profit = prices[sellDay] - prices[buyInDay];
//       if (profit > curMax) {
//         curMax = profit;
//       }
//     }
//   }
//   return curMax;
// }

// Solution 3, use 1 for loop
// @param {number[]} prices
// @return {number}
var maxProfit = function(prices) {
  var curMax = 0;
  var curLowestByInvalue = Number.MAX_VALUE;

  if (!prices || prices.length === 0) {
    return 0;
  }

  for (var buyInDay = 0; buyInDay < prices.length; buyInDay++) {
    curLowestByInvalue = Math.min(prices[buyInDay], curLowestByInvalue);
    curMax = Math.max(prices[buyInDay] - curLowestByInvalue, curMax);
  }
  return curMax;
}
describe('Test', function() {
  it('Should Pass', function() {
    maxProfit([]).should.equal(0);
  });

  it('Should Pass', function() {
    maxProfit([2, 1]).should.equal(0);
  });

  it('Should Pass', function() {
    maxProfit([2, 1, 2, 0, 1]).should.equal(1);
  });

  it('Should Pass', function() {
    maxProfit([3, 4, 1, 5, 6, 4, 3, 2, 19, 1]).should.equal(18);
  });
});
