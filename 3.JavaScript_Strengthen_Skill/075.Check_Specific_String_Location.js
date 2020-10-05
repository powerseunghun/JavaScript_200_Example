const str = 'Carpe diem, seize the day';
console.log(`"e" is in ${str.indexOf('e')} index`);
console.log(`"C" is in ${str.indexOf('C')} index`);
console.log(`"c" is in ${str.indexOf('c')} index`);
console.log(`String ", se" is in ${str.indexOf(', se')} index`);

const arr = ['Carpe', 'diem', 'seize', 'the', 'day'];

const howManyHasE = (arr) => {
    let count = 0;
    arr.forEach((str) => {
        if (str.indexOf('e') > -1) {
            count++;
        }
    });
    return count;
}
console.log(`"e" is in ${arr}... ${howManyHasE(arr)}`);