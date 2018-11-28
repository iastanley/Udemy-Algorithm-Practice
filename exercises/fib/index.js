// --- Directions
// Print out the n-th entry in the fibonacci series.
// The fibonacci series is an ordering of numbers where
// each number is the sum of the preceeding two.
// For example, the sequence
//  [0, 1, 1, 2, 3, 5, 8, 13, 21, 34]
// forms the first ten entries of the fibonacci series.
// Example:
//   fib(4) === 3

// recursive solution
function fib(n) {
  if (n < 2) {
    return n;
  }
  return fib(n - 1) + fib (n - 2); 
}
// is this exponential? O(2^n) - YES! 

// the recusrive solution with optimization - uses memoization
function memoize(fn) {
  const cache = {};
  return function(...args) {
    // if args (converted to 'arg1,arg2,arg3') key exists return cache
    if (cache[args]) {
      return cache[args];
    }
    // otherwise do the caclulation with the function call and store in cache before turning
    cache[args] = fn.apply(null, args);
    return cache[args];
  }
}

// need to overwrite the slow version of fib with memoized version
fib = memoize(fib);

// iterative solution - my hacky solution
// function fib(n) {
  // if (n === 0) {
  //   return 0;
  // }

  // if (n === 1) {
  //   return 1;
  // }
  // let firstNum = 0;
  // let secondNum = 1;
  // let currentFib = firstNum + secondNum;
  // let position = 2;
  // while (position < n) {
  //   firstNum = secondNum;
  //   secondNum = currentFib;
  //   currentFib = firstNum + secondNum;
  //   position++;
  // }
  // return currentFib;
// }

// better iterative solution! - building an array - logic is much simplr!!!
// function fib(n) {
//   const result = [0, 1];
//   for (let i = 2; i <= n; i++) {
//     const first = result[i - 2];
//     const second = result[i - 1];
//     result.push(first + second);
//   }
//   return result[n];
// }
// runtime - O(n) - linear

module.exports = fib;
