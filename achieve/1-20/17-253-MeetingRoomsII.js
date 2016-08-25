'use strict';

// Given an array of meeting time intervals consisting of start and end times
// [[s1,e1],[s2,e2],...] (si < ei), find the minimum number of conference rooms required.

// For example,
// Given [[0, 30],[5, 10],[15, 20]],
// return 2.

/**
 * Definition for an interval.
 * function Interval(start, end) {
 *     this.start = start;
 *     this.end = end;
 * }
 */

// Note 1. Use PQ, can implement a simple PQ
// Note 2. Should ask if the second meeting start at the end time of first one, does that ok for just
//  use one room

function PQ() {
  this.array = [];
}

PQ.prototype.delMin = function() {
  let curMin = 0;
  for (let i = 1; i < this.array.length; i++) {
    if (this.array[i].end < this.array[curMin].end) {
      curMin = i;
    }
  }
  return this.array.splice(curMin, 1)[0];
}

PQ.prototype.enqueue = function(item) {
  this.array.push(item);
}

PQ.prototype.size = function() {
  return this.array.length;
}

/**
 * @param {Interval[]} intervals
 * @return {number}
 */
var minMeetingRooms = function(intervals) {
  if (!Array.isArray(intervals) || intervals.length === 0) {
    return 0;
  }

  const minPQ = new PQ();
  intervals.sort((p, q) => p.start - q.start);
  minPQ.enqueue(intervals[0]);

  for (let i = 1; i < intervals.length; i++) {
    const cur = minPQ.delMin();
    if (intervals[i].start >= cur.end) {
      cur.end = intervals[i].end;
    } else {
      minPQ.enqueue(intervals[i]);
    }

    minPQ.enqueue(cur);
  }

  return minPQ.size();
};

console.log(minMeetingRooms([
  [0, 30],
  [5, 10],
  [15, 20]
]));
