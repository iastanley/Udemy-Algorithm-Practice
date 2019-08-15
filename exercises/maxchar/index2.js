// --- Directions
// Given a string, return the character that is most
// commonly used in the string.
// --- Examples
// maxChar("abcccccccd") === "c"
// maxChar("apple 1231111") === "1"

function maxChar(str) {
  // character map to keep track of how many times each char is encountered
  const charMap = {}

  // loop through string
  for(let char of str) {
    // for each character in string store in charMap
    if (charMap[char]) {
      charMap[char] += 1;
    } else {
      charMap[char] = 1;
    }
  }

  let maxValue = 0;
  let maxKey;
  for(let key in charMap) {
    if (charMap[key] > maxValue) {
      maxValue = charMap[key];
      maxKey = key;
    }
  }

  return maxKey;
}

module.exports = maxChar;