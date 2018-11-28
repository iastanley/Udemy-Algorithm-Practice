// --- Directions
// Given a string, return the character that is most
// commonly used in the string.
// --- Examples
// maxChar("abcccccccd") === "c"
// maxChar("apple 1231111") === "1"

function maxChar(str) {
  // build a map of characters to number of times they appear in string
  const charMap = {};
  // note that you can use a for of loop for strings (and arrays and any other iteratable object)
  for (let char of str) {
    charMap[char] = charMap[char] ? charMap[char] + 1 : 1;
  }

  // find the character in the map with the greatest value
  // note the use of for in loop for looping through keys of object
  let maxChar = str[0];
  for (let char in charMap) {
    if (charMap[char] > charMap[maxChar]) {
      maxChar = char;
    }
  }
  return maxChar;
}

module.exports = maxChar;
