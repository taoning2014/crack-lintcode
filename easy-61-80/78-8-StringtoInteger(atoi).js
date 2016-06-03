// Implement atoi to convert a string to an integer.

// Hint: Carefully consider all possible input cases. If you want a challenge,
// please do not see below and ask yourself what are the possible input cases.

// Notes: It is intended for this problem to be specified vaguely (ie, no given
// input specs). You are responsible to gather all the input requirements up front.

// Update (2015-02-10):
// The signature of the C++ function had been updated. If you still see your
// function signature accepts a const char * argument, please click the reload
// button  to reset your code definition.

// Requirements for atoi:
// The function first discards as many whitespace characters as necessary
// until the first non-whitespace character is found. Then, starting from
// this character, takes an optional initial plus or minus sign followed
// by as many numerical digits as possible, and interprets them as a numerical value.

// The string can contain additional characters after those that form the
// integral number, which are ignored and have no effect on the behavior of this function.

// If the first sequence of non-whitespace characters in str is not a valid
// integral number, or if no such sequence exists because either str is empty
// or it contains only whitespace characters, no conversion is performed.

// If no valid conversion could be performed, a zero value is returned. If
// the correct value is out of the range of representable values, INT_MAX
// (2147483647) or INT_MIN (-2147483648) is returned.

'use strict';
require('chai').should();

/**
 * @param {string} str
 * @return {number}
 */
var myAtoi = function(str) {
  var result = 0;
  var sign = 1;
  var i;

  if (!str || !str.trim()) {
    return 0;
  }

  str = str.trim();

  // sign
  if (str.charAt(0) === '-' || str.charAt(0) === '+') {
    sign = (str.charAt(0) === '-') ? -1 : 1;
    str = str.substr(1);
  }

  for (i = 0; i < str.length; i++) {
    if (Number.isInteger(parseInt(str.charAt(i), 10))) {
      result = result * 10 + parseInt(str.charAt(i), 10);
    } else {
      break;
    }
  }

  result = sign * result;

  // out of 32 bits range
  if (result > 2147483647) {
    return 2147483647;
  } else if (result < -2147483648) {
    return -2147483648;
  }

  return result;

};

describe('Test', function() {
  it('Should pass', function() {
    console.log(myAtoi(null));
    console.log(myAtoi(''));
    console.log(myAtoi('n10'));
    console.log(myAtoi('10n'));
    console.log(myAtoi('-01'));
    console.log(myAtoi('-123n'));
    console.log(myAtoi('+123n'));
    console.log(myAtoi('      '));
  })
})
