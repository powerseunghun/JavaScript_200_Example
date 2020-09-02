console.log("5" + 1);
console.log("5" - 1);
console.log("5" * 2);
console.log("There is " + 5);
console.log("Five" * 2);

console.log('Type coercion use operator');
var str = 5 + "1";
console.log(str);
console.log(typeof str);

var num = +str;
console.log(num);
console.log(typeof num);

console.log('Type coercion use Function');
str = String(num);
console.log(str);
console.log(typeof str);

num = Number(str);
console.log(num);
console.log(typeof num);