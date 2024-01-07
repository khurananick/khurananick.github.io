import shuffleArray from "../../Helpers/shuffleArray";

test("shuffles array successfully", () => {
  const array = [1, 2, 3, 4, 5];
  const shuffledArray = shuffleArray([...array]);
  expect(shuffledArray).not.toEqual(array);
});