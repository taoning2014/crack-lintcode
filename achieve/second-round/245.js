'use strict';

// ========================================================================
// Time:   15min
// Submit: 1
// ========================================================================

/**
 * @param {string[]} words
 * @param {string} word1
 * @param {string} word2
 * @return {number}
 */
var shortestWordDistance = function(words, word1, word2) {
  if (!Array.isArray(words) || words.length < 2 ||
    typeof word1 !== 'string' || typeof word2 !== 'string') {
    return -1;
  }

  let curPosition = Math.min(words.indexOf(word1), words.indexOf(word2));
  let curWord = words[curPosition];
  let nextWord = (curWord === word1 ? word2 : word1);
  let curMin = Number.POSITIVE_INFINITY;

  for (let i = curPosition + 1; i < words.length; i++) {
    if (words[i] === nextWord) {
      curMin = Math.min(i - curPosition, curMin);
      nextWord = curWord;
      curWord = words[i];
      curPosition = i;
    } else if (words[i] === curWord) {
      curPosition = i;
    }
  }

  return curMin;
};

//
// 'google' 'airbnb'
console.log(shortestWordDistance(['google', 'facebook', 'uber', 'airbnb', 'google'], 'google', 'airbnb'));
