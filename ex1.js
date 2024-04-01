const arrayAppearMost = (arr) => {
  const frequencies = {};

  let maxFrequency = 0;
  arr.forEach((element) => {
    const length = element.length;
    if (frequencies[length]) {
      frequencies[length].push(element);
    } else {
      frequencies[length] = [element];
    }
    if (frequencies[length].length > maxFrequency) {
      maxFrequency = frequencies[length].length;
    }
  });
  for (const key in frequencies) {
    if (frequencies[key].length === maxFrequency) {
      return frequencies[key];
    }
  }
};
// arrayAppearMost(["a", "ab", "abc", "cd", "def", "gh"]);
// console.log(arrayAppearMost(["a", "ab", "abc", "cd", "def", "gh"]));

module.exports = arrayAppearMost;
