'use strict';

// ========================================================================
// Time:   5min
// Submit: 1
// ========================================================================

function isAlphanum(char) {
  return (char >= 'a' && char <= 'z') || (char >= '0' && char <= '9');
}

/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function(s) {
  if (!s || typeof s !== 'string') {
    return true;
  }

  s = s.toLowerCase();

  let l = 0;
  let r = s.length - 1;
  while (l < r) {
    while (!isAlphanum(s[l])) {
      l++;
      if (l === s.length) {
        break;
      }
    }

    while (!isAlphanum(s[r])) {
      r--;
      if (r === 0) {
        break;
      }
    }

    if (l >= r) {
      break;
    }

    if (s[l] !== s[r]) {
      return false;
    }
    l++;
    r--;
  }

  return true;
};

console.log(isPalindrome("A"));
