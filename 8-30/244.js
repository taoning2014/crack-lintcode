'use strict';

/**
 * @constructor
 * @param {string[]} words
 */
// var WordDistance = function(words) {
//   this.map = new Map();
//   this.words = words;
// };

/**
 * @param {string} word1
 * @param {string} word2
 * @return {integer}
 */
// WordDistance.prototype.shortest = function(word1, word2) {
//   const key = word1 + ',' + word2;
//   if (this.map.has(key)) {
//     return this.map.get(key);
//   }

//   let position = Math.min(this.words.indexOf(word1), this.words.indexOf(word2));
//   let curMinDis = Number.POSITIVE_INFINITY;
//   let curWord = this.words[position];
//   let nextWord = (word1 === curWord ? word2 : word1);

//   for (let i = position + 1; i < this.words.length; i++) {
//     if (this.words[i] === nextWord) {
//       curMinDis = Math.min(i - position, curMinDis);
//       position = i;
//       nextWord = curWord;
//       curWord = this.words[i];
//     } else if (this.words[i] === curWord) {
//       position = i;
//     }
//   }

//   const key1 = word1 + ',' + word2;
//   const key2 = word2 + ',' + word1;
//   this.map.set(key1, curMinDis);
//   this.map.set(key2, curMinDis);
//   return curMinDis;
// };

// Solution 2. // 思维还是太局限，局限于已经用过的解法：（

// function getDistance(word1, word2, words) {
//   let position = Math.min(words.indexOf(word1), words.indexOf(word2));
//   let curMinDis = Number.POSITIVE_INFINITY;
//   let curWord = words[position];
//   let nextWord = (word1 === curWord ? word2 : word1);

//   for (let i = position + 1; i < words.length; i++) {
//     if (words[i] === nextWord) {
//       curMinDis = Math.min(i - position, curMinDis);
//       position = i;
//       nextWord = curWord;
//       curWord = words[i];
//     } else if (words[i] === curWord) {
//       position = i;
//     }
//   }

//   return curMinDis;
// }

// /**
//  * @constructor
//  * @param {string[]} words
//  */
// var WordDistance = function(words) {
//   this.map = new Map();
//   for (let i = 0; i < words.length; i++) {
//     for (let j = i + 1; j < words.length; j++) {
//       const key = words[i] + ',' + words[j];
//       if (!this.map.has(key)) {
//         const distance = getDistance(words[i], words[j], words);
//         const key1 = words[i] + ',' + words[j];
//         const key2 = words[j] + ',' + words[i];
//         this.map.set(key1, distance);
//         this.map.set(key2, distance);
//       }
//     }
//   }
// };

/**
 * @param {string} word1
 * @param {string} word2
 * @return {integer}
 */
// WordDistance.prototype.shortest = function(word1, word2) {
//   const key = word1 + ',' + word2;
//   return this.map.get(key);
// };


// Solution 3

/**
 * @constructor
 * @param {string[]} words
 */
var WordDistance = function(words) {
  this.map = new Map();

  // push location to map
  for (let i = 0; i < words.length; i++) {
    if (this.map.has(words[i])) {
      this.map.get(words[i]).push(i);
    } else {
      this.map.set(words[i], [i]);
    }
  }

  // sort
  for (let value of this.map.values()) {
    value.sort((p, q) => parseInt(p, 10) - parseInt(q, 10));
  }
};

/**
 * @param {string} word1
 * @param {string} word2
 * @return {integer}
 */
WordDistance.prototype.shortest = function(word1, word2) {
  let curMin = Number.POSITIVE_INFINITY;
  const list1 = this.map.get(word1);
  const list2 = this.map.get(word2);

  for (let i = 0, j = 0; i < list1.length && j < list2.length;) {
    curMin = Math.min(Math.abs(list1[i] - list2[j]), curMin);
    if (list1[i] < list2[j]) {
      i++;
    } else {
      j++;
    }
  }

  return curMin;

};

// Your WordDistance object will be instantiated and called as such:
// ["a","c","b","a"],distance("a,b"),distance("b,a")
var words = ["a","c","b","a"];
var wordDistance = new WordDistance(words);
console.log(wordDistance.shortest("a", "b"));
console.log(wordDistance.shortest("b", "a"));
