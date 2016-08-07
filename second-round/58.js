'use strict';

// ========================================================================
// Time:   4min
// Submit: 1
// ========================================================================

/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLastWord = function(s) {
  if (!s || typeof s !== 'string') {
    return 0;
  }

  s = s.trim().split(' ');

  return s.length === 0 ? 0 : s[s.length - 1].length;
};

console.log(lengthOfLastWord('hello world'));
console.log(lengthOfLastWord('  h  '));
