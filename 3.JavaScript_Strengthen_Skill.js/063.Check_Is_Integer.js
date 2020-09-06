console.log(Number.isInteger(0));
console.log(Number.isInteger(-1));
console.log(Number.isInteger(7777777777777777));
console.log(Number.isInteger(null));
console.log(Number.isInteger(0/0));
console.log(Number.isInteger('Infinity'));
console.log(Number.isInteger(true));
console.log(Number.isInteger({}));

function verifyInteger(n) {
    if(!umber.isInteger(n)) {
        return 0;
    }
}
const num1 = verifyInteger(15);
const num2 = verifyInteger(Infinity);
const num3 = verifyInteger(0.05);
console.log(num1, num2, num3);