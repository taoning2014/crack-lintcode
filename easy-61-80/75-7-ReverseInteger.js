// Reverse digits of an integer.

// Example1: x = 123, return 321
// Example2: x = -123, return -321
'use strict';
require('chai').should();

// =====
// Note:
// 1, Need to thinking about overflow
// 2, Need to rememeber the range of 32 bits signed integer: .2 billion
/**
 * @param {number} x
 * @return {number}
 */
var reverse = function(x) {
  var sign = 1;
  var result = 0;

  if (!Number.isInteger(x)) {
    return NaN;
  }

  if (x < 0) {
    sign = -1;
    x = -x;
  }

  while (x) {
    result = result * 10 + x % 10;
    x = Math.floor(x / 10);
  }

  result *= sign;
  if (result < -2147483648 || result > 2147483647) {
    return 0;
  } else {
    return result;
  }
};

describe('Test', function() {
  it('Should pass', function() {
    // console.log(reverse(''));
    // console.log(reverse(-25));
    // console.log(reverse(-5));
    // console.log(reverse(0));
    // console.log(reverse(5));
    // console.log(reverse(25));
    // console.log(reverse(11));
    console.log(reverse(1534236469));
  });
});
