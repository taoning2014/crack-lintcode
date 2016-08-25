// The API: int read4(char *buf) reads 4 characters at a time from a file.

// The return value is the actual number of characters read. For example, it returns 3 if there is only 3 characters left in the file.

// By using the read4 API, implement the function int read(char *buf, int n) that reads n characters from the file.

// Note:
// The read function will only be called once for each test case.

// Solution:
// 1, Refer: https://leetcode.com/discuss/96334/simple-and-clean-java-solution. 'The question is indeed vague. read4(buf) actually means read 4 characters into buf.'
// 2, Read file in nodejs: http://code-maven.com/reading-a-file-with-nodejs
// 3, How to use apply. Array.prototype.push.apply(a, b) | Math.min.apply(null, [1,2,3])
// 4, JS solution is not support

/**
 * Definition for read4()
 *
 * @param {character[]} buf Destination buffer
 * @return {number} The number of characters read
 * read4 = function(buf) {
 *     ...
 * };
 */

/* The read4 API is defined in the parent class Reader4.
      int read4(char[] buf); */

public class Solution extends Reader4 {
    /**
     * @param buf Destination buffer
     * @param n   Maximum number of characters to read
     * @return    The number of characters read
     */
    public int read(char[] buf, int n) {
        char[] buffer = new char[4];
        int curRead;
        int hasRead = 0;

        while (true) {
          curRead = read4(buffer);
          for (int i = 0; i < curRead && hasRead < n; i++) {
            buf[hasRead++] = buffer[i];
          }

          if (hasRead == n || curRead < 4) {
            return hasRead;
          }
        }
    }
}
