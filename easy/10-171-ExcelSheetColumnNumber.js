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


// @param {string} s
// @return {number}
'use strict';
require('chai').should();

var titleToNumber = function(s) {
  var resNumber = 0;
  var titleArray;
  var aToZArray = ['0', 'A', 'B', 'C', 'D', 'E', 'F',
    'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P',
    'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'
  ];

  if (!s) {
    return -1;
  }

  titleArray = s.toUpperCase().split('');
  for (var i = 0; i < titleArray.length; i++) {
    resNumber = resNumber * 26 + aToZArray.indexOf(titleArray[i]);
  }

  return resNumber;
};

describe('Test', function() {
  it('null, should pass', function() {
    titleToNumber('').should.equal(-1);
  });

  it('1 digit, should pass', function() {
    titleToNumber('B').should.equal(2);
  });

  it('2 digit, should pass', function() {
    titleToNumber('AB').should.equal(28);
  });

});
