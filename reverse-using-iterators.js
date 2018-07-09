// The intent of this file is to reverse the string using iterators (for, foreach)

const reverse = (s) => {
  const reverseArray = [];
  for (let i = s.length - 1; i >= 0; i -= 1) {
    reverseArray.push(s.charAt(i));
  }
  return reverseArray.join('');
};

module.exports = reverse;
