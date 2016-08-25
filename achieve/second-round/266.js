'use strict';

// Given a string, determine if a permutation of the string could form a palindrome.

// For example,
// "code" -> False, "aab" -> True, "carerac" -> True.

/**
 * @param {string} s
 * @return {boolean}
 */
// var canPermutePalindrome = function(s) {
//   if (typeof s !== 'string' || s.length < 2) {
//     return true;
//   }

//   const chars = s.split('');
//   let count = 0;
//   chars.sort();

//   let i;
//   for (i = 0; i < chars.length - 1;) {
//     if (chars[i] === chars[i + 1]) {
//       i += 2;
//       continue;
//     }

//     count++;
//     i++;
//   }

//   // process last element
//   if (chars[i - 2] !== chars[i - 1]) {
//     count++;
//   }

//   return (count === 0 || (count === 1 && s.length % 2 === 1));
// };

/**
 * @param {string} s
 * @return {boolean}
 */
var canPermutePalindrome = function(s) {
  if (typeof s !== 'string' || s.length < 2) {
    return true;
  }

  // loop through s collect nums of chars
  const map = new Map();
  for (let i = 0; i < s.length; i++) {
    if (map.has(s[i])) {
      map.set(s[i], map.get(s[i]) + 1);
    } else {
      map.set(s[i], 1);
    }
  }

  // loop through map
  let findSingleChar = false;
  for (let entry of map.entries()) {
    while (entry[1] > 1) {
      entry[1] -= 2;
    }

    if (entry[1] === 1) {
      if (findSingleChar) {
        return false;
      } else {
        findSingleChar = true;
      }
    }
  }

  return true;
};

console.log(canPermutePalindrome('a'));
console.log(canPermutePalindrome('baa'));
console.log(canPermutePalindrome('baaa'));
