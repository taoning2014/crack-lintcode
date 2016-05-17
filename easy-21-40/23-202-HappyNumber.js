// Write an algorithm to determine if a number is "happy".

// A happy number is a number defined by the following process:
// Starting with any positive integer, replace the number by the sum of
// the squares of its digits, and repeat the process until the number equals 1
// (where it will stay), or it loops endlessly in a cycle which does not include 1.
// Those numbers for which this process ends in 1 are happy numbers.

// Example: 19 is a happy number (9_2 means 9 * 9)
// 1_2 + 9_2 = 82
// 8_2 + 2_2 = 68
// 6_2 + 8_2 = 100
// 1_2 + 0_2 + 0_2 = 1

'use strict';
require('chai').should();

var nextLoop = function(n) {
  var sum = 0;
  while (n !== 0) {
    sum += Math.pow(n % 10, 2);
    n = Math.floor(n / 10);
  }
  return sum;
};

// @param {number} n
// @return {boolean}
var isHappy = function(n) {
  var record = {};

  if (!Number.isInteger(n) || n < 0) {
    return false;
  }

  while (n !== 1) {
    n = nextLoop(n);
    if (record[n]) {
      return false;
    }
    record[n] = true;
  }

  if (n === 1) {
    return true;
  }
  return false;
};

describe('Test', function() {
  it('Should Pass', function() {
    isHappy(1).should.be.true;
  });

  it('Should Pass', function() {
    isHappy(20).should.be.true;
  });
});
