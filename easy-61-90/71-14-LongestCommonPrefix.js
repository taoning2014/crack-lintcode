// Write a function to find the longest common prefix string amongst an array of strings.
'use strict';
require('chai').should();

function findShortest(strs) {
  var result = strs[0];
  strs.forEach(function(str) {
    if (str.length < result.length) {
      result = str;
    }
  });

  return result;
}
/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function(strs) {
  var shortestStr;
  var i;
  var j;

  if (!strs || !strs.length) {
    return '';
  }

  shortestStr = findShortest(strs);

  for (i = 0; i < shortestStr.length; i++) {
    for (j = 0; j < strs.length; j++) {
      if (strs[j].charAt(i) !== shortestStr.charAt(i)) {
        return shortestStr.substr(0, i);
      }
    }
  }

  return shortestStr;
};

// Solution 2, refer: https://discuss.leetcode.com/topic/27913/sorted-the-array-java-solution-2-ms
/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function(strs) {
  if (!Array.isArray(strs) || strs.length === 0) {
    return '';
  }

  strs.sort();
  const m = strs[0].length;
  const n = strs[strs.length - 1].length;
  for (let i = 0; i < m && i < n; i++) {
    if (strs[0][i] !== strs[strs.length - 1][i]) {
      return strs[0].substr(0, i);
    }
  }

  return m < n ? strs[0] : strs[strs.length - 1];
}

describe('Test', function () {
  it('Should pass', function () {
    console.log(longestCommonPrefix(['hello', 'heis', 'hell']));
    console.log(longestCommonPrefix(['o', 'a', 'i']));
  })
})
