// Given a string, we can "shift" each of its letter to its successive letter,
// for example: "abc" -> "bcd". We can keep "shifting" which forms the sequence:

// "abc" -> "bcd" -> ... -> "xyz"
// Given a list of strings which contains only lowercase alphabets,
// group all strings that belong to the same shifting sequence.

// For example, given: ["abc", "bcd", "acef", "xyz", "az", "ba", "a", "z"],
// Return:

// [
//   ["abc","bcd","xyz"],
//   ["az","ba"],
//   ["acef"],
//   ["a","z"]
// ]

// =====
// Note:
// 好吧，小小吐槽下，这道题都能算easy的？
// 1, 注意在题设中自己漏掉的细节["az","ba"] and For the return value, each inner list's elements must follow the lexicographic order.

'use strict';
require('chai').should();


function isShiftStr(str1, str2) {
  var i;
  var dis1;
  var dis2;

  if (str1.length !== str2.length) {
    return false;
  }

  for (i = 1; i < str1.length; i++) {
    dis1 = str1.charCodeAt(i) - str2.charCodeAt(i);
    dis2 = str1.charCodeAt(i - 1) - str2.charCodeAt(i - 1);
    if (dis1 < 0) {
      dis1 += 26;
    }
    if (dis2 < 0) {
      dis2 += 26;
    }
    if (dis1 !== dis2) {
      return false;
    }
  }

  return true;
}

/**
 * @param {string[]} strings
 * @return {string[][]}
 */
var groupStrings = function(strings) {
  var result = [];
  var i;

  if (!strings || !strings.length) {
    return result;
  }

  strings.forEach(function(str) {
    for (i = 0; i < result.length; i++) {
      if (isShiftStr(result[i][0], str)) {
        result[i].push(str);
        return;
      }
    }
    result.push([str]);
  });

  result.forEach(function(list) {
    list.sort();
  });

  return result;
};

describe('Test', function() {
  it('Should pass', function() {
    // console.log(groupStrings());
    console.log(groupStrings(["fpbnsbrkbcyzdmmmoisaa","cpjtwqcdwbldwwrryuclcngw","a","fnuqwejouqzrif","js","qcpr","zghmdiaqmfelr","iedda","l","dgwlvcyubde","lpt","qzq","zkddvitlk","xbogegswmad","mkndeyrh","llofdjckor","lebzshcb","firomjjlidqpsdeqyn","dclpiqbypjpfafukqmjnjg","lbpabjpcmkyivbtgdwhzlxa","wmalmuanxvjtgmerohskwil","yxgkdlwtkekavapflheieb","oraxvssurmzybmnzhw","ohecvkfe","kknecibjnq","wuxnoibr","gkxpnpbfvjm","lwpphufxw","sbs","txb","ilbqahdzgij","i","zvuur","yfglchzpledkq","eqdf","nw","aiplrzejplumda","d","huoybvhibgqibbwwdzhqhslb","rbnzendwnoklpyyyauemm"]));
    // console.log(groupStrings(['az', 'yx']));
    // console.log(groupStrings(['ac', 'bd', 'de', 'abc', 'cde', 'aaa']));
  });
});
