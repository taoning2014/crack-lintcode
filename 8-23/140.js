'use strict';

function getMaxLength(wordDict) {
  let maxLength = Number.NEGATIVE_INFINITY;
  for (let word of wordDict.values()) {
    maxLength = Math.max(word.length, maxLength);
  }

  return maxLength;
}

function addToArray(array1, array2, word) {
  for (let i = 0; i < array1.length; i++) {
    if (array1[i] !== '') {
      array2.push(array1[i] + ' ' + word);
    } else {
      array2.push(word);
    }
  }
}

/**
 * @param {string} s
 * @param {set<string>} wordDict
 *   Note: wordDict is a Set object, see:
 *   https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Set
 * @return {string[]}
 */
var wordBreak = function(s, wordDict) {
  if (!s || typeof s !== 'string' || wordDict.size === 0) {
    return [];
  }

  const n = s.length;
  const dp = [];
  for (let i = 0; i < n + 1; i++) {
    dp[i] = [];
  }
  dp[0] = [''];

  const maxLength = getMaxLength(wordDict);
  for (let i = 1; i < n + 1; i++) {
    for (let j = i - 1; j >= 0 && i - j <= maxLength; j--) {
      if (dp[j].length === 0) {
        continue;
      }

      const curWord = s.substring(j, i);

      if (!wordDict.has(curWord)) {
        continue;
      }

      addToArray(dp[j], dp[i], curWord);

    }
  }
  return dp[n];
};
