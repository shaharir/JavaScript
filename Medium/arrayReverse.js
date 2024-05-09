//array reverse using for loop & toString

var arr = [1, 2, 3];
function array(a) {
  return { a: arr };
}
console.log(array().a);

var num = 123;
var str = num.toString();
var len = "";
for (var i = str.length - 1; i >= 0; i--) {
  len += str[i];
}
console.log(len);
