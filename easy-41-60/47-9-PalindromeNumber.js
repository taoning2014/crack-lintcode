// Time out

// Determine whether an integer is a palindrome. Do this without extra space.

// Could negative integers be palindromes? (ie, -1)

// If you are thinking of converting the integer to string, note the restriction of using extra space.

// You could also try reversing an integer. However, if you have solved the problem "Reverse Integer",
// you know that the reversed integer might overflow. How would you handle such case?

// There is a more generic way of solving this problem.
'use strict';
require('chai').should();

/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
  var length = 1;
  var count;
  var cur;

  if (!Number.isInteger(x) || x < 0) {
    return false;
  }

  cur = x;
  while (cur > 9) {
    cur = Math.floor(cur / 10);
    length++;
  }

  while (length > 1) {
    if (x % 10 !== Math.floor(x / Math.pow(10, length - 1))) {
      return false;
    }

    x = x % Math.pow(10, length - 1);
    x = Math.floor(x / 10);
    length -= 2;
  }

  return true;
};

describe('Test', function() {
  it('Should pass', function() {
    // console.log(isPalindrome(0));
    // console.log(isPalindrome(1));
    // console.log(isPalindrome(9));
    console.log(isPalindrome(10));
    // console.log(isPalindrome(11));
    console.log(isPalindrome(1755225571));
  })
})
