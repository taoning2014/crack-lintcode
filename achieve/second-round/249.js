'use strict';

// ========================================================================
// Time:   16min
// Submit: 2. Thought not very clear in getKey.
//  1, shouldn't return charCode, since 25 will be 2 and 5 or 25
//  2, line 34 is not less than 0 but less than first char
// ========================================================================

// Given a string, we can "shift" each of its letter to its successive letter,
// for example: "abc" -> "bcd". We can keep "shifting" which forms the sequence:

// "abc" -> "bcd" -> ... -> "xyz"
// Given a list of strings which contains only lowercase alphabets,
// group all strings that belong to the same shifting sequence.

// For example, given: ["abc", "bcd", "acef", "xyz", "az", "ba", "a", "z"],
// Return:

// [
//   ["abc","bcd","xyz"],
//   ["az","ba"],
//   ["acef"],
//   ["a","z"]
// ]

function getKey(str) {
  const charCodeA = 'a'.charCodeAt(0);
  const offset = str.charCodeAt(0) - charCodeA;
  let key = '';

  for (let i = 0; i < str.length; i++) {
    let cur = str.charCodeAt(i) - offset;
    if (cur < charCodeA) {
      cur += 26;
    }
    key += String.fromCharCode(cur + charCodeA);
  }

  return key;
}

/**
 * @param {string[]} strings
 * @return {string[][]}
 */
var groupStrings = function(strings) {
  if (!Array.isArray(strings)) {
    return [];
  }

  const map = new Map();
  for (let i = 0; i < strings.length; i++) {
    const key = getKey(strings[i]);
    if (!map.has(key)) {
      map.set(key, [strings[i]]);
    } else {
      map.get(key).push(strings[i]);
    }
  }

  return Array.from(map.values());
};

console.log(groupStrings(["abc", "bcd", "acef", "xyz", "az", "ba", "a", "z"]));
