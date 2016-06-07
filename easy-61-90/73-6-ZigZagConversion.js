/**
The string "PAYPALISHIRING" is written in a zigzag pattern on a given number of rows like this: (you may want to display this pattern in a fixed font for better legibility)

P   A   H   N
A P L S I I G
Y   I   R
And then read line by line: "PAHNAPLSIIGYIR"
Write the code that will take a string and make this conversion given a number of rows:

string convert(string text, int nRows);
convert("PAYPALISHIRING", 3) should return "PAHNAPLSIIGYIR".
*/

// What does zigzag means?
//  1) https://leetcode.com/discuss/14105/what-does-zigzag-means
//  2) https://leetcode.com/discuss/1212/expected-output-of-abcde-4
'use strict';
require('chai').should();

/**
 * @param {string} s
 * @param {number} numRows
 * @return {string}
 */
var convert = function(s, numRows) {
  var rowsArray = [];
  var step = 1;
  var result = '';
  var curRow = 1;
  var i;

  if (!numRows) {
    return result;
  }

  if (numRows === 1) {
    return s;
  }

  for (i = 0; i < numRows; i++) {
    rowsArray[i] = [];
  }

  rowsArray[0].push(s.charAt(0));
  for (i = 1; i < s.length; i++) {
    rowsArray[curRow].push(s.charAt(i));
    if (curRow === rowsArray.length - 1 || curRow === 0) {
      step *= -1;
    }
    curRow += step;
  }

  for (i = 0; i < numRows; i++) {
    result += rowsArray[i].join('');
  }

  return result;
};

describe('Test', function() {
  it('Should pass', function() {
    console.log(convert('PAYPALISHIRING', 3));
    console.log(convert('AB', 1));
  });
});
