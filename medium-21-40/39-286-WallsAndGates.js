// You are given a m x n 2D grid initialized with these three possible values.

// -1 - A wall or an obstacle.
// 0 - A gate.
// INF - Infinity means an empty room. We use the value 2^31 - 1 = 2147483647 to represent INF as you may
// assume that the distance to a gate is less than 2147483647.
// Fill each empty room with the distance to its nearest gate. If it is impossible to reach a gate, it
// should be filled with INF.

// For example, given the 2D grid:
// INF  -1  0  INF
// INF INF INF  -1
// INF  -1 INF  -1
//   0  -1 INF INF
// After running your function, the 2D grid should be:
//   3  -1   0   1
//   2   2   1  -1
//   1  -1   2  -1
//   0  -1   3   4
'use strict';
require('chai').should()

function twoDToOneD(row, col, m, n) {
  return row * n + col;
}

function findGates(rooms) {
  let m = rooms.length;
  let n = rooms[0].length;
  let gates = [];

  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      if (rooms[i][j] === 0) {
        gates.push(twoDToOneD(i, j, m, n));
      }
    }
  }

  return gates;
}

function findValidNeighbors(rooms, i, j) {
  let m = rooms.length;
  let n = rooms[0].length;

  let neighbors = [];

  // test up
  if (i - 1 >= 0) {
    if (rooms[i - 1][j] !== -1) {
      neighbors.push(twoDToOneD(i - 1, j, m, n));
    }
  }
  // test down
  if (i + 1 < m) {
    if (rooms[i + 1][j] !== -1) {
      neighbors.push(twoDToOneD(i + 1, j, m, n));
    }
  }

  // test left
  if (j - 1 >= 0) {
    if (rooms[i][j - 1] !== -1) {
      neighbors.push(twoDToOneD(i, j - 1, m, n));
    }
  }

  // test right
  if (j + 1 < n) {
    if (rooms[i][j + 1] !== -1) {
      neighbors.push(twoDToOneD(i, j + 1, m, n));
    }
  }

  return neighbors;
}

function buildGraph(rooms) {
  let m = rooms.length;
  let n = rooms[0].length;
  let nodeArray = [];

  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      nodeArray[twoDToOneD(i, j, m, n)] = [];
    }
  }

  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      let nodeIndex = twoDToOneD(i, j, m, n);
      if (rooms[i][j] === -1) {
        continue;
      }
      Array.prototype.push.apply(nodeArray[nodeIndex], findValidNeighbors(rooms, i, j));
    }
  }

  return nodeArray;
}

// BUG: 注意BSF中markedvisit的顺序，必须是进stack以前，注意经典算法中每一步的顺序都是有讲究的
function bfs(sources, nodeArray, distanceTo) {
  let visited = [];
  let queue = [];
  let curDistance = 0;

  for (let i = 0; i < nodeArray.length; i++) {
    visited[i] = false;
  }

  for (let i = 0; i < sources.length; i++) {
    queue.push(sources[i]);
    visited[sources[i]] = true;
  }

  while (queue.length) {
    let curLength = queue.length;
    for (let i = 0; i < curLength; i++) {
      let curNode = queue.shift();
      distanceTo[curNode] = curDistance;
      for (let j = 0; j < nodeArray[curNode].length; j++) {
        if (!visited[nodeArray[curNode][j]]) {
          visited[nodeArray[curNode][j]] = true;
          queue.push(nodeArray[curNode][j]);
        }
      }
    }
    curDistance++;
  }
}

function updateRooms(rooms, distanceTo) {
  let m = rooms.length;
  let n = rooms[0].length;

  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      if (rooms[i][j] === 2147483647 && distanceTo[twoDToOneD(i, j, m, n)] !== 2147483647) {
        rooms[i][j] = distanceTo[twoDToOneD(i, j, m, n)];
      }
    }
  }
}

/**
 * @param {number[][]} rooms
 * @return {void} Do not return anything, modify rooms in-place instead.
 */
var wallsAndGates = function(rooms) {
  if (!rooms || !rooms.length || !rooms[0].length) {
    return;
  }

  let m = rooms.length;
  let n = rooms[0].length;

  // init distanceTo
  let distanceTo = [];
  for (let i = 0; i < m * n; i++) {
    distanceTo[i] = 2147483647;
  }

  // find gates
  let gates = findGates(rooms);

  // build graph
  let nodeArray = buildGraph(rooms);
  // console.log(nodeArray);

  // bfs graph to update the distanceTo
  bfs(gates, nodeArray, distanceTo);

  // update rooms array based on distanceTo
  updateRooms(rooms, distanceTo);

  return rooms;
};

describe('Test', function() {
  it('should pass', function() {
    let matrix = [[2147483647, 0]];
    console.log(wallsAndGates(matrix));
  });

  // it('should pass', function() {
  //   let matrix = [
  //     [2147483647, -1, 0, 2147483647],
  //     [2147483647, 2147483647, 2147483647, -1],
  //     [2147483647, -1, 2147483647, -1],
  //     [0, -1, 2147483647, 2147483647]
  //   ];
  //   console.log(wallsAndGates(matrix));
  // });

  // it('should pass', function() {
  //   let matrix = [
  //     [2147483647, -1, 0, 2147483647],
  //     [-1, 2147483647, 2147483647, -1],
  //     [2147483647, -1, 2147483647, -1],
  //     [0, -1, 2147483647, 2147483647]
  //   ];
  //   console.log(wallsAndGates(matrix));
  // });
});
