'use strict';

/**
 * @param {string} s
 * @param {set<string>} wordDict
 *   Note: wordDict is a Set object, see:
 *   https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Set
 * @return {boolean}
 */
var wordBreak = function(s, wordDict) {
  if (!s || typeof s !== 'string' || !Array.isArray(wordDict)
    || wordDict.length === 0) {
    return false;
  }

  const dp = new Array(s.length + 1);
  dp.fill(false);
  dp[0] = true;

  for (let i = 1; i < s.length + 1; i++) {
    for (let j = 0; j < i; j++) {
      if (!dp[j]) {
        continue;
      }

      const curStr = s.substring(j, i);
      if (wordDict.indexOf(curStr) !== -1) {
        dp[i] = true;
        break;
      }
    }
  }

  return dp[s.length];
};

console.log(wordBreak("leetcode", ["leet","code"]));
