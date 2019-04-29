const isChanon = require('../index.js');

test('is TRUE with "Chanon"', () => {
  expect(isChanon('Chanon')).toBe(true);
});

test('is TRUE with lowercase "chanon"', () => {
  expect(isChanon('chanon')).toBe(true);
});

test('is TRUE with other spacing and "chanon"', () => {
  expect(isChanon(' chanon ')).toBe(true);
});

test('is FALSE with other string', () => {
  expect(isChanon('john')).toBe(false);
});

test('is Charles equal Channon', () => {
  expect(isChanon('Charles')).toBe(false);
});

test('is FALSE with number', () => {
  expect(isChanon(123)).toBe(false);
});
