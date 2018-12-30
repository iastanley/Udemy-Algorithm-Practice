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

// convert to lowercase
// remove spaces and punctuation
function normalize(str) {
  return str.replace(/[^\w]/g, '').toLowerCase();
}

// build map of characters in string to frequency of occurance
function buildCharMap(str) {
  const charMap = {}
  for (let char of str) {
    charMap[char] = charMap[char] + 1 || 1;
  }
  return charMap;
}

// my first solution 
// function anagrams(stringA, stringB) {
//   stringA = normalize(stringA);
//   stringB = normalize(stringB);

//   // if normalized stringA is not the same length as normalized stringB not anagrams
//   if (stringA.length !== stringB.length) {
//     return false;
//   }

//   const charMapA = buildCharMap(stringA);
//   const charMapB = buildCharMap(stringB);

//   // compare charMapA and charMapB
//   for (let key in charMapA) {
//     if (charMapA[key] !== charMapB[key]) {
//       return false;
//     }
//   }
//   return true;
// }

// 2nd solution - (I prefer the first solution)
function anagrams(stringA, stringB) {
  stringA = normalize(stringA);
  stringB = normalize(stringB);

  return stringA.split('').sort().join('') === stringB.split('').sort().join(''); 
}

module.exports = anagrams;
