const letters = ["a", "b", "c", "d", "e", "f", "g"];
const nums = [1, 2, 3, 4, 5, 6, 7, 8];

const sqNames = letters.map((letter) => {
  return nums.map((num) => {
    return letter + num;
  });
});

console.log(sqNames);
