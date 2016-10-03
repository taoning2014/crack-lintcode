'use strict';

// BUG:
//  1, Can't pass ['a'], 1
//  2, Can't pass ["What","must","be","shall","be."]

function fixLastLine(result, maxWidth) {
  const last = result.length - 1;
  result[last] = result[last].split(' ').join(' ');
  let count = maxWidth - result[last].length;
  while (count !== 0) {
    result[last] = result[last] + " ";
    count++;
  }
}

function canFitIn(cur, word, maxWidth) {
  return cur.count + word.length <= maxWidth;
}

function addSpace(list, maxWidth) {
  const result = [];
  for (let i = 0; i < list.length; i++) {
    let count = maxWidth - list[i].count;
    let index = 0;
    while (count !== 0) {
      list[i].curList[index] = list[i].curList[index] + " ";
      index++;
      count--;
      if (index >= list[i].curList.length - 1) {
        index = 0;
      }
    }
    result.push(list[i].curList.join(''));
  }

  return result;
}

/**
 * @param {string[]} words
 * @param {number} maxWidth
 * @return {string[]}
 */
var fullJustify = function(words, maxWidth) {
  if (!Array.isArray(words) || words.length === 0 || !Number.isInteger(maxWidth) || maxWidth <= 0) {
    return [''];
  }

  // push words into array
  let list = [];
  let cur = { curList: [], count: 0 };
  for (let i = 0; i < words.length; i++) {
    if (!canFitIn(cur, words[i], maxWidth)) {
      // remove last space
      const last = cur.curList.length - 1;
      cur.curList[last] = cur.curList[last].trim();
      cur.count--;

      list.push(cur);
      cur = { curList: [], count: 0 };
    }

    cur.curList.push(words[i] + ' ');
    cur.count = cur.count + words[i].length + 1;
  }

  // last line has special case
  //  "For the last line of text, it should be left justified and no extra space is inserted between words."
  cur.curList = [cur.curList.join('')];
  cur.curList[0] = cur.curList[0].trim();
  cur.count--;
  list.push(cur);

  // add space between words
  return addSpace(list, maxWidth);
};

console.log(fullJustify(['a'], 1));
console.log(fullJustify(["This", "is", "an", "justification", "example", "of", "text", "justification."], 16));
console.log(fullJustify(['aa', 'bb'], 3));
console.log(fullJustify(["What","must","be","shall","be."], 12));
