'use strict';

// function _findStrobogrammatic(n, m, memorize) {
//   if (memorize.has(n)) {
//     return memorize.get(n);
//   }

//   const list = _findStrobogrammatic(n - 2, m, memorize);
//   const result = [];
//   for (let i = 0; i < list.length; i++) {
//     if (n !== m) {
//       result.push('0' + list[i] + '0');
//     }
//     result.push('1' + list[i] + '1');
//     result.push('6' + list[i] + '9');
//     result.push('8' + list[i] + '8');
//     result.push('9' + list[i] + '6');
//   }

//   memorize.set(n, result);
//   return result;
// }

// /**
//  * @param {number} n
//  * @return {string[]}
//  */
// var findStrobogrammatic = function(n) {
//   if (!Number.isInteger(n) || n < 0) {
//     return [];
//   }

//   const memorize = new Map();
//   memorize.set(0, ['']);
//   memorize.set(1, ['0', '1', '8']);

//   return _findStrobogrammatic(n, n, memorize);
// };

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

/**
 * @param {string} low
 * @param {string} high
 * @return {number}
 */
var strobogrammaticInRange = function(low, high) {
  if (typeof low !== 'string' || typeof high !== 'string') {
    return 0;
  }

  const lowInt = parseInt(low);
  const highInt = parseInt(high);
  if (!Number.isInteger(lowInt) || !Number.isInteger(highInt)) {
    return 0;
  }

  let count = 0;
  for (let len = low.length; len <= high.length; len++) {
    const list = findStrobogrammatic(len);
    if (len > low.length && len < high.length) {
      count += list.length;
      continue;
    }

    for (let i = 0; i < list.length; i++) {
      if (list[i] >= lowInt && list[i] <= highInt) {
        count++;
      }
    }
  }

  return count;
};

console.log(strobogrammaticInRange('0', "100000000000000"));
