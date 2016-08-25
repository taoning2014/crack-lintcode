'use strict';

// ========================================================================
// Time:   15min
// Submit: 2 // can't use arrays.fill([]), the elements will all refer to
//  same array
// ========================================================================

/**
 * @param {string} s
 * @param {number} numRows
 * @return {string}
 */
var convert = function(s, numRows) {
  if (!s || typeof s !== 'string' || !Number.isInteger(numRows) || numRows < 2) {
    return s;
  }

  const arrays = [];
  for (let i = 0; i < numRows; i++) {
    arrays[i] = [];
  }

  let curRow = 1;
  let inc = 1;
  arrays[0].push(s[0]);

  for (let i = 1; i < s.length; i++) {
    arrays[curRow].push(s[i]);
    if (curRow === 0 || curRow === numRows - 1) {
      inc *= -1;
    }
    curRow += inc;
  }

  return arrays
    .map(array => array.join(''))
    .join('');
};

console.log(convert('PAYPALISHIRING', 3));
