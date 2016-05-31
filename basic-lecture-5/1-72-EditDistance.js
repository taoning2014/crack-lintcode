// Given two words word1 and word2, find the minimum number of steps required
// to convert word1 to word2. (each operation is counted as 1 step.)

// You have the following 3 operations permitted on a word:

// a) Insert a character
// b) Delete a character
// c) Replace a character
'use strict';
require('chai').should();

/**
 * @param {string} word1
 * @param {string} word2
 * @return {number}
 */
var minDistance = function(word1, word2) {
  var distance;
  var n;
  var m;
  var i;
  var j;

  n = word1.length;
  m = word2.length;

  // create 2d array, distance[i][j] means distance
  // of first i length of word1 to first j length of word2
  distance = new Array(n + 1);
  for (i = 0; i < n + 1; i++) {
    distance[i] = new Array(m + 1);
  }

  // init
  for (i = 0; i < n + 1; i++) {
    distance[i][0] = i;
  }
  for (j = 0; j < m + 1; j++) {
    distance[0][j] = j;
  }

  // distance[i-1][j] distance[i][j]
  for (i = 1; i < n + 1; i++) {
    for (j = 1; j < m + 1; j++) {
      if (word1.charAt(i - 1) === word2.charAt(j - 1)) {
        distance[i][j] = Math.min(distance[i - 1][j - 1], distance[i - 1][j] + 1, distance[i][j - 1] + 1);
      } else {
        distance[i][j] = Math.min(distance[i - 1][j - 1] + 1, distance[i - 1][j] + 1, distance[i][j - 1] + 1);
      }
    }
  }

  // answer distance[n][m]
  return distance[n][m];
};


describe('Test', function() {
  it('Should pass', function() {
    console.log(minDistance('', 'ab'));
    console.log(minDistance('ab', 'ab'));
    console.log(minDistance('ab', 'cd'));
  })
})
