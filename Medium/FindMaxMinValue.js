let array = [12, 3, 4, 5];
array.forEach((value, index) => {
  console.log(value, index);
});
let max = array[0];
let min = array[0];
let secoundMax;
let a = array.map((value) => {
  if (array[value] > max) {
    max = array[value];
  } else if (array[value] < min) {
    min = array[value];
  }
});

console.log(max);
console.log(min);
