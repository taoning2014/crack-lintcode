'use strict';

function charToInt (char) {
  return char.charCodeAt(0) - 'a'.charCodeAt(0);
}

var removeDuplicate = function(str) {
  if (!str || str.length < 2) {
    return str;
  }

  let hit = [];
  for (let i = 0; i < 26; i++) {
    hit[i] = false;
  }

  let tail = 1;
  let charArray = str.split('');
  hit[charToInt(str[0])] = true;
  for (let i = 1; i < str.length; i++) {
    if (!hit[charToInt(str[i])]) {
      hit[charToInt(str[i])] = true;
      charArray[tail] = str[i];
      tail++;
    }
  }

  return charArray.slice(0, tail).join('');
}

describe('Test', function() {
  it('Should pass', function() {
    console.log(removeDuplicate('abcd'));
    console.log(removeDuplicate('aaabbb'));
    console.log(removeDuplicate('aaaaa'));
    console.log(removeDuplicate(''));
  });
});
