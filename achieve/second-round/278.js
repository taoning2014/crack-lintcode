/**
 * Definition for isBadVersion()
 *
 * @param {integer} version number
 * @return {boolean} whether the version is bad
 * isBadVersion = function(version) {
 *     ...
 * };
 */

/**
 * @param {function} isBadVersion()
 * @return {function}
 */
var solution = function(isBadVersion) {
    /**
     * @param {integer} n Total versions
     * @return {integer} The first bad version
     */
    return function(n) {
        if (!Number.isInteger(n) || n < 1) {
          return -1;
        }

        let l = 1;
        let r = n;

        while (l <= r) {
          const mid = l + Math.floor((r - l) / 2);
          if (isBadVersion(mid)) {
            r = mid - 1;
          } else {
            l = mid + 1;
          }
        }

        return l;
    };
};
