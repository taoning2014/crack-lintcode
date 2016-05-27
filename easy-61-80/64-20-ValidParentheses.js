// Given a string containing just the characters '(', ')', '{', '}',
// '[' and ']', determine if the input string is valid.

// The brackets must close in the correct order, "()" and "()[]{}" are
// all valid but "(]" and "([)]" are not.
'use strict';
require('chai').should();

/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
  var stack = [];
  var map = {
    ')': '(',
    ']': '[',
    '}': '{'
  };
  var chars;
  var curChar;
  var i;

  if (!s) {
    return true;
  }

  chars = s.split('');
  for (i = 0; i < chars.length; i++) {
    if (chars[i] === '(' || chars[i] === '[' || chars[i] === '{') {
      stack.push(chars[i]);
    } else {
      curChar = stack.pop();
      if (curChar !== map[chars[i]]) {
        return false;
      }
    }
  }

  return stack.length === 0;
};

describe('Test', function() {
  it('Should pass', function() {
    console.log(isValid('[]({)}'));
  });
});
