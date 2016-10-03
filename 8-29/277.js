'use strict';

// Solution 1.

/**
 * Definition for knows()
 *
 * @param {integer} person a
 * @param {integer} person b
 * @return {boolean} whether a knows b
 * knows = function(a, b) {
 *     ...
 * };
 */
// 0 knows 1; 1 does not know 0.
/**
 * @param {function} knows()
 * @return {function}
 */
// var solution = function(knows) {
//   /**
//    * @param {integer} n Total people
//    * @return {integer} The celebrity
//    */
//   return function(n) {
//     if (!Number.isInteger(n) || n < 2) {
//       return -1;
//     }

//     // first find person don't know any one
//     const knowNoOne = [];
//     let i;
//     let j;
//     for (i = 0; i < n; i++) {
//       for (j = 0; j < n; j++) {
//         if (i === j) {
//           continue;
//         }

//         if (knows(i, j)) {
//           break;
//         }
//       }

//       if (j === n) {
//         knowNoOne.push(i);
//       }
//     }

//     // in knowNoOne, find everyone know him / her
//     for (i = 0; i < knowNoOne.length; i++) {
//       for (j = 0; j < n; j++) {
//         if (knowNoOne[i] === j) {
//           continue;
//         }

//         if (!knows(j, knowNoOne[i])) {
//           break;
//         }
//       }

//       if (j === n) {
//         return knowNoOne[i];
//       }
//     }

//     return -1;
//   };
// };

// Solution 2. refer: https://discuss.leetcode.com/topic/23534/java-solution-two-pass
// The difference between solution 1 and solution 2 is the different between FLAG and other companies you can goto
// Tao, work hard~ :)

/**
 * Definition for knows()
 *
 * @param {integer} person a
 * @param {integer} person b
 * @return {boolean} whether a knows b
 * knows = function(a, b) {
 *     ...
 * };
 */

/**
 * @param {function} knows()
 * @return {function}
 */
var solution = function(knows) {
  /**
   * @param {integer} n Total people
   * @return {integer} The celebrity
   */
  return function(n) {
    if (!Number.isInteger(n) || n < 2) {
      return -1;
    }

    let candidate = 0;
    let i;
    for (i = 1; i < n; i++) {
      if (!knows(i, candidate)) {
        candidate = i;
      }
    }

    for (i = 0; i < n; i++) {
      if (i === candidate) {
        continue;
      }

      if (!knows(i, candidate) || knows(candidate, i)) {
        return -1;
      }
    }

    return candidate;
  };
};
