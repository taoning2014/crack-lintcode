// Given a non-negative number represented as an array of digits, plus one to the number.

// The digits are stored such that the most significant digit is at the head of the list.

'use strict';
require('chai').should();

/**
 * @param {number[]} digits
 * @return {number[]}
 */
var plusOne = function(digits) {
  var length;
  var i;

  if (!digits || !digits.length) {
    return [1];
  }

  length = digits.length;

  // step 1, plus 1
  digits[length - 1] += 1;

  // clear up 10's in the array
  for (i = length - 1; i > 0; i--) {
    if (digits[i] === 10) {
      digits[i] = 0;
      digits[i - 1] += 1;
    }
  }

  // clear up the most significat digit
  if (digits[0] === 10) {
    digits[0] = 0;
    digits.unshift(1);
  }

  return digits;
};

describe('Test', function() {
  it('Should pass', function() {
    console.log(plusOne([]));
    console.log(plusOne([1]));
    console.log(plusOne([9]));
    console.log(plusOne([2, 8, 9]));
  });
});
