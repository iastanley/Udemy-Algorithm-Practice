const longestCommonStr = require('./index');

test('longestCommonStr is a function', () => {
  expect(typeof longestCommonStr).toEqual('function');
});

test('longest common substring of caba and abac is aba', () => {
  expect(longestCommonStr('caba', 'abac')).toEqual('aba');
});

test('longest common substring of helloyou and youlloyou is lloyou', () => {
  expect(longestCommonStr('helloyou', 'youlloyou')).toEqual('lloyou');
});

test('longest common substring of abcd and jklf is ""', () => {
  expect(longestCommonStr('abcd', 'jklf')).toEqual('');
});

test('longest common substring of abcd and b is b', () => {
  expect(longestCommonStr('abcd', 'b')).toEqual('b');
})