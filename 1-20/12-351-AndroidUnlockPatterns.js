'use strict';

// Given an Android 3x3 key lock screen and two integers m and n, where 1 ≤ m ≤ n ≤ 9, count the total number of unlock patterns of the Android lock screen, which consist of minimum of m keys and maximum n keys.

// Rules for a valid pattern:
// Each pattern must connect at least m keys and at most n keys.
// All the keys must be distinct.
// If the line connecting two consecutive keys in the pattern passes through any other keys, the other keys must have previously selected in the pattern. No jumps through non selected key is allowed.
// The order of keys used matters.

// Explanation:
// | 1 | 2 | 3 |
// | 4 | 5 | 6 |
// | 7 | 8 | 9 |
// Invalid move: 4 - 1 - 3 - 6
// Line 1 - 3 passes through key 2 which had not been selected in the pattern.

// Invalid move: 4 - 1 - 9 - 2
// Line 1 - 9 passes through key 5 which had not been selected in the pattern.

// Valid move: 2 - 4 - 1 - 3 - 6
// Line 1 - 3 is valid because it passes through key 2, which had been selected in the pattern

// Valid move: 6 - 5 - 4 - 1 - 9 - 2
// Line 1 - 9 is valid because it passes through key 5, which had been selected in the pattern.

// Example:
// Given m = 1, n = 1, return 9.

// Refer: https://discuss.leetcode.com/topic/46352/simple-and-concise-java-solution-in-69ms
// Note: 没有想明白，n, m 为1，2时1，4为什么是有效的
function createJumps() {
  let jumps = new Array(10);
  for (let i = 0; i < jumps.length; i++) {
    jumps[i] = new Array(10);
    jumps[i].fill(0);
  }

  jumps[1][3] = jumps[3][1] = 2;
  jumps[4][6] = jumps[6][4] = 5;
  jumps[7][9] = jumps[9][7] = 8;
  jumps[1][7] = jumps[7][1] = 4;
  jumps[2][8] = jumps[8][2] = 5;
  jumps[3][9] = jumps[9][3] = 6;
  jumps[1][9] = jumps[9][1] = jumps[3][7] = jumps[7][3] = 5;
  return jumps;
}

// function getNextMove(cur) {
//   switch (cur) {
//     case 1:
//       return [2, 4, 5]
//     case 2:
//       return [1, 3, 4, 5, 6];
//     case 3:
//       return [2, 5, 6];
//     case 4:
//       return [1, 2, 5, 7, 8];
//     case 5:
//       return [1, 2, 3, 4, 6, 7, 8, 9];
//     case 6:
//       return [2, 3, 5, 8, 9];
//     case 7:
//       return [4, 5, 8];
//     case 8:
//       return [4, 5, 6, 7, 9];
//     case 9:
//       return [5, 6, 8];
//     default:
//       return [];
//   }

// }

function dfs(cur, len, count, m, n, visited, jumps) {
  if (len >= m) {
    count++;
  }

  len++;

  if (len > n) {
    return count;
  }

  visited[cur] = true;
  for (let next = 1; next <= 9; next++) {
    let jump = jumps[cur][next];
    if (!visited[next] && (jump === 0 || visited[jump])) {
      count = dfs(next, len, count, m, n, visited, jumps);
    }
  }

  visited[cur] = false;

  return count;
}

/**
 * @param {number} m
 * @param {number} n
 * @return {number}
 */
var numberOfPatterns = function(m, n) {
  let jumps = createJumps();
  let count = 0;
  let visited = new Array(10);
  visited.fill(false);

  count += dfs(1, 1, 0, m, n, visited, jumps) * 4;
  count += dfs(2, 1, 0, m, n, visited, jumps) * 4;
  count += dfs(5, 1, 0, m, n, visited, jumps);

  return count;
};

console.log(numberOfPatterns(1, 1));
console.log(numberOfPatterns(1, 2));
