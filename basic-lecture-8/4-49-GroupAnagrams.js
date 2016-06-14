// Given an array of strings, group anagrams together.

// For example, given: ["eat", "tea", "tan", "ate", "nat", "bat"],
// Return:

// [
//   ["ate", "eat","tea"],
//   ["nat","tan"],
//   ["bat"]
// ]
// Note: All inputs will be in lower-case.
'use strict';
require('chai').should();

function createKey(str) {
  return str.split('')
    .sort((p, q) => p.charCodeAt(0) - q.charCodeAt(0))
    .join('');
}

/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function(strs) {
  let map = new Map();
  let result = [];

  if (!strs || !strs.length) {
    return result;
  }

  for (let i = 0; i < strs.length; i++) {
    let key = createKey(strs[i]);
    if (map.has(key)) {
      // BUG: Only modify value, don't need to set key
      // map.set(key, map.get(key).push(strs[i]));
      map.get(key).push(strs[i]);
    } else {
      map.set(key, [strs[i]]);
    }
  }

  for (let value of map.values()) {
    result.push(value);
  }

  return result;
};

describe('Test', function() {
  it('Should pass', function() {
    console.log(groupAnagrams(["eat", "tea", "tan", "ate", "nat", "bat"]));
  });
});
