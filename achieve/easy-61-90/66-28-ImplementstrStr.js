// Implement strStr().

// Returns the index of the first occurrence of needle in haystack, or -1 if needle is not part of haystack.
'use strict';
require('chai').should();


/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
var strStr = function(haystack, needle) {
  var i;
  var j;

  if (!needle) {
    return 0;
  }

  if (!haystack) {
    return -1;
  }

  for (i = 0; i < haystack.length - needle.length + 1; i++) {
    for (j = 0; j < needle.length; j++) {
      if (haystack[i + j] !== needle[j]) {
        break;
      }
    }
    if (j === needle.length) {
      return i;
    }
  }

  return -1;
};

describe('Test', function () {
  it('Should pass', function () {
    console.log(strStr('hello', 'lo'));
    console.log(strStr('hello', 'la'));
  })
})
