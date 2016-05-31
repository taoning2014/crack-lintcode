// Given a string, determine if it is a palindrome, considering only alphanumeric
// characters and ignoring cases.

// For example,
// "A man, a plan, a canal: Panama" is a palindrome.
// "race a car" is not a palindrome.

// Note:
// Have you consider that the string might be empty? This is a good question to ask during an interview.

// For the purpose of this problem, we define empty string as valid palindrome.

// =====
// Note:
// 1, alphanumeric includes number 0 to 9
'use strict';
require('chai').should();

var charleft = 'az'.charCodeAt(0);
var charright = 'az'.charCodeAt(1);
var numleft = '09'.charCodeAt(0);
var numright = '09'.charCodeAt(1);

function isLowerChar(char) {
  var charCode = char.charCodeAt(0);
  return (charCode >= charleft && charCode <= charright) || (charCode >= numleft && charCode <= numright);
}

/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function(s) {
  var l;
  var r;

  if (!s) {
    return true;
  }

  s = s.toLowerCase();
  l = 0;
  r = s.length - 1;

  while (l < r) {
    while (!isLowerChar(s.charAt(l)) && l < s.length ) {
      l++;
    }

    while (!isLowerChar(s.charAt(r)) && r >= 0) {
      r--;
    }

    if (l >= r) {
      return true;
    }

    if (s.charAt(l) !== s.charAt(r)) {
      return false;
    }

    l++;
    r--;
  }

  return true;
};

describe('Test', function () {
  it('Should pass', function () {
    console.log(isPalindrome('A man, a plan, a canal: Panama'));
    console.log(isPalindrome('0p'));
  })
})
