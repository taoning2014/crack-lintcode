'use strict';

// ========================================================================
// Time:   5min
// Submit: 2
//  1, again not see the return type
// ========================================================================

/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function(strs) {
  if (!Array.isArray(strs) || strs.length === 0) {
    return '';
  }

  strs.sort();

  const length = strs.length;
  const first = strs[0];
  const last = strs[length - 1];
  let count = 0;
  for (let i = 0; i < first.length && i < last.length; i++) {
    if (first[i] !== last[i]) {
      return first.substr(0, count);
    } else {
      count++;
    }
  }

  return first.substr(0, count);
};
