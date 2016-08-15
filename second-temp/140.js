'use strict';

// ========================================================================
// Time:   22min
// Submit: 2
//  for (let j .... j should -- instead of ++)
// ========================================================================


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

  for (let i = 1; i < n + 1; i++) {
    for (let j = i - 1; j >= 0; j--) {
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

// catsanddog
// ["cat", "cats", "and", "sand", "dog"]
var set = new Set();
set.add('cat');
set.add('cats');
set.add('and');
set.add('sand');
set.add('dog');

console.log(wordBreak('catsanddog', set));
