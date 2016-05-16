// Write a function that takes an unsigned integer and returns the number of ’1' bits
// it has (also known as the Hamming weight).

// For example, the 32-bit integer ’11' has binary representation 00000000000000000000000000001011,
// so the function should return 3.

// ====
// Note:
// 1, Use Number.toString(radix) to convert to binary.
// 2, parseInt(value, radix) will convert to number based on value + radix, e.g. parseInt('11', 2) -> 3
// 3, Use Number.isInteger() to test if it is a Integer
// 4, if n = 0, if(!n) will be false value, pay attention to this test.

// @param {number} n - a positive integer
// @return {number}
'use strict';
require('chai').should();

var hammingWeight = function(n) {
  if (n === 0) {
    return 0;
  }

  if (!n || !Number.isInteger(n) || n < 0) {
    return -1;
  }

  var count = 0;
  var binaryArray = n.toString(2).split('');

  for (var i = 0; i < binaryArray.length; i++) {
    if (binaryArray[i] === '1') {
      count++;
    }
  }

  return count;
};

describe('Test', function() {
  it('0 should pass', function() {
    hammingWeight(0).should.equal(0);
  });

  it('positive number should pass', function() {
    hammingWeight(11).should.equal(3);
  });
});
