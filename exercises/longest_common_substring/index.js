// I made this challenge up myself
// this is meant to help with the leetcode problem - longest palindrome

// find longest common substring when given 2 strings
// EX: str1: caba, str2: abac ===> returns aba
// EX: str1: helloyou, str2: youlloyou ===> lloyou
// if there is no common str return an empty string

function longestCommonStr(str1, str2) {
  let longestStr = '';

  // figure out which input is the longer string
  let longer = str1.length > str2.length ? str1 : str2;
  let shorter = str1.length > str2.length ? str2 : str1;

  // loop through the shortest string
  let i = 0;
  let j = 0;
  while (i < shorter.length && j < longer.length) {
    if (shorter[i] === longer[j]) {
      longestStr += shorter[i];
      i++;
      j++;
    } else {
      longestStr = '';
      i++;
    }
  }

  return longestStr;
}

module.exports = longestCommonStr;