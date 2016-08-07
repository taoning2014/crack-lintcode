'use strict';

// ========================================================================
// Time:   7min
// Submit: 1
// ========================================================================

/**
 * @param {string} pattern
 * @param {string} str
 * @return {boolean}
 */
var wordPattern = function(pattern, str) {
  if (typeof pattern !== 'string' || typeof str !== 'string') {
    return false;
  }

  const strArray = str.split(' ');

  if (pattern.length !== strArray.length) {
    return false;
  }

  const pToS = new Map();
  const sToP = new Map();
  for (let i = 0; i < pattern.length; i++) {
    if (!pToS.has(pattern[i]) && !sToP.has(strArray[i])) {
      pToS.set(pattern[i], strArray[i]);
      sToP.set(strArray[i], pattern[i]);
    } else if (pToS.get(pattern[i]) !== strArray[i]
      || sToP.get(strArray[i]) !== pattern[i]) {
      return false;
    }
  }

  return true;
};

console.log(wordPattern("abba", "dog cat cat fish"));
