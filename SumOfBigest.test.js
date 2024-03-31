import { SumOfBigest } from "./ex2";

describe("SumOfBigest", () => {
  // setup

  const sumOfBigest = new SumOfBigest();
  //run

  const Sum = sumOfBigest([1, 2, 3]);
  //assert

  expect(Sum).toBe(5);
});
