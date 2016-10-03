'use strict';

/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isIsomorphic = function(s, t) {
  if (!s && !t) {
    return true;
  }

  if (!s || !t || typeof s !== 'string' || typeof t !== 'string' || s.length !== t.length) {
    return false;
  }

  const sToT = new Map();
  const tToS = new Map();
  for (let i = 0; i < s.length; i++) {
    if (sToT.has(s[i]) || tToS.has(t[i])) {
      if (sToT.get(s[i]) !== t[i] || tToS.get(t[i]) !== s[i]) {
        return false;
      }
    } else {
      sToT.set(s[i], t[i]);
      tToS.set(t[i], s[i]);
    }
  }

  return true;
};
