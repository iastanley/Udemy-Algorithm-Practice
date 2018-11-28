/**
 * @param {string} s
 * @return {string}
 */

// This solution works but is so inefficient it won't pass LeetCode O(n^3)
// Still working on understanding the dynamic programming solution - O(n^2)
var longestPalindrome = function(s) {
    // helper function to just know if the substring being checked is a palindrome
    const isPalindrome = str => {
      const firstHalf = str.slice(0, Math.floor(str.length/2));
      let reversedHalf; 
      if (str.length % 2 === 0) {
        reversedHalf = str.slice(Math.floor(str.length/2)).split('').reverse().join('');
      } else {
        reversedHalf = str.slice(Math.floor(str.length/2) + 1).split('').reverse().join('');
      }
      return firstHalf === reversedHalf;
    }

    const palindromeMap = {}
    // start with index = 0 and loop through string to find longest palindrome from index 0
    for (let i = 0; i < s.length; i++) {
      for (let j = s.length - 1; j >= i; j--) {
        if (s[i] === s[j]) {
          // check if the substring is a palindrome
          const subString = s.slice(i, j + 1);
          if (isPalindrome(subString)) {
            palindromeMap[subString] = subString.length;
          }
        }
      }
    }
    
    // find the longest palindrome in map
    let longest = '';
    let maxLength = 0;
    for (let palindrome in palindromeMap) {
      if (palindromeMap[palindrome] > maxLength) {
        longest = palindrome;
        maxLength = palindromeMap[palindrome];
      }
    }
    return longest;
};

module.exports = longestPalindrome;