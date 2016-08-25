'use strict';

/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function(s, t) {
  if (typeof s !== 'string' || typeof t !== 'string' || s.length !== t.length) {
    return false;
  }

  const map = new Map();
  for (let i = 0; i < s.length; i++) {
    if (!map.has(s[i])) {
      map.set(s[i], 1);
    } else {
      map.set(s[i], map.get(s[i]) + 1);
    }

    if (!map.has(t[i])) {
      map.set(t[i], -1);
    } else {
      map.set(t[i], map.get(t[i]) - 1);
    }
  }

  for (let value of map.values()) {
    if (value !== 0) {
      return false;
    }
  }

  return true;
};

console.log(isAnagram('abbc', 'cabc'));
