'use strict';

// ========================================================================
// Time:   7min
// Submit: 1
// ========================================================================

/**
 * @param {string} a
 * @param {string} b
 * @return {string}
 */
var addBinary = function(a, b) {
  if (!a && !b) {
    return '';
  }

  if (!a || !b) {
    return a || b;
  }

  const length = Math.max(a.length, b.length);
  const result = new Array(length);
  let j = a.length - 1;
  let k = b.length - 1;
  for (let i = length - 1; i >= 0; i--) {
    if (j < 0) {
      result[i] = parseInt(b[k--], 2);
    } else if (k < 0) {
      result[i] = parseInt(a[j--], 2);
    } else {
      result[i] = parseInt(a[j--], 2) + parseInt(b[k--], 2);
    }
  }

  for (let i = length - 1; i > 0; i--) {
    if (result[i] > 1) {
      result[i] -= 2;
      result[i - 1]++;
    }
  }

  if (result[0] > 1) {
    result[0] -= 2;
    result.unshift(1);
  }

  return result.join('');
};

console.log(addBinary('11111111', '1'));
