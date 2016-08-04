'use strict';

// ========================================================================
// Time:   5min
// Submit: 1
// ========================================================================

// Write a function that takes a string as input and returns the string reversed.

// Example:
// Given s = 'hello', return 'olleh'.

function exchange(chars, p, q) {
  const temp = chars[p];
  chars[p] = chars[q];
  chars[q] = temp;
}

/**
 * @param {string} s
 * @return {string}
 */
var reverseString = function(s) {
  if (!s || typeof s !== 'string') {
    return '';
  }

  const chars = s.split('');
  for (let i = 0; i < Math.floor((chars.length / 2)); i++) {
    exchange(chars, i, chars.length - 1 - i);
  }

  return chars.join('');
};

console.log(reverseString('hello'));
console.log(reverseString('heeb'));
console.log(reverseString('o'));
