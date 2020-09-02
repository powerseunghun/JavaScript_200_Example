var a = 10;
console.log(a);

function print() {
    var b = 20;
    if (true) {
        var c = 30;
    }
    console.log(c);
}

print();
// ReferenceError : not defined
// console.log(b);

a = "global";

function print1() {
    console.log(a);
}

function print2() {
    var a = "local";
    print1();
}

print1();
print2();