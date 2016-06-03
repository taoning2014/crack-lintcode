// Given a positive integer n, break it into the sum of at least two positive
// integers and maximize the product of those integers. Return the maximum product you can get.

// For example, given n = 2, return 1 (2 = 1 + 1); given n = 10, return 36 (10 = 3 + 3 + 4).

// Note: you may assume that n is not less than 2.

// Hint:

// There is a simple O(n) solution to this problem.
// You may check the breaking results of n ranging from 7 to 10 to discover the regularities.

// Note:
// 1, how to use switch
// 2, Refer: https://leetcode.com/discuss/105958/clear-and-easy-to-understand-java-solution-with-explanation
// regularities
// 5   6   7  Group 1
// 32  33  34
// 8   9   10  Group 2
// 332 333 334
// 11    12    13   Group 3
// 3332  3333  3334
// 3,
'use strict';
require('chai').should();

/**
 * @param {number} n
 * @return {number}
 */
var integerBreak = function(n) {
  var result = 1;

  if (n === 2) {
    return 1;
  }

  if (n === 3) {
    return 2;
  }

  if (n === 4) {
    return 4;
  }

  while (n > 7) {
    n -= 3;
    result *= 3;
  }

  switch (n) {
    case 5:
      return result * 2 * 3;
    case 6:
      return result * 3 * 3;
    case 7:
      return result * 3 * 4;
  }
};

describe('Test', function() {
  it('Should pass', function() {
    console.log(integerBreak(7));
    console.log(integerBreak(10));
    console.log(integerBreak(13));
  });
});
