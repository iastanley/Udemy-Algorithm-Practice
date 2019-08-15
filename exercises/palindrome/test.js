const palindrome = require('./index2');

test('palindrome function is defined', () => {
  expect(typeof palindrome).toEqual('function');
});

test('"abba" is a palindrome', () => {
  expect(palindrome('abba')).toBeTruthy();
});

test('" aba" is not a palindrome', () => {
  expect(palindrome(' aba')).toBeFalsy();
});

test('"aba " is not a palindrome', () => {
  expect(palindrome('aba ')).toBeFalsy();
});

test('"greetings" is not a palindrome', () => {
  expect(palindrome('greetings')).toBeFalsy();
});

test('"1000000001" a palindrome', () => {
  expect(palindrome('1000000001')).toBeTruthy();
});

test('"Fish hsif" is not a palindrome', () => {
  expect(palindrome('Fish hsif')).toBeFalsy();
});

test('"pennep" a palindrome', () => {
  expect(palindrome('pennep')).toBeTruthy();
});

test('"A" is a palindrome', () => {
  expect(palindrome('A')).toBeTruthy();
});

test('an empty string is a plindrome', () => {
  expect(palindrome('')).toBeTruthy();
});

test('" a" is not a palindrome', () => {
  expect(palindrome(' a')).toBeFalsy();
});
