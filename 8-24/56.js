'use strict';

// BUG: in isIterval(), I consider about interval1 and interval2

// Definition for an interval.
function Interval(start, end) {
    this.start = start;
    this.end = end;
}

function isIterval(interval1, interval2) {
  // include or same
  if (interval1.start <= interval2.start && interval1.end >= interval2.end) {
    return true;
  }

  // overlap
  if (interval1.start <= interval2.start && interval1.end >= interval2.start) {
    return true
  }

  return false;
}

function mergeTwo(interval1, interval2) {
  return new Interval(Math.min(interval1.start, interval2.start), Math.max(interval1.end, interval2.end));
}

/**
 * @param {Interval[]} intervals
 * @return {Interval[]}
 */
var merge = function(intervals) {
  if (!Array.isArray(intervals)) {
    return [];
  }

  intervals.sort((p, q) => p.start - q.start);

  let cur = 0;
  while (cur < intervals.length - 1) {
    if (isIterval(intervals[cur], intervals[cur + 1])) {
      const newInterval = mergeTwo(intervals[cur], intervals[cur + 1]);
      intervals.splice(cur, 2, newInterval);
    } else {
      cur++
    }
  }

  return intervals;
};

// [1,3],[2,6],[8,10],[15,18]
const i4 = new Interval(1, 3);
const i3 = new Interval(1, 5);
// const i3 = new Interval(2, 6);
const i1 = new Interval(8, 10);
const i2 = new Interval(15, 18);
// [[1,4],[1,5]]
// console.log(merge([i1, i2, i3, i4]));
console.log(merge([i4, i3]));
