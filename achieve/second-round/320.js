'use strict';

// ========================================================================
// Time:   15min
// Submit: 1
// ========================================================================

function convert(array) {
  const result = [];
  for (let i = 0; i < array.length; i++) {
    let count = 0;
    let cur = '';
    for (let j = 0; j < array[i].length; j++) {
      if (array[i][j] === '1') {
        count++;
        continue;
      }

      if (count !== 0) {
        cur += count;
        count = 0;
      }

      cur += array[i][j];
    }

    if (count !== 0) {
      cur += count;
    }

    result.push(cur);
  }

  return result;
}

function helper(cur, array, start) {
  for (let i = start; i < cur.length; i++) {
    let copy = cur.slice();
    copy = copy.substring(0, i) + '1' + copy.substring(i + 1);
    array.push(copy);
    helper(copy, array, i + 1);
  }
}

/**
 * @param {string} word
 * @return {string[]}
 */
var generateAbbreviations = function(word) {
  if (!word || typeof word !== 'string') {
    return [];
  }

  const array = [word];
  helper(word, array, 0);

  return convert(array);
};


console.log(generateAbbreviations('word'));
