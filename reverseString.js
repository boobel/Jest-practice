const reverseString = (str) => {
  let arr = str.split('');
  arr = arr.reverse();
  arr = arr.join('');
  return arr;
};

export default reverseString;