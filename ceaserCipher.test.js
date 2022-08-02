import caesarCipher from "./ceaserCipher";

test('abc should return bcd', () => {
    expect(caesarCipher('abc')).toBe('bcd')
});

test('zac should return abd', () => {
    expect(caesarCipher('zac')).toBe('abd')
});

test('xd, should return ye,', () => {
    expect(caesarCipher('xd,')).toBe('ye,')
});