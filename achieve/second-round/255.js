/**
 * @param {number[]} preorder
 * @return {boolean}
 */
var verifyPreorder = function(preorder) {
  if (!Array.isArray(preorder) || preorder.length === 0) {
    return true;
  }

  const stack = [preorder[0]];
  let curMin = Number.NEGATIVE_INFINITY;
  for (let i = 1; i < preorder.length; i++) {
    if (preorder[i] <= curMin) {
      return false;
    }

    while (stack.length !== 0 && preorder[i] > stack[stack.length - 1]) {
      curMin = stack.pop();
    }

    stack.push(preorder[i]);
  }

  return true;
};
