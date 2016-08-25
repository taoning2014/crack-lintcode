'use strict';

// ========================================================================
// Time:   5min
// Submit: 1
// ========================================================================

// Given two strings s and t, write a function to determine if t is an anagram of s.

// For example,
// s = "anagram", t = "nagaram", return true.
// s = "rat", t = "car", return false.

/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function(s, t) {
  if (!s && !t) {
    return true;
  }

  if (!s || !t || s.length !== t.length) {
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
}

console.log(isAnagram('anagram', 'nagaram'));
console.log(isAnagram('rat', 'car'));
