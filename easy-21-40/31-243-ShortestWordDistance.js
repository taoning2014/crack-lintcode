// Given a list of words and two words word1 and word2, return the shortest distance between these two words in the list.

// For example,
// Assume that words = ["practice", "makes", "perfect", "coding", "makes"].

// Given word1 = “coding”, word2 = “practice”, return 3.
// Given word1 = "makes", word2 = "coding", return 1.

// Note:
// You may assume that word1 does not equal to word2, and word1 and word2 are both in the list.

'use strict';
require('chai').should();

/**
 * @param {string[]} words
 * @param {string} word1
 * @param {string} word2
 * @return {number}
 */
var shortestDistance = function(words, word1, word2) {
  var curDistance = Number.MAX_VALUE;
  var curWord = '';
  var curPosition = 0;
  var i;

  for (i = 0; i < words.length; i++) {
    if ([word1, word2].indexOf(words[i]) !== -1) {
      if (curWord !== '' && words[i] !== curWord) {
        curDistance = Math.min(curDistance, i - curPosition);
      }
      curWord = words[i];
      curPosition = i;
    }
  }
  return curDistance;
};

describe('Test', function() {
  it('Should pass', function() {
    shortestDistance(["practice", "makes", "perfect", "coding", "makes"], "coding", "practice").should.equal(3);
    shortestDistance(["practice", "makes", "perfect", "coding", "makes"], "makes", "coding").should.equal(1);
  })
})
