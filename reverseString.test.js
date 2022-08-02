import reverseString from "./reverseString";


test("test should return tset", () => {
    expect(reverseString('test')).toBe('tset');
  });

test("hello should return olleh", () => {
    expect(reverseString('hello')).toEqual('olleh');
});

test("Hello should return olleH", () => {
    expect(reverseString('Hello')).toEqual('olleH');
});