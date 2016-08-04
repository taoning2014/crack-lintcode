'use strict';

// ========================================================================
// Time:   7min
// Submit: 1
// ========================================================================

// Given a string, determine if a permutation of the string could form a palindrome.

// For example,
// "code" -> False, "aab" -> True, "carerac" -> True.

/**
 * @param {string} s
 * @return {boolean}
 */
var canPermutePalindrome = function(s) {
  if (!s || typeof s !== 'string') {
    return false;
  }

  const map = new Map();
  for (let i = 0; i < s.length; i++) {
    if (!map.has(s[i])) {
      map.set(s[i], 1);
    } else {
      map.set(s[i], map.get(s[i]) + 1);
    }
  }

  let count = 0;
  for (let value of map.values()) {
    if (value % 2 !== 0) {
      count++;
    }
  }

  return count === 0 || (count === 1 && s.length % 2 === 1);
};

console.log(canPermutePalindrome('code'));
console.log(canPermutePalindrome('aab'));
console.log(canPermutePalindrome('carerac'));
