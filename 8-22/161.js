'use strict';

// Solution 1. 错误，只考虑了char的个数，没有考虑char的位置

// function processMap(map) {
//   const resultObj = { delete: false, add: false, invalid: false };
//   for (let value of map.values()) {
//     if (value === 1) {
//       if (resultObj.delete) {
//         resultObj.invalid = true;
//         return resultObj;
//       } else {
//         resultObj.delete = true;
//       }
//     } else if (value === -1) {
//       if (resultObj.add) {
//         resultObj.invalid = true;
//         return resultObj;
//       } else {
//         resultObj.add = true;
//       }
//     } else if (value !== 0) {
//       resultObj.invalid = true;
//       return resultObj;
//     }
//   }

//   return resultObj;
// }

/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
// var isOneEditDistance = function(s, t) {
//   if (typeof s !== 'string' || typeof t !== 'string' || Math.abs(s.length - t.length) > 1) {
//     return false;
//   }

//   const map = new Map();
//   for (let i = 0; i < s.length; i++) {
//     if (!map.has(s[i])) {
//       map.set(s[i], 1)
//     } else {
//       map.set(s[i], map.get(s[i]) + 1);
//     }
//   }

//   for (let i = 0; i < t.length; i++) {
//     if (!map.has(t[i])) {
//       map.set(t[i], -1);
//     } else {
//       map.set(t[i], map.get(t[i]) - 1);
//     }
//   }

//   const resultObj = processMap(map);

//   if (resultObj.invalid) {
//     return false;
//   }

//   const diff = s.length - t.length;

//   // delete is true when map has +1 value, which means s delete
//   // add is true when map has -1 value, which means s shoudl add
//   switch (diff) {
//     case -1:
//       return !resultObj.delete && resultObj.add;
//     case 0:
//       return resultObj.delete && resultObj.add;
//     case 1:
//       return resultObj.delete && !resultObj.add;
//   }
// };

// Solution 2. Memory limit exceed

/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
// var isOneEditDistance = function(s, t) {
//   if (typeof s !== 'string' || typeof t !== 'string' || Math.abs(s.length - t.length) > 1) {
//     return false;
//   }

//   const m = s.length;
//   const n = t.length;
//   const dp = new Array(m + 1);
//   // init dp
//   for (let i = 0; i <= m; i++) {
//     dp[i] = new Array(n + 1);
//     dp[i].fill(Number.POSITIVE_INFINITY);
//     dp[i][0] = i;
//   }

//   for (let i = 0; i <= n; i++) {
//     dp[0][i] = i;
//   }

//   for (let i = 1; i <= m; i++) {
//     for (let j = 1; j <= n; j++) {
//       if (s[i - 1] === t[j - 1]) {
//         dp[i][j] = Math.min(dp[i - 1][j - 1], dp[i][j - 1] + 1, dp[i - 1][j] + 1);
//       } else {
//         dp[i][j] = Math.min(dp[i - 1][j - 1] + 1, dp[i][j - 1] + 1, dp[i - 1][j] + 1);
//       }
//     }
//   }

//   return dp[m][n] === 1;
// };

// Solution 3. Refer: https://discuss.leetcode.com/topic/30308/my-clear-java-solution-with-explanation/2
var isOneEditDistance = function(s, t) {
  if (typeof s !== 'string' || typeof t !== 'string' || Math.abs(s.length - t.length) > 1) {
    return false;
  }

  const m = s.length;
  const n = t.length;
  const length = Math.min(m, n);

  for (let i = 0; i < length; i++) {
    if (s[i] === t[i]) {
      continue;
    }

    if (m < n) {
      return s.substr(i) === t.substr(i + 1);
    } else if (m === n) {
      return s.substr(i + 1) === t.substr(i + 1);
    } else {
      return s.substr(i + 1) === t.substr(i);
    }
  }

  return Math.abs(m - n) === 1;
};

console.log(isOneEditDistance('ab', 'abb'));
