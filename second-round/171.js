'use strict';

// ========================================================================
// Time:   5min
// Submit: 1
// ========================================================================

// Related to question 'Excel Sheet Column Title'

// Given a column title as appear in an Excel sheet, return its corresponding column number.

// For example:

//     A -> 1
//     B -> 2
//     C -> 3
//     ...
//     Z -> 26
//     AA -> 27
//     AB -> 28


/**
 * @param {string} s
 * @return {number}
 */
var titleToNumber = function(s) {
  if (!s) {
    return 0;
  }

  const array = ['0', 'A', 'B', 'C', 'D', 'E', 'F',
    'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P',
    'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'
  ];
  let result = 0;

  for (let i = 0; i < s.length; i++) {
    result = result * 26 + array.indexOf(s[i]);
  }

  return result;
};

console.log(titleToNumber('Z'));
console.log(titleToNumber('AA'));
console.log(titleToNumber('AZ'));
