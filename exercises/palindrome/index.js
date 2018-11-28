// --- Directions
// Given a string, return true if the string is a palindrome
// or false if it is not.  Palindromes are strings that
// form the same word if it is reversed. *Do* include spaces
// and punctuation in determining if the string is a palindrome.
// --- Examples:
//   palindrome("abba") === true
//   palindrome("abcdefg") === false

function palindrome(str) {
  // cut string in half
  const firstHalf = str.slice(0, Math.floor(str.length/2));
  let sencondHalf;
  if (str.length % 2 === 0) {
    // if string is even you want halfway to end
    sencondHalf = str.slice(Math.floor(str.length/2));
  } else {

    // if string is odd you want halfway + 1 to end (discard odd middle character)
    sencondHalf = str.slice(Math.floor(str.length/2) + 1);
  }

  // reverse second half
  const reversedHalf = sencondHalf.split('').reverse().join('');
  return firstHalf === reversedHalf;
}

// alternative solution - using Array.prototype.every method
// this one loops through the entire array though - which is not necessary - O(n)
// traditional for loop would be needed to do this strategy but stop halfway through
// function palindrome(str) {
//   return str.split('').every((char, i) => {
//     return char === str[str.length - i - 1];
//   })
// }

module.exports = palindrome;
