'use strict';

// ========================================================================
// Time:   6min
// Submit: 1
// ========================================================================

/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
var strStr = function(haystack, needle) {
  if (typeof haystack !== 'string' || typeof needle !== 'string') {
    return -1;
  }

  let i;
  let j;
  for (i = 0; i < haystack.length - needle.length + 1; i++) {
    for (j = 0; j < needle.length; j++) {
      if (haystack[i + j] !== needle[j]) {
        break;
      }
    }

    if (j === needle.length) {
      return i;
    }
  }

  return -1;
};

console.log(strStr('hello', 'lo'));
