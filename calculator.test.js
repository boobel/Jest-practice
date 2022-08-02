import doMath from "./calculator";

test("2+2 should return 4", () => {
    expect(doMath('2+2')).toBe(4);
});

test("2-2 should return -", () => {
    expect(doMath('2-2')).toBe(0);
});

test("2*2 should return 4", () => {
    expect(doMath('2*2')).toBe(4);
});

test("2/2 should return 4", () => {
    expect(doMath('2/2')).toBe(1);
});

test("2-1200 should return 4", () => {
    expect(doMath('2-1200')).toBe(-1198);
});

test("2*(-6) should return -12", () => {
    expect(doMath('2*(-6)')).toBe(-12);
});

test("2^2 should return 4", () => {
    expect(doMath('2**2')).toBe(4);
});