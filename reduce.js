const arr = [2, 3, 4, 5, 6, 7, 8, 9, 10];

const sum = arr.reduce((acc, cur) => {
  return acc + cur;
}, 0);

console.log(sum);
