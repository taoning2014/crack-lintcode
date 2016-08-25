'use strict';

/**
 * @param {string} str
 * @returns {string}
 */
var reverseWords = function(str) {
  if (typeof str !== 'string') {
    return '';
  }

  str = str.trim();
  const tokens = str.split(' ');
  const result = [];

  for (let i = tokens.length - 1; i >= 0; i--) {
    tokens[i] = tokens[i].trim();
    if (tokens[i] !== '') {
      result.push(tokens[i]);
    }
  }

  return result.join(' ');
};

console.log(reverseWords(' the    sky        is blue  '));
