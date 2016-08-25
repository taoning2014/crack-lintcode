'use strict';

// ========================================================================
// Time:   5min
// Submit: 1
// ========================================================================

// A strobogrammatic number is a number that looks the same when rotated 180 degrees (looked at upside down).

// Write a function to determine if a number is strobogrammatic. The number is represented as a string.

// For example, the numbers "69", "88", and "818" are all strobogrammatic.

/**
 * @param {string} num
 * @return {boolean}
 */
var isStrobogrammatic = function(num) {
  if (!num || typeof num !== 'string') {
    return false;
  }

  const map = {
    '0' : '0',
    '1' : '1',
    '6' : '9',
    '8' : '8',
    '9' : '6'
  };

  const len = num.length;
  for (let i = 0; i < Math.floor(len / 2); i++) {
    if (map[num[i]] !== num[len - i - 1]) {
      return false;
    }
  }

  if (len % 2 === 1) {
    const index = Math.floor(len / 2);
    return ['0', '1', '8'].indexOf(num[index]) !== -1;
  }

  return true;
};

console.log(isStrobogrammatic('69'));
console.log(isStrobogrammatic('88'));
console.log(isStrobogrammatic('8698'));
console.log(isStrobogrammatic('868'));
