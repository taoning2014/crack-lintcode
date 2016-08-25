'use strict';

function WindowStr(str) {
  this.map = new Map();
  for (let i = 0; i < str.length; i++) {
    if (!this.map.has(str[i])) {
      this.map.set(str[i], { require: 1, cur: 0 });
    } else {
      const newRequire = this.map.get(str[i]).require + 1;
      this.map.set(str[i], { require: newRequire, cur: 0 });
    }
  }

  this.requireChars = Array.from(this.map.keys()).length;
  this.curChars = 0;
}

WindowStr.prototype.isValid = function() {
  return this.requireChars === this.curChars;
}

WindowStr.prototype.shouldMove = function(char) {
  if (!this.map.has(char)) {
    return true;
  }

  if (this.map.get(char).cur > this.map.get(char).require) {
    return true;
  }
}

WindowStr.prototype.addChar = function(char) {
  if (!this.map.has(char)) {
    return;
  }

  this.map.get(char).cur++;

  if (this.map.get(char).cur === this.map.get(char).require) {
    this.curChars++;
  }
}

WindowStr.prototype.removeChar = function(char) {
  if (!this.map.has(char)) {
    return;
  }

  if (this.map.get(char).cur === this.map.get(char).require) {
    this.curChars--;
  }

  this.map.get(char).cur--;
}

/**
 * @param {string} s
 * @param {string} t
 * @return {string}
 */
var minWindow = function(s, t) {
  if (typeof s !== 'string' || typeof t !== 'string') {
    return '';
  }

  // TODO: consider s === t

  const windowStr = new WindowStr(t);
  let l = 0;
  let r = 0;
  let cur = s + "a";
  while (l < s.length) {
    // move right to find next qualify
    while (!windowStr.isValid() && r < s.length) {
      windowStr.addChar(s[r++]);
    }

    // TODO: consider last one
    // optimize
    // if (windowStr.isValid() && cur.length > r - l) {
    //   cur = s.substring(l, r);
    // }

    if (windowStr.isValid()) {
      if (cur.length > r - l) {
        cur = s.substring(l, r);
      }
    } else {
      return '';
    }

    // move left to exist qualify
    //  1, move first element point by left
    //  2, move until find next qualify element
    windowStr.removeChar(s[l++]);
    while (windowStr.shouldMove(s[l]) && l < cur.length) {
      windowStr.removeChar(s[l++]);
    }
  }

  if (cur.length === s.length + 1) {
    return '';
  }

  return cur;
};

console.log(minWindow('ABCB', 'BC'));
