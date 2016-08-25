'use strict';

// ========================================================================
// Time:   10min
// Submit: 1
// ========================================================================

/**
 * Definition for read4()
 *
 * @param {character[]} buf Destination buffer
 * @return {number} The number of characters read
 * read4 = function(buf) {
 *     ...
 * };
 */

/**
 * @param {function} read4()
 * @return {function}
 */
var solution = function(read4) {
    /**
     * @param {character[]} buf Destination buffer
     * @param {number} n Maximum number of characters to read
     * @return {number} The number of characters read
     */
    return function(buf, n) {
      const chars = [];
      let curRead = 0;
      while (true) {
        const cur = read4(chars);
        for (let i = 0; i < cur && curRead < n; i++, curRead++) {
          buf.push(chars[i]);
        }

        if (cur < 4 || curRead === n) {
          return curRead;
        }
      }
    };
};
