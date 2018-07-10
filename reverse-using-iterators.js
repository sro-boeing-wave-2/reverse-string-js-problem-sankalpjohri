// The intent of this file is to reverse the string using iterators (for, foreach)

const reverse = (s) => {
  const reverseArray = [];
  // Iterating over the string in a loop and pushing the results to an array.
  for (let i = s.length - 1; i >= 0; i -= 1) {
    reverseArray.push(s.charAt(i));
  }
  // Returning a string created by joining the elements of the array.
  return reverseArray.join('');
};

module.exports = reverse;
