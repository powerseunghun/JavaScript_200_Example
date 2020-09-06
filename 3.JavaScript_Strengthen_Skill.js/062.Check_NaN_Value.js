console.log(Number.isNaN(NaN));
console.log(Number.isNaN(undefined));
console.log(Number.isNaN('Is it Number?'));
console.log(Number.isNaN(0));
console.log(Number.isNaN(null));
console.log(Number.isNaN(-1));
console.log(Number.isNaN(0/0));
console.log(Number.isNaN(new Date()));
console.log(Number.isNaN(new Date().toString));
console.log(Number.isNaN('Infinity'));

function verifyNumber(n) {
    if(!n || Number.isNaN(n)) {
        return 0;
    }
}

const num1 = verifyNumber(15);
const num2 = verifyNumber(undefined);
const num3 = verifyNumber(null);
const num4 = verifyNumber(NaN);
console.log(num1 + num2 + num3 + num4);