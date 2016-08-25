'use strict';

var reverse = function(str) {
  if (!str || str.length < 2) {
    return str;
  }

  let charArray = str.split('');

  for (let i = 0; i < Math.floor((str.length - 1) / 2); i++) {
    let tempChar = charArray[i];
    charArray[i] = charArray[str.length - 2 - i];
    charArray[str.length - 2 - i] = tempChar;
  }

  return charArray.join('');
}

describe('Test', function() {
  it('Should pass', function() {
    console.log(reverse('abcd0'));
    console.log(reverse('abcde0'));
  });
});
