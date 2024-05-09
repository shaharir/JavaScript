//callback array of object

function fullName() {
  let c = { Name: "shahariar Azom" };
  return c;
}
function Address() {
  let a = { Add: "talaimari rajshahi" };
  return a;
}

function result(callback) {
  let N = callback();
  return N;
}
let a = result(fullName);
let b = result(Address);
console.log(a, b);
