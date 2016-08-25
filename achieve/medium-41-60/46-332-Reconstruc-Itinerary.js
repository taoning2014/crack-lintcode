'use strict';

// Given a list of airline tickets represented by pairs of departure and arrival airports [from, to], reconstruct the itinerary in order. All of the tickets belong to a man who departs from JFK. Thus, the itinerary must begin with JFK.

// Note:
// If there are multiple valid itineraries, you should return the itinerary that has the smallest lexical order when read as a single string. For example, the itinerary ["JFK", "LGA"] has a smaller lexical order than ["JFK", "LGB"].
// All airports are represented by three capital letters (IATA code).
// You may assume all tickets form at least one valid itinerary.
// Example 1:
// tickets = [["MUC", "LHR"], ["JFK", "MUC"], ["SFO", "SJC"], ["LHR", "SFO"]]
// Return ["JFK", "MUC", "LHR", "SFO", "SJC"].
// Example 2:
// tickets = [["JFK","SFO"],["JFK","ATL"],["SFO","ATL"],["ATL","JFK"],["ATL","SFO"]]
// Return ["JFK","ATL","JFK","SFO","ATL","SFO"].
// Another possible reconstruction is ["JFK","SFO","ATL","JFK","ATL","SFO"]. But it is larger in lexical order.

// Refer: https://discuss.leetcode.com/topic/36370/short-ruby-python-java-c/2
// Refer: http://www.geeksforgeeks.org/euler-circuit-directed-graph/

// Bug: Need to test if map.has(from) exist

// ============== MinPQ ==============

function MinPQ() {
  this.array = [];
}

MinPQ.prototype.delMin = function() {
  let curMinIndex = 0;
  for (let i = 1; i < this.array.length; i++) {
    if (this.array[i] < this.array[curMinIndex]) {
      curMinIndex = i;
    }
  }

  return this.array.splice(curMinIndex, 1)[0];
}

MinPQ.prototype.enqueue = function(item) {
  this.array.push(item);
}

MinPQ.prototype.isEmpty = function() {
  return this.array.length === 0;
}

// ============== Helper ==============

function dfs(map, result, from) {
  while (map.has(from) && !map.get(from).isEmpty()) {
    dfs(map, result, map.get(from).delMin());
  }
  result.push(from);
}

// ============== Main ==============

/**
 * @param {string[][]} tickets
 * @return {string[]}
 */
var findItinerary = function(tickets) {
  if (!Array.isArray(tickets) || tickets.length === 0) {
    return [];
  }

  const map = new Map();
  const result = [];

  // build a graph
  for (let i = 0; i < tickets.length; i++) {
    if (!map.has(tickets[i][0])) {
      const pq = new MinPQ();
      pq.enqueue(tickets[i][1]);
      map.set(tickets[i][0], pq);
    } else {
      map.get(tickets[i][0]).enqueue(tickets[i][1]);
    }
  }

  dfs(map, result, 'JFK');

  result.reverse();

  return result;
};

var tickets = [["JFK","SFO"],["JFK","ATL"],["SFO","ATL"],["ATL","JFK"],["ATL","SFO"]];
console.log(findItinerary(tickets));
