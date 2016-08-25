'use strict';

// ========================================================================
// Time:   5min
// Submit: 1
// ========================================================================

function isAllZeros(array) {
  for (let i = 0; i < array.length; i++) {
    if (parseInt(array[i], 10) !== 0) {
      return false;
    }
  }

  return true;
}

/**
 * @param {string} version1
 * @param {string} version2
 * @return {number}
 */
var compareVersion = function(version1, version2) {
  if (!version1 || !version2 || typeof version1 !== 'string' || typeof version2 !== 'string') {
    return 0;
  }

  const array1 = version1.split('.');
  const array2 = version2.split('.');
  let i;

  for (i = 0; i < array1.length && i < array2.length; i++) {
    if (parseInt(array1[i], 10) < parseInt(array2[i], 10)) {
      return -1;
    } else if (parseInt(array1[i], 10) > parseInt(array2[i], 10)) {
      return 1;
    }
  }

  if (!isAllZeros(array1.slice(i))) {
    return 1;
  } else if (!isAllZeros(array2.slice(i))) {
    return -1;
  }

  return 0;
 };

 console.log(compareVersion('10.6.0', '10.6.0.0.9'));
