// --- Directions
// Check to see if two provided strings are anagrams of eachother.
// One string is an anagram of another if it uses the same characters
// in the same quantity. Only consider characters, not spaces
// or punctuation.  Consider capital letters to be the same as lower case
// --- Examples
//   anagrams('rail safety', 'fairy tales') --> True
//   anagrams('RAIL! SAFETY!', 'fairy tales') --> True
//   anagrams('Hi there', 'Bye there') --> False

// helper functions

// removes spaces, special characters and converts to lowercase
function formatStr(str) {
  return str.replace(/[^\w]/g, '').toLowerCase();
}

// create character map
function createCharMap(str) {
  const charMap = {};
  for (let char of str) {
    if (charMap[char]) {
      charMap[char]++;
    } else {
      charMap[char] = 1;
    }
  }
  return charMap;
}

function anagrams(strA, strB) {
  // remove spaces and special characters from both strings

  // convert strings to lower case
  
  // build character maps for strA and strB
  const charMapA = createCharMap(formatStr(strA));
  const charMapB = createCharMap(formatStr(strB));

  // compare character maps for strA and strB
  // need to account for if one string is a substring of the other longer string
  if (strA.length > strB.length) {
    for (let key in charMapA) {
      if (charMapB[key] !== charMapA[key]) {
        return false;
      }
    }
  } else {
    for(let key in charMapB) {
      if(charMapA[key] !== charMapB[key]) {
        return false;
      }
    }
  }
  
  return true;
}

module.exports = anagrams;