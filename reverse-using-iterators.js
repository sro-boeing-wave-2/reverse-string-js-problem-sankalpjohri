// The intent of this file is to reverse the string using iterators (for, foreach)

const reverse = (s) => {
  const stringLength = s.length;
  let result = '';
  // Iterating over the string in a loop and pushing the results to an array.
  for (let i = stringLength - 1; i >= 0; i -= 1) {
    result += s[i];
  }
  // Returning the result string.
  return result;
};

module.exports = reverse;
