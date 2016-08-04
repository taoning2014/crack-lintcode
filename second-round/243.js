'use strict';

// ========================================================================
// Time:   9min
// Submit: 1
// ========================================================================

// Given a list of words and two words word1 and word2, return the shortest distance between
// these two words in the list.

// For example,
// Assume that words = ["practice", "makes", "perfect", "coding", "makes"].

// Given word1 = “coding”, word2 = “practice”, return 3.
// Given word1 = "makes", word2 = "coding", return 1.

// Note:
// You may assume that word1 does not equal to word2, and word1 and word2 are both in the list.

/**
 * @param {string[]} words
 * @param {string} word1
 * @param {string} word2
 * @return {number}
 */
var shortestDistance = function(words, word1, word2) {
  if (!Array.isArray(words) || words.length === 0) {
    return 0;
  }

  let curDistance = Number.POSITIVE_INFINITY;
  let curWord;
  let nextWord;
  let lastPosition;

  if (words.indexOf(word1) < words.indexOf(word2)) {
    curWord = word1;
    nextWord = word2;
    lastPosition = words.indexOf(word1);
  } else {
    curWord = word2;
    nextWord = word1;
    lastPosition = words.indexOf(word2);
  }

  for (let i = lastPosition + 1; i < words.length; i++) {
    if (words[i] === curWord) {
      lastPosition = i;
    } else if (words[i] === nextWord) {
      curDistance = Math.min(i - lastPosition, curDistance);
      lastPosition = i;
      nextWord = curWord;
      curWord = words[i];
    }
  }

  return curDistance;
};

console.log(shortestDistance(["practice", "makes", "perfect", "coding", "makes"], "coding", "practice"));
console.log(shortestDistance(["practice", "makes", "perfect", "coding", "makes"], "coding", "makes"));
