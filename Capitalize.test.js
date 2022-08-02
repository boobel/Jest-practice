import Capitalize from "./Capitalize";

test("test should return Test", () => {
  expect(Capitalize('test')).toBe('Test');
});

test("Test should return Test", () => {
  expect(Capitalize('Test')).toBe('Test');
});

test("TEST should return TEST", () => {
  expect(Capitalize('TEST')).toBe('TEST');
});

test("t est should return Test", () => {
  expect(Capitalize('t est')).toBe('T est');
});