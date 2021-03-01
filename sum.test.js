const { add, subtrackt, multiply, divide } = require('./sum');

test('2 + 4 should be 6', () => {
    expect(add(2, 4)).toBe(6);
});

test('2 - 4 should be -2', () => {
    expect(subtrackt(2, 4)).toBe(-2);
});

test('2 / 4 should be 0.5', () => {
    expect(divide(2, 4)).toBe(0.5);
});

test('2 * 4 should be 8', () => {
    expect(multiply(2, 4)).toBe(8);
});