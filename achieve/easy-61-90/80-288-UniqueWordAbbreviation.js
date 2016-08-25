// An abbreviation of a word follows the form <first letter><number><last letter>.
// Below are some examples of word abbreviations:

// a) it                      --> it    (no abbreviation)

//      1
// b) d|o|g                   --> d1g

//               1    1  1
//      1---5----0----5--8
// c) i|nternationalizatio|n  --> i18n

//               1
//      1---5----0
// d) l|ocalizatio|n          --> l10n
// Assume you have a dictionary and given a word, find whether its abbreviation is unique
// in the dictionary. A word's abbreviation is unique if no other word from the dictionary
// has the same abbreviation.

// Example:
// Given dictionary = [ "deer", "door", "cake", "card" ]

// isUnique("dear") -> false
// isUnique("cart") -> true
// isUnique("cane") -> false
// isUnique("make") -> true

// Note:
// 1, 没有清楚理解题意，'unique in dict' means 是否能用 abbre 的形式查询到这个word
// 2, Edge cases
//  1) 如果长度小于3，不存在abbre，返回真
//  2) 如果没有这个word，也返回真
'use strict';
require('chai').should();

function abbre(word) {
  if (word.length < 3) {
    return;
  }

  return word.charAt(0) + (word.length - 2) + word.charAt(word.length - 1);
}

/**
 * @constructor
 * @param {string[]} dictionary
 */
var ValidWordAbbr = function(dictionary) {
  var curWord;
  var _this = this;
  this.dictionary = dictionary;
  this.map = {};

  dictionary.forEach(function(word) {
    curWord = abbre(word);
    if (!_this.map[curWord]) {
      _this.map[curWord] = 1;
    } else {
      _this.map[curWord] = 2;
    }
  });
};

/**
 * @param {string} word
 * @return {bool}
 */
ValidWordAbbr.prototype.isUnique = function(word) {
  if (!word || word.length < 3) {
    return true;
  }

  if (this.map[abbre(word)] === 2) {
    return false;
  } else if (!this.map[abbre(word)]) {
    return true;
  } else {
    return this.dictionary.indexOf(word) !== -1;
  }
};


/**
 * Your ValidWordAbbr object will be instantiated and called as such:
 * var vwa = new ValidWordAbbr(dictionary);
 * vwa.isUnique("word");
 * vwa.isUnique("anotherWord");
 */
describe('Test', function() {
  it('Should pass', function() {
    var vwa = new ValidWordAbbr(["deer", "door", "cake", "card"]);
    console.log(vwa.isUnique("dear"));
    console.log(vwa.isUnique("cart"));
    console.log(vwa.isUnique("cane"));
    console.log(vwa.isUnique("make"));
  });

  it('Should pass', function() {
    var vwa = new ValidWordAbbr(["hello"]);
    console.log(vwa.isUnique("hello"));
  });
});
