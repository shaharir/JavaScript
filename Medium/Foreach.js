let a = [15, 5, 8, 4];
let res = [];
a.forEach((value, index) => {
  console.log(value, index);

  res.push(value + 2);
});
console.log(res);
console.log(a);
