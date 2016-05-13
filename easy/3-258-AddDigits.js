// Given a non-negative integer num, repeatedly add all its digits until the result has only one digit.

// For example:

// Given num = 38, the process is like: 3 + 8 = 11, 1 + 1 = 2. Since 2 has only one digit, return it.

// Follow up:
// Could you do it without any loop/recursion in O(1) runtime?

// ====
// Note: Use Math to implement integer divide

'use strict';

require('chai').should();

var addDigits = function(num) {
  while (num >= 10) {
    var temp = 0;
    while (num > 0) {
      temp += num % 10;
      num = Math.floor(num / 10);
    }
    num = temp;
  }

  return num;
};

describe('Test', function() {
  it('Should Pass', function() {
      addDigits(1).should.equal(1);
      addDigits(21).should.equal(3);
      addDigits(201).should.equal(3);
      addDigits(59).should.equal(5);
  });
});
