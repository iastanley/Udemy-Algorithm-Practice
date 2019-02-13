// --- Directions
// Given the root node of a tree, return
// an array where each element is the width
// of the tree at each level.
// --- Example
// Given:
//     0
//   / |  \
// 1   2   3
// |       |
// 4       5
// Answer: [1, 3, 2]

// My solution - pretty close to recommended solution
function levelWidth(root) {
  if(!root) {
    return [0];
  }

  const counters = [0];
  const nodeArray = [root, 's'];
  let index = 0;
  while(nodeArray.length > 1) {
    const node = nodeArray.shift();
    if (node === 's') {
      index++;
      counters[index] = 0;
      nodeArray.push('s');
    } else {
      counters[index]++;
      nodeArray.push(...node.children);
    }
  }
  return counters; 
}

module.exports = levelWidth;
