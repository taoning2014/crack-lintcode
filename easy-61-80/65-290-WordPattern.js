// Given a pattern and a string str, find if str follows the same pattern.

// Here follow means a full match, such that there is a bijection between a letter
// in pattern and a non-empty word in str.

// Examples:
// pattern = "abba", str = "dog cat cat dog" should return true.
// pattern = "abba", str = "dog cat cat fish" should return false.
// pattern = "aaaa", str = "dog cat cat dog" should return false.
// pattern = "abba", str = "dog dog dog dog" should return false.
// Notes:
// You may assume pattern contains only lowercase letters, and str contains lowercase
// letters separated by a single space.
'use strict';
require('chai').should();

/**
 * @param {string} pattern
 * @param {string} str
 * @return {boolean}
 */
var wordPattern = function(pattern, str) {
  var patternToStrMap = {};
  var strToPatternMap = {};
  var patternArray;
  var strArray;
  var curPattern;
  var curStr;
  var i;

  if (!pattern || !str) {
    return false;
  }

  patternArray = pattern.split('');
  strArray = str.split(' ');

  if (patternArray.length !== strArray.length) {
    return false;
  }

  for (i = 0; i < patternArray.length; i++) {
    curPattern = patternArray[i];
    curStr = strArray[i];
    if ((patternToStrMap[curPattern] && patternToStrMap[curPattern] !== curStr) || (strToPatternMap[curStr] && strToPatternMap[curStr] !== curPattern)) {
      return false;
    } else {
      patternToStrMap[curPattern] = curStr;
      strToPatternMap[curStr] = curPattern
    }
  }

  return true;
};

describe('Test', function() {
  it('Should pass', function() {
    console.log(wordPattern('abba', 'dog cat cat dog'));
    console.log(wordPattern('abba', 'dog cat cat fish'));
  });
});
