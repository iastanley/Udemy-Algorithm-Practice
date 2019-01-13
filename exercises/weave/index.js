// --- Directions
// 1) Complete the task in weave/queue.js
// 2) Implement the 'weave' function.  Weave
// receives two queues as arguments and combines the
// contents of each into a new, third queue.
// The third queue should contain the *alterating* content
// of the two queues.  The function should handle
// queues of different lengths without inserting
// 'undefined' into the new one.
// *Do not* access the array inside of any queue, only
// use the 'add', 'remove', and 'peek' functions.
// --- Example
//    const queueOne = new Queue();
//    queueOne.add(1);
//    queueOne.add(2);
//    const queueTwo = new Queue();
//    queueTwo.add('Hi');
//    queueTwo.add('There');
//    const q = weave(queueOne, queueTwo);
//    q.remove() // 1
//    q.remove() // 'Hi'
//    q.remove() // 2
//    q.remove() // 'There'

const Queue = require('./queue');

// function weave(sourceOne, sourceTwo) {
//   const finalQueue = new Queue();

//   // weave queues together
//   while (sourceOne.peek() && sourceTwo.peek()) {
//     finalQueue.add(sourceOne.remove());
//     finalQueue.add(sourceTwo.remove());
//   }

//   // handle if sourceOne or sourceTwo has extra records
//   if (sourceOne.peek()) {
//     while(sourceOne.peek()) {
//       finalQueue.add(sourceOne.remove());
//     }
//   } else if (sourceTwo.peek()) {
//     while(sourceTwo.peek()) {
//       finalQueue.add(sourceTwo.remove());
//     }
//   }

//   return finalQueue;
// }

// refactored version - same as above but cleaner
function weave(one, two) {
  const q = new Queue;

  while (one.peek() || two.peek()) {
    if (one.peek()) {
      q.add(one.remove());
    } 

    if (two.peek()) {
      q.add(two.remove());
    }
  }

  return q;
} 

module.exports = weave;
