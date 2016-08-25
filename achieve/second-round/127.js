'use strict';

// Bug: when to increase distance, NOT when every dequeue

function checkInput(beginWord, endWord, wordList) {
  return (typeof beginWord === 'string') && (typeof endWord === 'string');
}

function getNeighbors(word, wordList) {
  const charStart = 'az'.charCodeAt(0);
  const charEnd = 'az'.charCodeAt(1);
  const neighbors = [];

  for (let i = charStart; i < charEnd + 1; i++) {
    for (let j = 0; j < word.length; j++) {
      const newWord = word.substring(0, j) + String.fromCharCode(i) + word.substring(j + 1);

      if (newWord === word) {
        continue;
      }

      if (wordList.has(newWord)) {
        neighbors.push(newWord);
      }
    }
  }

  return neighbors;
}

/**
 * @param {string} beginWord
 * @param {string} endWord
 * @param {Set} wordList
 *   Note: wordList is a Set object, see:
 *   https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Set
 * @return {number}
 */
var ladderLength = function(beginWord, endWord, wordList) {
  if (!checkInput(beginWord, endWord)) {
    return 0;
  }

  if (beginWord === endWord) {
    return 1;
  }

  const queue = [];
  const visited = new Set();
  let distance = 1;

  wordList.add(beginWord).add(endWord);
  queue.push(beginWord);
  visited.add(beginWord);

  while (queue.length !== 0) {
    const length = queue.length;
    distance++;

    for (let i = 0; i < length; i++) {
      const word = queue.shift();
      const neighbors = getNeighbors(word, wordList);
      for (let i = 0; i < neighbors.length; i++) {
        if (!visited.has(neighbors[i])) {
          if (neighbors[i] === endWord) {
            return distance;
          }

          queue.push(neighbors[i]);
          visited.add(neighbors[i]);
        }
      }
    }
  }

  return -1;
};

// beginWord = "hit"
// endWord = "cog"
// wordList = ["hot","dot","dog","lot","log"]
// var set = new Set(["hot", "dot", "dog", "lot", "log"]);
var set = new Set(["a", "b", "c"]);
console.log(set);
console.log(ladderLength('a', 'c', set));
