import analyzeArray from "./analyzeArray";

test("array [1,2,3] should return average of 2, min of 1, max of 3, length of 3", () => {
  expect(analyzeArray([1,2,3])).toEqual({average:2, min: 1, max: 3, length: 3});
});
