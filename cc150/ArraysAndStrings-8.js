'use strict';

var isRotate = function(str1, str2) {
  if (!str1 && !str2) {
    return true;
  }

  if (!str1 || !str2 || str1.length !== str2.length) {
    return false;
  }

  str1 = str1 + str1;
  for (let i = 0; i < str1.length - str2.length + 1; i++) {
    let j;
    for (j = i; j < i + str2.length; j++) {
      if (str1[i + j] !== str2[j]) {
        break;
      }
    }
    if (j === str2.length) {
      return true;
    }
  }

  return false;
}

describe('Test', function() {
  it('Should pass', function() {
    console.log(isRotate('bottlewater', 'erbottlewat'));
    console.log(isRotate('bottlewater', 'erbottlewet'));
  });
});
