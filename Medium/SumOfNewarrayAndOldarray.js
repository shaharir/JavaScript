let array1 = [1, 2, 3, 4, 5];
let sum1 = 0;
let sum2 = 0;

let array2 = array1.map((value) => {
  sum1 += value;
  let arr = value + 5;
  sum2 += arr;
  return arr;
});
console.log(array1, sum1);
console.log(array2, sum2);
