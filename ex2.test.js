const sum = require("./ex2");

test("Test Sum", () => {
  expect(sum([1, 2, 3])).toBe(5);
});
test("Test Sum", () => {
  expect(sum([1, 2, 3 ,5, 6])).toBe(11);
});
test("Test Sum", () => {
  expect(sum([1, 2, 3, -5, 6])).toBe(9);
});