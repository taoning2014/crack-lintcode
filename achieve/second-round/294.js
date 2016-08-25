'use strict';

// ========================================================================
// Time:   5min
// Submit: 1
// ========================================================================

/**
 * @param {string} s
 * @return {boolean}
 */
var canWin = function(s) {
  if (!s || s.length < 2 || typeof s !== 'string') {
    return false;
  }

  for (let i = 1; i < s.length; i++) {
    if (s[i - 1] === '+' && s[i] === '+') {
      const next = s.substring(0, i - 1) + '--' + s.substring(i+1);
      if (!canWin(next)) {
        return true;
      }
    }
  }

  return false;
};
