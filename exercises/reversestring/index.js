// --- Directions
// Given a string, return a new string with the reversed
// order of characters
// --- Examples
//   reverse('apple') === 'leppa'
//   reverse('hello') === 'olleh'
//   reverse('Greetings!') === '!sgniteerG'

// USING FANCY REDUCE METHOD!
function reverse(str) {
  return str.split('').reduce((accumulator, element) => {
    return element + accumulator;
  }, '')
}

module.exports = reverse;

// MY ORIGINAL SOLUTION:
// function reverse(str) {
//   let reverseStr = '';
//   for (let i = str.length - 1; i >= 0; i--) {
//     reverseStr += str[i];
//   }
//   return reverseStr;
// }

// USING NEW LOOP SYNTAX - very clean!
// function reverse(str) {
//   let reverseStr = '';
//   for (let char of str) {
//     reverseStr = char + reverseStr;
//   }
//   return reverseStr;
// }

// an easy way with built in string and array methods:
// function reverse(str) {
//   return str.split('').reverse().join('');
// }