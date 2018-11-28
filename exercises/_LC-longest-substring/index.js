/**
 * @param {string} str
 * @return {number}
 */
var lengthOfLongestSubstring = function(str) {
    let longestString = '';
    let longestLength = 0;
    for (let char of str) {
      let charIndex = longestString.indexOf(char);
      if (charIndex < 0) {
        longestString += char;
      } else {
        longestString = longestString.slice(charIndex + 1) + char;
      }
      if (longestLength < longestString.length) {
        longestLength = longestString.length;
      }
    }
    return longestLength;
};

module.exports = lengthOfLongestSubstring;

// need to go through leet code solutions more carefully but this solution was faster than 96.0% of submissions - I think it is basically O(n) complexity which is better than brute force O(n^2) solution