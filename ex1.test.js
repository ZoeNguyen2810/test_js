const array = require("./ex1")

test('Test Array', () => {
    expect(array(["a", "ab", "abc", "cd", "def", "gh"])).toStrictEqual([
      "ab",
      "cd",
      "gh",
    ]);
});
test("Test Array", () => {
  expect(array(["a", "ab", "abc", "cd", "def", "gh" ,"ef"])).toStrictEqual([
    "ab",
    "cd",
    "gh",
    "ef"
  ]);
});
test("Test Array", () => {
  expect(array(["a", "b", "abc", "d", "def", "h", "ef"])).toStrictEqual([
    "a",
    "b",
    "d",
    "h",
  ]);
});