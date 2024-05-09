let array = [1, 2, 3, 4];

function map(cb, a) {
  let array2 = [];
  for (let i = 0; i < array.length; i++) {
    array2.push(cb(array[i]));
  }
  return array2;
}
function double(arr) {
  return arr * 2;
}
let s = map(double);
console.log(s);
