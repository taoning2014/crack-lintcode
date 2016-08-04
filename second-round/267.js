'use strict';

// ========================================================================
// Time:   20min
// Submit: 1
// ========================================================================

// Given a string s, return all the palindromic permutations (without duplicates) of it.
// Return an empty list if no palindromic permutation could be form.

// For example:

// Given s = "aabb", return ["abba", "baab"].

// Given s = "abc", return [].

var canPermutePalindrome = function(s) {
  if (!s || typeof s !== 'string') {
    return null;
  }

  const map = new Map();
  for (let i = 0; i < s.length; i++) {
    if (!map.has(s[i])) {
      map.set(s[i], 1);
    } else {
      map.set(s[i], map.get(s[i]) + 1);
    }
  }

  let result = { mid: '', chars: [] };
  let count = 0;
  for (let entry of map.entries()) {
    if (entry[1] % 2 !== 0) {
      result.mid = entry[0]
      count++;
      entry[1]--;
    }

    while (entry[1] > 0) {
      result.chars.push(entry[0]);
      entry[1] -= 2;
    }
  }

  if (count === 0 || (count === 1 && s.length % 2 === 1)) {
    return result;
  }

  return null;
};

function permutation(chars, cur, result) {
  if (chars.length === 0) {
    result.push(cur);
  }

  for (let i = 0; i < chars.length; i++) {
    if (i !== 0 && chars[i] === chars[i - 1]) {
      continue;
    }

    const copy = chars.slice();
    const char = copy.splice(i, 1);
    permutation(copy, char + cur + char, result);
  }
}

/**
 * @param {string} s
 * @return {string[]}
 */
var generatePalindromes = function(s) {
  const map = canPermutePalindrome(s);

  if (!map) {
    return [];
  }

  const result = [];
  permutation(map.chars, map.mid, result);

  return result;
};

console.log(generatePalindromes('aaaacbb'));
console.log(generatePalindromes('abc'));
