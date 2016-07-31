'use strict';

// A strobogrammatic number is a number that looks the same when rotated 180 degrees (looked at upside down).

// Find all strobogrammatic numbers that are of length = n.

// For example,
// Given n = 2, return ["11","69","88","96"].

function permutation(nums, cur, len, result) {
  if (cur.length === len) {
    if (len === 1 || cur[len - 1] !== '0') {
      result.push(cur);
    }

    return;
  }

  for (let i = 0; i < nums.length; i++) {
    const copyCur = cur.slice();
    copyCur.push(nums[i]);
    permutation(nums, copyCur, len, result);
  }
}

function isStrobogrammatic(x, map) {
  let len = x.length;

  // if odd, mid should be '6' or '9'
  if (len % 2 === 1 && ['6', '9'].indexOf(x[Math.floor(len / 2)]) !== -1) {
    return false;
  }

  for (let i = 0; i < Math.floor(len / 2); i++) {
    if (map[x[i]] !== x[len - 1 - i]) {
      return false;
    }
  }

  return true;
}

/**
 * @param {number} n
 * @return {string[]}
 */
var findStrobogrammatic = function(n) {
  if (!Number.isInteger(n) || n < 1) {
    return [];
  }

  // create permutation
  const result = [];
  permutation(['0', '1', '6', '8', '9'], [], n, result);

  // filter out result
  const map = {
    '0': '0',
    '1': '1',
    '8': '8',
    '6': '9',
    '9': '6'
  };
  return result
    .filter(x => isStrobogrammatic(x, map))
    .map(x => x.join(''));
};

console.log(findStrobogrammatic(1));
console.log(findStrobogrammatic(2));
console.log(findStrobogrammatic(3));
// console.log(findStrobogrammatic(2));
