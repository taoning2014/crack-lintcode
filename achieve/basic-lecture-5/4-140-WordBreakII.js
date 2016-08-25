// Time out solution

// Given a string s and a dictionary of words dict, add spaces in s to construct a sentence where each word is a valid dictionary word.

// Return all such possible sentences.

// For example, given
// s = "catsanddog",
// dict = ["cat", "cats", "and", "sand", "dog"].

// A solution is ["cats and dog", "cat sand dog"].

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
  var k;
  var copy;
  var curWord;
  var words = [];

  if (!s || !s.length) {
    return true;
  }

  if (!wordDict || !wordDict.size) {
    return false;
  }

  words[0] = [''];
  for (i = 1; i <= s.length; i++) {
    // BUG: need to init, otherwise is will be 'undefined'
    words[i] = [];
    for (j = i - 1; j >= 0; j--) {
      curWord = s.substring(j, i);
      if (words[j].length && wordDict.has(curWord)) {
        for (k = 0; k < words[j].length; k++) {
          copy = words[j][k];
          copy = (copy + ' ' + curWord).trim();
          words[i].push(copy);
        }
      }
    }
  }

  return words[s.length];
};
