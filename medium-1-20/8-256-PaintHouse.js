// There are a row of n houses, each house can be painted with one of
// the three colors: red, blue or green. The cost of painting each house
// with a certain color is different. You have to paint all the houses such
// that no two adjacent houses have the same color.

// The cost of painting each house with a certain color is represented by
// a n x 3 cost matrix. For example, costs[0][0] is the cost of painting house
// 0 with color red; costs[1][2] is the cost of painting house 1 with color green,
// and so on... Find the minimum cost to paint all houses.

// Note:
// All costs are positive integers.
'use strict';
require('chai').should();

/**
 * @param {number[][]} costs
 * @return {number}
 */
var minCost = function(costs) {
  var minCostMatrix = [];
  var i;
  var j;

  if (!costs || !costs.length || !costs[0].length) {
    return p;
  }

  // init matrix
  for (i = 0; i < costs.length; i++) {
    minCostMatrix[i] = [];
  }

  // init first row
  for (i = 0; i < 3; i++) {
    minCostMatrix[0][i] = costs[0][i];
  }

  // go down one row one time
  for (i = 1; i < costs.length; i++) {
    for (j = 0; j < 3; j++) {
      minCostMatrix[i][j] = Math.min(minCostMatrix[i - 1][(j + 1) % 3], minCostMatrix[i - 1][(j + 2) % 3]) + costs[i][j];
    }
  }
  console.log(minCostMatrix);
  return Math.min.apply(null, minCostMatrix[costs.length - 1]);
};

describe('Test', function() {
  it('Should pass', function() {
    var matrix = [
      [2, 3, 1],
      [3, 1, 2],
      [1, 3, 2],
      [3, 2, 1]
    ];
    console.log(minCost(matrix));
  });
});
