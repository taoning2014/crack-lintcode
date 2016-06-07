// Compare two version numbers version1 and version2.
// If version1 > version2 return 1, if version1 < version2 return -1, otherwise return 0.

// You may assume that the version strings are non-empty and contain only digits and the . character.
// The . character does not represent a decimal point and is used to separate number sequences.
// For instance, 2.5 is not "two and a half" or "half way to version three", it is the fifth
// second-level revision of the second first-level revision.

// Here is an example of version numbers ordering:

// 0.1 < 1.1 < 1.2 < 13.37
'use strict';
require('chai').should();

/**
 * @param {string} version1
 * @param {string} version2
 * @return {number}
 */
var compareVersion = function(version1, version2) {
  var version1Array;
  var version2Array;
  var length;
  var i;

  if (!version1 || !version2) {
    return NaN;
  }

  version1Array = version1.split('.');
  version2Array = version2.split('.');

  length = Math.max(version1Array.length, version2Array.length);

  while (version1Array.length < length) {
    version1Array.push(0);
  }

  while (version2Array.length < length) {
    version2Array.push(0);
  }

  for (i = 0; i < length; i++) {
    if (parseInt(version1Array[i], 10) > parseInt(version2Array[i], 10)) {
      return 1;
    } else if (parseInt(version1Array[i], 10) < parseInt(version2Array[i], 10)) {
      return -1;
    }
  }

  return 0;
};

describe('Test', function() {
  it('Should pass', function() {
    console.log(compareVersion('0.1', '1.1'));
    console.log(compareVersion('1.0', '1'));
    console.log(compareVersion('1.0.1', '1.1'));
    console.log(compareVersion('1.2', '1.11'));
    console.log(compareVersion('1.1.1', '1.1'));
    console.log(compareVersion('1.1', '1.1.1'));
  })
})
