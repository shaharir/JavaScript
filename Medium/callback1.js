function add(a, b) {
  var c = a + b;
  return c;
}

function sub(a, b) {
  var d = a - b;
  return d;
}
function calculation(callback, v1, v2) {
  var result = callback(v1, v2);
  return result;
}
var x = calculation(sub, 4, 9);
var y = calculation(add, 4, 9);
console.log(x);
console.log(y);
