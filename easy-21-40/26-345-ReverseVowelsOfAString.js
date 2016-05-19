// Write a function that takes a string as input and reverse only the vowels of a string.

// Example 1:
// Given s = "hello", return "holle".

// Example 2:
// Given s = "leetcode", return "leotcede".

// ======
// Note: Should ask whether it is case sensitive.
'use strict';
require('chai').should();

/**
 * @param {string} s
 * @return {string}
 */
var reverseVowels = function(s) {
  var vowels = ['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U'];
  var charArray;
  var p;
  var q;
  var temp;

  if (!s) {
    return '';
  }

  charArray = s.split('');
  p = 0;
  q = charArray.length - 1;

  while (p < q) {
    while (p < q) {
      if (vowels.indexOf(charArray[p]) !== -1) {
        break;
      }
      p++;
    }

    while (p < q) {
      if (vowels.indexOf(charArray[q]) !== -1) {
        break;
      }
      q--;
    }

    if (p < q) {
      temp = charArray[p];
      charArray[p] = charArray[q];
      charArray[q] = temp;
      p++;
      q--;
    }
  }

  return charArray.join('');
};

describe('Test', function() {
  it('Should Pass', function() {
    reverseVowels('o').should.equal('o');
    console.log(reverseVowels('o'));
  });

  it('Should Pass', function() {
    reverseVowels('hello').should.equal('holle');
    console.log(reverseVowels('hello'));
  });

  it('Should Pass', function() {
    reverseVowels('leetcode').should.equal('leotcede');
    console.log(reverseVowels('leetcode'));
  });

  it('Should Pass', function() {
    reverseVowels('aA').should.equal('Aa');
    console.log(reverseVowels('aA'));
  });
});
