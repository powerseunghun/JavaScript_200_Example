const arr = [1, [2, 3], [4, 5, 6], ['Array', 'JavaScript'], 'ECMA6'];

const result = arr.reduce((acc, el) => {
    console.log('acc : ' + acc);
    console.log('el : ' + el);
    return acc.concat(el);
}, []);

console.log(result);