// Given a string, determine if a permutation of the string could form a palindrome.

// For example,
// "code" -> False, "aab" -> True, "carerac" -> True.
'use strict';
require('chai').should();

/**
 * @param {string} s
 * @return {boolean}
 */
var canPermutePalindrome = function(s) {
  var charArray;
  var count;
  var i;

  if (!s) {
    return false;
  }

  charArray = s.split('');
  charArray.sort();
  count = 0;

  for (i = 0; i < charArray.length - 1;) {
    if (charArray[i] === charArray[i+1]) {
      i += 2;
    } else {
      count++
      i++;
    }
  }

  return (count === 0) || ((count === 1) && charArray.length % 2 === 1);
};

describe('Test', function () {
  it('Should pass', function () {
    canPermutePalindrome('code').should.be.false;
  });

  it('Should pass', function () {
    canPermutePalindrome('aab').should.be.true;
  });

  it('Should pass', function () {
    canPermutePalindrome('carerac').should.be.true;
  });
});
