// --- Directions
// Given a node, validate the binary search tree,
// ensuring that every node's left hand child is
// less than the parent node's value, and that
// every node's right hand child is greater than
// the parent

function validate(node, min = null, max = null) {
  // base case
  // checks validity of the current node
  if ((min && node.data < min) || (max && node.data > max)) {
    return false;
  }
  // left branch
  // checks validity of the left branch with respect to current node
  if (node.left && !validate(node.left, min, node.data)) {
    return false;
  }
  // right branch
  // checks validity of the right branch with respect to current node
  if (node.right && !validate(node.right, node.data, max)) {
    return false;
  }
  // if everything passes return true
  return true;
}

module.exports = validate;
