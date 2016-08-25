'use strict';

// ========================================================================
// Time:   10min
// Submit: 2 Bug because code not clear enough
// ========================================================================

// Write a function that takes a string as input and reverse only the vowels of a string.

// Example 1:
// Given s = "hello", return "holle".

// Example 2:
// Given s = "leetcode", return "leotcede".
function isVowel(char) {
  return ['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U'].indexOf(char) !== -1;
}

function exchange(array, p, q) {
  const temp = array[p];
  array[p] = array[q];
  array[q] = temp;
}

/**
 * @param {string} s
 * @return {string}
 */
var reverseVowels = function(s) {
  if (!s || typeof s !== 'string') {
    return '';
  }

  const chars = s.split('');
  const len = s.length;
  let l = 0;
  let r = len - 1;
  while (l < r) {
    while (l < len) {
      if (isVowel(chars[l])) {
        break;
      }
      l++;
    }

    while (r >= 0) {
      if (isVowel(chars[r])) {
        break;
      }
      r--;
    }

    if (l >= r) {
      break;
    }

    exchange(chars, l, r);
    l++;
    r--;
  }

  return chars.join('');
};

console.log(reverseVowels('hello'));
console.log(reverseVowels('leetcode'));
