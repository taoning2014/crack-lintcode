'use strict';

// Solution 1. Timeout

/**
 * @param {string} s
 * @return {string[]}
 */
// var findRepeatedDnaSequences = function(s) {
//   if (!s || typeof s !== 'string' || s.length < 10) {
//     return [];
//   }

//   const set = new Set();
//   for (let i = 0; i <= s.length - 10; i++) {
//     const curStr = s.substr(i, 10);
//     for (let j = i + 1; j <= s.length - 10; j++) {
//       const nextStr = s.substr(j, 10);
//       if (curStr === nextStr) {
//         set.add(curStr);
//       }
//     }
//   }

//   return Array.from(set);
// };

// Solution 2.
// refer: https://discuss.leetcode.com/topic/8894/clean-java-solution-hashmap-bits-manipulation
// A, C, G, and T,
/**
 * @param {string} s
 * @return {string[]}
 */
var findRepeatedDnaSequences = function(s) {
  if (!s || typeof s !== 'string' || s.length < 10) {
    return [];
  }

  const map = { 'A': 0, 'C': 1, 'G': 2, 'T': 3 };
  const first = new Set();
  const second = new Set();
  const mask = parseInt('00000000000011111111111111111111', 2);
  let val = 0;

  for (let i = 0; i < 9; i++) {
    val = val << 2;
    val = val | map[s[i]];
  }

  for (let i = 9; i < s.length; i++) {
    val = val << 2;
    val = val | map[s[i]];
    val = val & mask;
    if (!first.has(val)) {
      first.add(val);
    } else {
      console.log(val.toString(2));
      second.add(s.substring(i - 9, i + 1));
    }
  }

  return Array.from(second);
};

console.log(findRepeatedDnaSequences('"CGACGCAATTTAGAACGGGCCGCACTGCAACCATTGCTCAGACAACGCATGAGTTAAATTTCACAAGTGATAGTGGCTTGCGAGACGTGGGTTGGTGGTAGCGTACGCCCGCTATTCGCCCCTAACGTGACGGGATTATAAGGTCGCTTCCCGGAATGCGCAGACGAGTCTCCGGTTTAGCCTAGACGTCTCACGCGCGCAAGGCGTCAGTTCTCACTATCTCGCACAGGTGTATTCTATTAGTTATGGGTTCTCACTACAGTCGGTTACTTCCTCATCCATTTCTGCATACGGGTCAACTAACAGTGTCATGGGGTATTGGGAAGGATGCGTTTTTAAACCCTCTCAGTAGCGCGAGGATGCCCACAAATACGACGGCGGCCACGGATCTAATGCGAAGCTAGCGACGCTTTCCAGCAACGAGCGCCCCACTTATGACTGCGTGGGGCGCTCCGCTTTCCTAGAGAACATAGATGGTGTTTTCGAATCGTAACCACTTA"'));
