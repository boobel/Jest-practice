const findMin = (arr) => {
  let min = arr[0];
  for (let i in arr) {
    if (arr[i] < min) {
      min = arr[i];
    }
  }
  return min;
};

const findMax = (arr) => {
  let max = arr[0];
  for (let i in arr) {
    if (arr[i] > max) {
      max = arr[i];
    }
  }
  return max;
};

const findAverage = (arr) => {
  let avg = 0;
  for (let i in arr) {
    avg += arr[i];
  }
  avg = avg / arr.length;
  return avg;
};

const findLength = (arr) => {
  return arr.length;
};

const analyzeArray = (arr) => {
  return {
    average: findAverage(arr),
    min: findMin(arr),
    max: findMax(arr),
    length: findLength(arr),
  };
};

export default analyzeArray;
