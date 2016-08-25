'use strict';

// refer: https://discuss.leetcode.com/topic/28308/java-ac-solution-using-bfs

/**
 * @param {string[]} words
 * @return {string}
 */
var alienOrder = function(words) {
  if (!Array.isArray(words) || words.length === 0) {
    return '';
  }

  //build graph with each node has in and out degree in map
  const map = new Map();
  for (let i = 0; i < words.length; i++) {
    for (let j = 0; j < words[i].length; j++) {
      if (!map.has(words[i][j])) {
        map.set(words[i][j], { indegree: [], outdegree: [] });
      }
    }
  }

  // record the length of alphabet
  const length = Array.from(map.keys()).length;

  for (let i = 0; i < words.length - 1; i++) {
    const word1 = words[i];
    const word2 = words[i + 1];
    for (let j = 0; j < Math.min(word1.length, word2.length); j++) {
      if (word1[j] !== word2[j]) {
        map.get(word1[j]).outdegree.push(word2[j])
        map.get(word2[j]).indegree.push(word1[j]);
        break;
      }
    }
  }

  //push node with out degree 0 into q
  const result = [];
  const queue = [];
  for (let entry of map.entries()) {
    if (entry[1].indegree.length === 0) {
      queue.push(entry[0]);
      result.push(entry[0]);
    }
  }

  //remove node with out degree 0 in node
  while (queue.length !== 0) {
    const cur = queue.shift();
    const outDegrees = map.get(cur).outdegree;
    for (let i = 0; i < outDegrees.length; i++) {
      const index = map.get(outDegrees[i]).indegree.indexOf(cur);
      map.get(outDegrees[i]).indegree.splice(index, 1);
      if (map.get(outDegrees[i]).indegree.length === 0) {
        queue.push(outDegrees[i]);
        result.push(outDegrees[i]);
      }
    }
  }

  if (result.length === length) {
    return result.join('');
  }

  return '';
};

// test
var words = [
  "wa",
  "rb",
  "wc"
]
console.log(alienOrder(words));
