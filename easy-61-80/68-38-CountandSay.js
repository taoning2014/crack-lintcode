// The count-and-say sequence is the sequence of integers beginning as follows:
// 1, 11, 21, 1211, 111221, ...

// 1 is read off as "one 1" or 11.
// 11 is read off as "two 1s" or 21.
// 21 is read off as "one 2, then one 1" or 1211.
// Given an integer n, generate the nth sequence.

// Note: The sequence of integers will be represented as a string.
'use strict';
require('chai').should();

function _countAndSay(str) {
  var chars = str.split('');
  var curCount = 1;
  var resultStr = '';
  var i;

  for (i = 0; i < chars.length - 1; i++) {
    if (chars[i] === chars[i + 1]) {
      curCount++;
    } else {
      resultStr = resultStr + curCount + chars[i];
      curCount = 1;
    }
  }

  if (curCount) {
    resultStr = resultStr + curCount + chars[i];
  }

  return resultStr;
}

/**
 * @param {number} n
 * @return {string}
 */
var countAndSay = function(n) {
  var i;
  var curStr;

  if (!n || !Number.isInteger(n) || n < 1) {
    return '';
  }

  curStr = '1';
  for (i = 1; i < n; i++) {
    curStr = _countAndSay(curStr);
  }

  return curStr;
};

describe('Test', function() {
  it('Should pass', function() {
    // console.log(countAndSay(''));
    // console.log(countAndSay(-1));
    // console.log(countAndSay(0));
    // console.log(countAndSay(1));
    console.log(countAndSay(2));
    console.log(countAndSay(3));
    console.log(countAndSay(4));
  });
});
