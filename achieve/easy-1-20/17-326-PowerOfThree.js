// Given an integer, write a function to determine if it is a power of three.

// Follow up:
// Could you do it without using any loop / recursion?

'use strict';
require('chai').should();

// @param {number} n
// @return {boolean}
var isPowerOfThree = function(n) {
  var powerOfThree = 1;

  if (n === powerOfThree) {
    return true;
  }

  while (n > powerOfThree) {
    powerOfThree *= 3;
    if (n === powerOfThree) {
      return true;
    }
  }

  return false;
};

describe('Test', function () {
  it('negative value should return false', function () {
    isPowerOfThree(-5).should.be.false;
  });

  it('1 should return true', function () {
    isPowerOfThree(1).should.be.true;
  });

  it('3 should return true', function () {
    isPowerOfThree(3).should.be.true;
  });

  it('5 should return false', function () {
    isPowerOfThree(5).should.be.false;
  });

  it('81 should return true', function () {
    isPowerOfThree(81).should.be.true;
  });
});
