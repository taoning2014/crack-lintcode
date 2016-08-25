'use strict';

// Given a string, find the length of the longest substring T that contains at most k distinct characters.

// For example, Given s = “eceba” and k = 2,

// T is "ece" which its length is 3.

// refer: https://discuss.leetcode.com/topic/41671/15-lines-java-solution-using-slide-window/2

/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 */
var lengthOfLongestSubstringKDistinct = function(s, k) {
  if (typeof s !== 'string' || !Number.isInteger(k) || k < 1) {
    return 0;
  }

  const record = new Array(256);
  record.fill(0);

  let l = 0;
  let curChars = 0;
  let result = 0;

  for (let r = 0; r < s.length; r++) {
    if (record[s.charCodeAt(r)]++ === 0) {
      curChars++;
    }

    if (curChars > k) {
      while (--record[s.charCodeAt(l++)] > 0);
      curChars--;
    }

    result = Math.max(r - l + 1, result);
  }

  return result;
};

console.log(lengthOfLongestSubstringKDistinct('eceba', 10));
