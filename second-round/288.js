'use strict';

// ========================================================================
// Time:   10min
// Submit: 3
//  1, create a map, if current key not in map, return true;
//    if current key in map, see whether the value of the key is the value
//  2, dictionary may have duplicate element
// ========================================================================

function getKey(word) {
  if (word.length < 3) {
    return word;
  }
  const midLength = word.length - 2;
  return word[0] + midLength + word[word.length - 1];
}

/**
 * @constructor
 * @param {string[]} dictionary
 */
var ValidWordAbbr = function(dictionary) {
  this.map = new Map();
  for (let i = 0; i < dictionary.length; i++) {
    const key = getKey(dictionary[i]);
    if (!this.map.has(key)) {
      this.map.set(key, dictionary[i]);
    } else if (this.map.get(key) !== dictionary[i]) {
      // input could be ['a', 'a'], so need test in this if
      // key === 2 means there are same abb for different words
      this.map.set(key, 2);
    }
  }
};

/**
 * @param {string} word
 * @return {bool}
 */
ValidWordAbbr.prototype.isUnique = function(word) {
  const key = getKey(word);

  if (!this.map.has(key)) {
    return true;
  } else {
    return this.map.get(key) === word;
  }
};


/**
 * Your ValidWordAbbr object will be instantiated and called as such:
 * var vwa = new ValidWordAbbr(dictionary);
 * vwa.isUnique("word");
 * vwa.isUnique("anotherWord");
 */
