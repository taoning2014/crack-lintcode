// Given a string s and a dictionary of words dict, determine if s can be segmented
// into a space-separated sequence of one or more dictionary words.

// For example, given
// s = "leetcode",
// dict = ["leet", "code"].

// Return true because "leetcode" can be segmented as "leet code".WordBreak.js

/**
 * @param {string} s
 * @param {set<string>} wordDict
 *   Note: wordDict is a Set object, see:
 *   https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Set
 * @return {boolean}
 */
var wordBreak = function(s, wordDict) {
  var i;
  var j;
  var words = [];

  if (!s || !s.length) {
    return true;
  }

  if (!wordDict || !wordDict.size) {
    return false;
  }

  words[0] = true;
  for (i = 1; i <= s.length; i++) {
    // BUG: need to init, otherwise is will be 'undefined'
    words[i] = false;
    for (j = i - 1; j >= 0; j--) {
      if (words[j] && wordDict.has(s.substring(j, i))) {
        words[i] = true;
        break;
      }
    }
  }

  return words[s.length];
};
