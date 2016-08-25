// Given an integer, write a function to determine if it is a power of two.

// Note: 1 is 0's power of 2
'use strict';
require('chai').should();

// @param {number} n
// @return {boolean}
var isPowerOfTwo = function(n) {
  if (!Number.isInteger(n) || n < 2) {
    return false;
  }

  while (n > 1) {
    if (n % 2 !== 0) {
      return false;
    }
    n /= 2;
  }

  return true;
};

describe('Test', function() {
  it('null should return false', function() {
    isPowerOfTwo(null).should.be.false;
  });

  it('1 should return false', function() {
    isPowerOfTwo(1).should.be.false;
  });

  it('2 should return true', function() {
    isPowerOfTwo(2).should.be.true;
  });

  it('32 should return true', function() {
    isPowerOfTwo(32).should.be.true;
  });

  it('33 should return false', function() {
    isPowerOfTwo(33).should.be.false;
  });

  it('62 should return false', function() {
    isPowerOfTwo(62).should.be.false;
  });
});
