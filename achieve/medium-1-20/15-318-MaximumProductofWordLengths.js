// Given a string array words, find the maximum value of length(word[i]) * length(word[j])
// where the two words do not share common letters. You may assume that each word will
// contain only lower case letters. If no such two words exist, return 0.

// Example 1:
// Given ["abcw", "baz", "foo", "bar", "xtfn", "abcdef"]
// Return 16
// The two words can be "abcw", "xtfn".

// Example 2:
// Given ["a", "ab", "abc", "d", "cd", "bcd", "abcd"]
// Return 4
// The two words can be "ab", "cd".

// Example 3:
// Given ["a", "aa", "aaa", "aaaa"]
// Return 0
// No such pair of words.
'use strict';
require('chai').should();

function Word(word) {
  var aCharCode = 'a'.charCodeAt(0);
  var curCharCode;
  var i;
  this.letters = [];

  for (i = 0; i < 26; i++) {
    this.letters[i] = false;
  }

  for (i = 0; i < word.length; i++) {
    curCharCode = word.charCodeAt(i);
    this.letters[curCharCode - aCharCode] = true;
  }
}

Word.prototype.noCommonLetter = function(anotherWord) {
  var i;

  for (i = 0; i < 26; i++) {
    if (this.letters[i] === true && anotherWord.letters[i] === true) {
      return false;
    }
  }

  return true
};

// Solution: https://leetcode.com/discuss/93214/java-solution-without-bit-manipulation
/**
 * @param {string[]} words
 * @return {number}
 */
var maxProduct = function(words) {
  var wordsArray = [];
  var result = 0;
  var i;
  var j;

  if (!words || words.length < 2) {
    return result;
  }

  for (i = 0; i < words.length; i++) {
    wordsArray[i] = new Word(words[i]);
  }

  for (i = 0; i < words.length - 1; i++) {
    for (j = i + 1; j < words.length; j++) {
      if (wordsArray[i].noCommonLetter(wordsArray[j])) {
        result = Math.max(result, words[i].length * words[j].length);
      }
    }
  }

  return result;

};

describe('Test', function() {
  it('Should pass', function() {
    console.log(maxProduct(["abcw", "baz", "foo", "bar", "xtfn", "abcdef"]));
    console.log(maxProduct(["a", "ab", "abc", "d", "cd", "bcd", "abcd"]));
    console.log(maxProduct(["a", "aa", "aaa", "aaaa"]));
  });
});
