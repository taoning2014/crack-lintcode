'use strict';

// A strobogrammatic number is a number that looks the same when rotated 180 degrees (looked at upside down).

// Find all strobogrammatic numbers that are of length = n.

// For example,
// Given n = 2, return ["11","69","88","96"].

// function permutation(nums, cur, len, result) {
//   if (cur.length === len) {
//     if (len === 1 || cur[len - 1] !== '0') {
//       result.push(cur);
//     }

//     return;
//   }

//   for (let i = 0; i < nums.length; i++) {
//     const copyCur = cur.slice();
//     copyCur.push(nums[i]);
//     permutation(nums, copyCur, len, result);
//   }
// }

// function isStrobogrammatic(x, map) {
//   let len = x.length;

//   // if odd, mid should be '6' or '9'
//   if (len % 2 === 1 && ['6', '9'].indexOf(x[Math.floor(len / 2)]) !== -1) {
//     return false;
//   }

//   for (let i = 0; i < Math.floor(len / 2); i++) {
//     if (map[x[i]] !== x[len - 1 - i]) {
//       return false;
//     }
//   }

//   return true;
// }

// /**
//  * @param {number} n
//  * @return {string[]}
//  */
// var findStrobogrammatic = function(n) {
//   if (!Number.isInteger(n) || n < 1) {
//     return [];
//   }

//   // create permutation
//   const result = [];
//   permutation(['0', '1', '6', '8', '9'], [], n, result);

//   // filter out result
//   const map = {
//     '0': '0',
//     '1': '1',
//     '8': '8',
//     '6': '9',
//     '9': '6'
//   };
//   return result
//     .filter(x => isStrobogrammatic(x, map))
//     .map(x => x.join(''));
// };

// Solution 2.

// var map = {
//   '0': '0',
//   '1': '1',
//   '8': '8',
//   '6': '9',
//   '9': '6'
// };

// function permutation(nums, cur, len, result) {
//   if (cur.length === len) {
//     cur = cur.join('');
//     if (isStrobogrammatic(cur)) {
//       result.push(cur);
//     }
//     return;
//   }

//   for (let i = 0; i < nums.length; i++) {
//     const copyCur = cur.slice();
//     copyCur.push(nums[i]);
//     permutation(nums, copyCur, len, result);
//   }
// }

// function isStrobogrammatic(x) {
//   let len = x.length;

//   // last should not be 0
//   if (len > 1 && x[len - 1] === '0') {
//     return false;
//   }

//   // if odd, mid should be '6' or '9'
//   if (len % 2 === 1 && ['6', '9'].indexOf(x[Math.floor(len / 2)]) !== -1) {
//     return false;
//   }

//   for (let i = 0; i < Math.floor(len / 2); i++) {
//     if (map[x[i]] !== x[len - 1 - i]) {
//       return false;
//     }
//   }

//   return true;
// }

// /**
//  * @param {number} n
//  * @return {string[]}
//  */
// var findStrobogrammatic = function(n) {
//   if (!Number.isInteger(n) || n < 1) {
//     return [];
//   }

//   // create permutation
//   const result = [];
//   permutation(['0', '1', '6', '8', '9'], [], n, result);

//   return result;
// };

// Solution 3. Refer: https://discuss.leetcode.com/topic/20753/ac-clean-java-solution/2

function helper(n, m) {
  if (n === 0) {
    return [''];
  }

  if (n === 1) {
    return ['0', '1', '8'];
  }

  const result = [];
  const list = helper(n - 2, m);
  for (let i = 0; i < list.length; i++) {
    if (n !== m) {
      result.push('0' + list[i] + '0');
    }
    result.push('1' + list[i] + '1');
    result.push('6' + list[i] + '9');
    result.push('9' + list[i] + '6');
    result.push('8' + list[i] + '8');
  }

  return result;
}

/**
 * @param {number} n
 * @return {string[]}
 */
var findStrobogrammatic = function(n) {
  return helper(n, n);
};

console.log(findStrobogrammatic(1));
console.log(findStrobogrammatic(2));
console.log(findStrobogrammatic(3));
// console.log(findStrobogrammatic(2));
