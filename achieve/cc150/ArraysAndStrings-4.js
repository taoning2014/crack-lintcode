'use strict';

// Solutioin 1
// BUG: p - q will return NaN. Should get char code before substract with each other
// function sort(str) {
//   return str
//     .split('')
//     .sort((p, q) => p.charCodeAt(0) - q.charCodeAt(0))
//     .join('');
// }

// var isAnagram = function(str1, str2) {
//   if (!str1 && !str2) {
//     return true;
//   }

//   if (!str1 || !str2) {
//     return false;
//   }

//   return sort(str1) === sort(str2);
// }


// Solutioin 2
var isAnagram = function(str1, str2) {
  if (!str1 && !str2) {
    return true;
  }

  if (!str1 || !str2) {
    return false;
  }

  let count = [];
  for (let i = 0; i < 26; i++) {
    count[i] = 0;
  }

  for (let i = 0; i < str1.length; i++) {
    count[str1[i].charCodeAt(0) - 'a'.charCodeAt(0)]++;
  }

  for (let i = 0; i < str2.length; i++) {
    count[str2[i].charCodeAt(0) - 'a'.charCodeAt(0)]--;
  }

  for (let i = 0; i < 26; i++) {
    if (count[i] !== 0) {
      return false;
    }
  }

  return true;

}

describe('Test', function() {
  it('Should pass', function() {
    console.log(isAnagram('abc', 'cba'));
  });
});
