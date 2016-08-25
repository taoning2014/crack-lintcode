// Write a function to generate the generalized abbreviations of a word.

// Example:
// Given word = "word", return the following list (order does not matter):
// ["word", "1ord", "w1rd", "wo1d", "wor1", "2rd", "w2d", "wo2", "1o1d", "1or1", "w1r1", "1o2", "2r1", "3d", "w3", "4"]
'use strict';
require('chai').should();

// Solution 1: Memory Limit Exceeded. "this error is thrown when there is insufficient space to allocate an object in the Java heap. In this case, The garbage collector cannot make space available to accommodate a new object, and the heap cannot be expanded further."
// Refer: https://docs.oracle.com/javase/8/docs/technotes/guides/troubleshoot/memleaks002.html
// var result;

// function processResult() {
//   var answer = [];
//   var buildStr;
//   var count;
//   var i;
//   var j;

//   for (i = 0; i < result.length; i++) {
//     buildStr = '';
//     count = 0;

//     for (j = 0; j < result[i].length; j++) {
//       if (result[i][j] === 1) {
//         count++;
//         continue;
//       }

//       if (count) {
//         buildStr += count;
//         count = 0;
//       }

//       buildStr += result[i][j];
//     }

//     if (count) {
//       buildStr += count;
//     }

//     answer.push(buildStr + '');
//   }

//   result = answer;
// }

// function _generateAbbreviations(wordArray, beginIndex) {
//   var copyArray;
//   var i;

//   result.push(wordArray);

//   if (beginIndex === wordArray.length) {
//     return;
//   }

//   for (i = beginIndex; i < wordArray.length; i++) {
//     copyArray = wordArray.slice();
//     copyArray[i] = 1;
//     _generateAbbreviations(copyArray, i + 1);
//   }
// }
/**
 * @param {string} word
 * @return {string[]}
 */
// var generateAbbreviations = function(word) {
//   var wordArray;
//   result = [];

//   if (!word) {
//     return [''];
//   }

//   wordArray = word.split('');

//   _generateAbbreviations(wordArray, 0);

//   processResult();

//   return result;
// };



// Solution 2
var result;

function processResult() {
  var answer = [];
  var buildStr;
  var count;
  var i;
  var j;

  for (i = 0; i < result.length; i++) {
    buildStr = '';
    count = 0;

    for (j = 0; j < result[i].length; j++) {
      if (result[i].charAt(j) === '1') {
        count++;
        continue;
      }

      if (count) {
        buildStr += count;
        count = 0;
      }

      buildStr += result[i].charAt(j);
    }

    if (count) {
      buildStr += count;
    }

    answer.push(buildStr + '');
  }

  result = answer;
}

function _generateAbbreviations(word, beginIndex) {
  var copyStr;
  var i;

  result.push(word);

  if (beginIndex === word.length) {
    return;
  }

  for (i = beginIndex; i < word.length; i++) {
    copyStr = '';
    if (i > 0) {
      copyStr += word.substr(0, i);
    }

    copyStr += '1';

    if (i < word.length - 1) {
      copyStr += word.substr(i + 1);
    }

    _generateAbbreviations(copyStr, i + 1);
  }
}
/**
 * @param {string} word
 * @return {string[]}
 */
var generateAbbreviations = function(word) {
  var wordArray;
  result = [];

  if (!word) {
    return [''];
  }

  _generateAbbreviations(word, 0);

  processResult();

  return result;
};


describe('Test', function () {
  it('Should pass', function () {
    console.log(generateAbbreviations('word'));
  });
});
