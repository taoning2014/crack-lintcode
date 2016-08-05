'use strict';

// ========================================================================
// Time:   6min
// Submit: 1
// ========================================================================

// A strobogrammatic number is a number that looks the same when rotated 180 degrees (looked at upside down).

// Find all strobogrammatic numbers that are of length = n.

// For example,
// Given n = 2, return ["11","69","88","96"].

function _findStrobogrammatic(n, m) {
  if (n === 0) {
    return [''];
  }

  if (n === 1) {
    return ['0', '1', '8'];
  }

  const list = _findStrobogrammatic(n - 2, m);
  const result = [];
  for (let i = 0; i < list.length; i++) {
    if (n !== m) {
      result.push('0' + list[i] + '0');
    }
    result.push('1' + list[i] + '1');
    result.push('6' + list[i] + '9');
    result.push('8' + list[i] + '8');
    result.push('9' + list[i] + '6');
  }
  return result;
}

/**
 * @param {number} n
 * @return {string[]}
 */
var findStrobogrammatic = function(n) {
  if (!Number.isInteger(n) || n < 0) {
    return [];
  }

  return _findStrobogrammatic(n, n);
};

console.log(findStrobogrammatic(2));
console.log(findStrobogrammatic(3));
