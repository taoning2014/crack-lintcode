// This is a follow up of Shortest Word Distance. The only difference is now word1 could be the same as word2.

// Given a list of words and two words word1 and word2, return the shortest distance between these two words in the list.

// word1 and word2 may be the same and they represent two individual words in the list.

// For example,
// Assume that words = ["practice", "makes", "perfect", "coding", "makes"].

// Given word1 = “makes”, word2 = “coding”, return 1.
// Given word1 = "makes", word2 = "makes", return 3.

// Note:
// You may assume word1 and word2 are both in the list.
'use strict';
require('chai').should();

/**
 * @param {string[]} words
 * @param {string} word1
 * @param {string} word2
 * @return {number}
 */
var shortestWordDistance = function(words, word1, word2) {
  var beginIndex;
  var curWord;
  var curPosition;
  var nextWord;
  var minDistance;
  var i;

  if (!words) {
    return -1;
  }

  beginIndex = Math.min(words.indexOf(word1), words.indexOf(word2));
  curWord = words[beginIndex];
  curPosition = beginIndex;
  nextWord = curWord === word1 ? word2 : word1;
  minDistance = Number.MAX_VALUE;
  i;

  for (i = beginIndex + 1; i < words.length; i++) {
    if (words[i] === nextWord) {
      minDistance = Math.min(minDistance, i - curPosition);
      curWord = words[i];
      curPosition = i;
      nextWord = curWord === word1 ? word2 : word1;
    } else if (words[i] === curWord) {
      curPosition = i;
    }
  }

  return minDistance;
};

describe('Test', function() {
  it('Should pass', function() {
    console.log(shortestWordDistance(["practice", "makes", "perfect", "coding", "makes"], "makes", "coding"));
    console.log(shortestWordDistance(["practice", "makes", "perfect", "coding", "makes"], "makes", "makes"));
    console.log(shortestWordDistance(["a", "c", "a", "b"], "a", "b"));
  });
});
