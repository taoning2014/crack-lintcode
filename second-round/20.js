'use strict';

// ========================================================================
// Time:   7min
// Submit: 1
// ========================================================================

/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
  if (!s || typeof s !== 'string') {
    return true;
  }

  const stack = [];
  const map = {')' : '(', ']' : '[', '}' : '{'};
  for (let i = 0; i < s.length; i++) {
    if (['(', '[', '{'].indexOf(s[i]) !== -1) {
      stack.push(s[i]);
    } else {
      const temp = stack.pop();
      if (temp !== map[s[i]]) {
        return false;
      }
    }
  }

  return stack.length === 0;
};
