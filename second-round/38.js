'use strict';

// ========================================================================
// Time:   11min
// Submit: 1
// ========================================================================

function helper(str) {
  let count = 1;
  let result = '';
  for (let i = 1; i < str.length; i++) {
    if (str[i - 1] === str[i]) {
      count++;
    } else {
      result += count + str[i - 1];
      count = 1;
    }
  }

  if (count !== 0) {
    result += count + str[str.length - 1];
  }

  return result;
}

/**
 * @param {number} n
 * @return {string}
 */
var countAndSay = function(n) {
  if (!Number.isInteger(n) || n < 1) {
    return '';
  }

  let cur = '1';
  for (let i = 2; i <= n; i++) {
    cur = helper(cur);
  }

  return cur;
};

console.log(countAndSay(5));
