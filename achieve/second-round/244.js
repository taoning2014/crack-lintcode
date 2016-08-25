'use strict';

/**
 * @constructor
 * @param {string[]} words
 */
var WordDistance = function(words) {
  if (!Array.isArray(words) || words.length < 2) {
    return;
  }

  // pre process
  this.map = new Map();
  for (let i = 0; i < words.length; i++) {
    if (this.map.has(words[i])) {
      this.map.get(words[i]).push(i);
    } else {
      this.map.set(words[i], [i]);
    }
  }

  // sort arrays in the map
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
  const list1 = this.map.get(word1);
  const list2 = this.map.get(word2);
  let curDistance = Number.POSITIVE_INFINITY;

  for (let i = 0, j = 0; i < list1.length && j < list2.length;) {
    if (list1[i] < list2[j]) {
      curDistance = Math.min(list2[j] - list1[i], curDistance);
      i++;
    } else {
      // according to the problem discription, don't have list1[i] === list2[j]
      curDistance = Math.min(list1[i] - list2[j], curDistance);
      j++;
    }
  }

  return curDistance;
};

// Your WordDistance object will be instantiated and called as such:
var wordDistance = new WordDistance(["practice", "makes", "perfect", "coding", "makes"]);
var ans1 = wordDistance.shortest("practice", "coding");
var ans2 = wordDistance.shortest("makes", "coding");
console.log(ans1);
console.log(ans2);

