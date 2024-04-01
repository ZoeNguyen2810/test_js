function SumOfBigest(arr) {
  if (arr.length < 2) return arr[0];

  let firstMax = -Infinity;
  let secondMax = -Infinity;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > firstMax) {
      secondMax = firstMax;
      firstMax = arr[i];
    } else if (arr[i] > secondMax && arr[i] !== firstMax) {
      secondMax = arr[i];
    }
  }

  return firstMax + secondMax;
}

// SumOfBigest([1, 2, 4, 5, 3]);
// SumOfBigest([1, 2, 4, 5, 3]);
// console.log(SumOfBigest([1, 2, 4, 5, 3]));
// console.log(SumOfBigest([-10, -5, 0, 5, 10]));
module.exports = SumOfBigest;
