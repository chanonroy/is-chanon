import isChanon from "./index";

test('is TRUE with "Chanon"', () => {
  expect(isChanon("Chanon")).toBe(true);
});

test('is TRUE with lowercase "chanon"', () => {
  expect(isChanon("chanon")).toBe(true);
});

test('is TRUE with other spacing and "chanon"', () => {
  expect(isChanon(" chanon ")).toBe(true);
});

test("is FALSE with other string", () => {
  expect(isChanon("john")).toBe(false);
});

test("is Charles equal to Chanon", () => {
  expect(isChanon("Charles")).toBe(false);
});

test("is Shannon equal to Chanon", () => {
  expect(isChanon("Shannon")).toBe(false);
});

test("is Shannon equal to Chanon", () => {
  expect(isChanon("Hussein")).toBe(false);
});

test("is FALSE with number", () => {
  // @ts-ignore
  expect(isChanon(123)).toBe(false);
});
