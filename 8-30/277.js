'use strict';

/**
 * Definition for knows()
 *
 * @param {integer} person a
 * @param {integer} person b
 * @return {boolean} whether a knows b
 * knows = function(a, b) {
 *     ...
 * };
 */

/**
 * @param {function} knows()
 * @return {function}
 */
var solution = function(knows) {
    /**
     * @param {integer} n Total people
     * @return {integer} The celebrity
     */
    return function(n) {
      if (!Number.isInteger(n) || n < 0) {
        return 0;
      }

      let candidate = 0;
      for (let i = 1; i < n; i++) {
        if (knows(candidate, i)) {
          candidate = i;
        }
      }

      for (let i = 0; i < n; i++) {
        if (i === candidate) {
          continue;
        }

        if (!knows(i, candidate) || knows(candidate, i)) {
          return -1;
        }
      }

      return candidate;
    };
};
