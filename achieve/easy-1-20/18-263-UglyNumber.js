// Write a program to check whether a given number is an ugly number.

// Ugly numbers are positive numbers whose prime factors only include 2, 3, 5.
// For example, 6, 8 are ugly while 14 is not ugly since it includes another prime factor 7.

// Note that 1 is typically treated as an ugly number.

'use strict';
require('chai').should();

// @param {number} num
// @return {boolean}
var isUgly = function(num) {
  if (!Number.isInteger(num) || num <= 0) {
    return false;
  }

  var primeFactors = [2, 3, 5];
  while (num !== 1) {
    var preNum = num;
    for (var i = 0; i < 3; i++) {
      if (num % primeFactors[i] === 0) {
        num /= primeFactors[i];
        break;
      }
    }
    if (preNum === num) {
      return false;
    }
  }
  return true;
};

describe('Test', function() {
  it('null should return false', function() {
    isUgly(null).should.be.false;
  });

  it('-1 should return false', function() {
    isUgly(-1).should.be.false;
  });

  it('1 should return true', function() {
    isUgly(1).should.be.true;
  });

  it('5 should return true', function() {
    isUgly(5).should.be.true;
  });

  it('30 should be true', function() {
    isUgly(30).should.be.true;
  });

  it('14 should be false', function() {
    isUgly(14).should.be.false;
  });
});
