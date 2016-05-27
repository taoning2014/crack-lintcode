// Given an integer n, return the number of trailing zeroes in n!.

// Note: Your solution should be in logarithmic time complexity.

// =====
// Note:
// 1, Good refer to: http://www.purplemath.com/modules/factzero.html
// 2, Thanks for Vivian helping me understand the solution algorithm
'use strict';
require('chai').should();


/**
 * @param {number} n
 * @return {number}
 */
var trailingZeroes = function(n) {
  var count = 0;

  if (!Number.isInteger(n) || n < 0) {
    return 0;
  }

  while (n !== 0) {
    n = Math.floor(n / 5);
    count += n;
  }

  return count;
};

describe('Test', function () {
  it('Should pass', function () {
    console.log(trailingZeroes(0));
    console.log(trailingZeroes(1));
    console.log(trailingZeroes(6));
    console.log(trailingZeroes(10));
    console.log(trailingZeroes(11));
    console.log(trailingZeroes(26)); // 6
  })
})
