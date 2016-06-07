// Given two strings s and t, determine if they are isomorphic.


// All occurrences of a character must be replaced with another character while
// preserving the order of characters. No two characters may map to the same character
// but a character may map to itself.

// For example,
// Given "egg", "add", return true.

// Given "foo", "bar", return false.

// Given "paper", "title", return true.

// Note:
// You may assume both s and t have the same length.


/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isIsomorphic = function(s, t) {
  var sToTMap = {};
  var tToSMap = {};
  var charA;
  var charB;
  var i;

  if (!s || !t) {
    return true;
  }

  for (i = 0; i < s.length; i++) {
    charA = s.charAt(i);
    charB = t.charAt(i);
    if ((tToSMap[charB] && tToSMap[charB] !== charA) || (sToTMap[charA] && sToTMap[charA] !== charB)) {
      return false;
    } else {
      tToSMap[charB] = charA;
      sToTMap[charA] = charB;
    }
  }

  return true;
};
