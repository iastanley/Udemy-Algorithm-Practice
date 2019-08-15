// --- Directions
// Given a string, return true if the string is a palindrome
// or false if it is not.  Palindromes are strings that
// form the same word if it is reversed. *Do* include spaces
// and punctuation in determining if the string is a palindrome.
// --- Examples:
//   palindrome("abba") === true
//   palindrome("abcdefg") === false

function palindrome(str) {
  // split string in half (ignore any odd middle character)
  const firstHalf = str.slice(0, Math.floor(str.length/2));
  let secondHalf = str.length % 2 === 0 ? str.slice(str.length/2) : str.slice(Math.floor(str.length/2) + 1);

  // reverse 2nd half of string
  secondHalf = secondHalf.split('').reverse().join('');
  
  // return first half === 2nd half
  return firstHalf === secondHalf;
}

module.exports = palindrome;