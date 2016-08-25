// Implement an algorithm to determine if a string has all unique characters What if
// you can not use additional data structures?
'use strict';

var isUnique = function(str) {
  if (!str || str.length === 0) {
    return true;
  }

  str = str.toLowerCase();

  let check = 0;
  for (let i = 0; i < str.length; i++) {
    // BUG: 太多括号了，容易先让1 << ... 部分和后面 0比较。
    // 最好把 "str[i].charCodeAt(0) - 'a'.charCodeAt(0)"写到上面一行
    if ((check & (1 << (str[i].charCodeAt(0) - 'a'.charCodeAt(0)))) > 0) {
      return false;
    } else {
      check |= 1 << (str[i].charCodeAt(0) - 'a'.charCodeAt(0))
    }
  }
  return true;
}

describe('Test', function() {
  it('Should pass', function() {
    console.log(isUnique('aBcA'));
  });
});
