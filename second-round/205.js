'use strict';

// ========================================================================
// Time:   8min
// Submit: 2 add '!s || !t' as condition, empty string is fine
// ========================================================================

/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isIsomorphic = function(s, t) {
  if (typeof s !== 'string'
    || typeof t !== 'string' || s.length !== t.length) {
    return false;
  }

  const sTot = new Map();
  const tTos = new Map();

  for (let i = 0; i < s.length; i++) {
    if (!sTot.has(s[i]) && !tTos.has(t[i])) {
      sTot.set(s[i], t[i]);
      tTos.set(t[i], s[i]);
    } else if (sTot.get(s[i]) !== t[i] || tTos.get(t[i]) !== s[i]) {
      return false;
    }
  }

  return true;
};

console.log(isIsomorphic('egg', 'add'));
console.log(isIsomorphic('egg', 'adb'));
console.log(isIsomorphic('egb', 'add'));
