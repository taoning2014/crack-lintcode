'use strict';

// ========================================================================
// Time:   8min
// Submit: 2 line 16 forgot to write 'function' key word
// ========================================================================

function Word(word) {
  const charCodeOfA = 'a'.charCodeAt(0);
  this.array = [];
  for (let i = 0; i < word.length; i++) {
    this.array[word.charCodeAt(i) - charCodeOfA] = true;
  }
}

Word.prototype.hasCommon = function (word) {
  for (let i = 0; i < this.array.length; i++) {
    if (this.array[i] === true && word.array[i] === true) {
      return true;
    }
  }

  return false;
}

/**
 * @param {string[]} words
 * @return {number}
 */
var maxProduct = function(words) {
  if (!Array.isArray(words) || words.length === 0) {
    return 0;
  }

  const Words = [];
  for (let i = 0; i < words.length; i++) {
    Words[i] = new Word(words[i]);
  }

  let result = 0;
  for (let i = 0; i < words.length - 1; i++) {
    for (let j = i + 1; j < words.length; j++) {
      if (!Words[i].hasCommon(Words[j])) {
        result = Math.max(words[i].length * words[j].length, result);
      }
    }
  }

  return result;
};

console.log(maxProduct(["a", "ab", "abc", "d", "cd", "bcd", "abcd"]));
