let data = [
  { name: "sumon", age: 29 },
  { name: "shahariar", age: 27 },
  { name: "Azom", age: 29 },
  { name: "rumon", age: 24 },
  { name: "Alfaz", age: 29 },
];

let sum = 0;
data.forEach((item) => {
  sum += item.age;
});

let avg = sum / data.length + 1;

data.map((item) => {
  if (avg < item.age) {
    console.log(item.name);
  }
});
