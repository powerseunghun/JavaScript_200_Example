function checkNumber(val) {
    if (typeof val !== 'number') throw 'Invalid value';
    console.log('Check Number Type Value');
}

// checkNumber(100);
// checkNumber('Wrong type');
// console.log('complete');

try {
    checkNumber(100);
    checkNumber('Wrong type');
} catch(e) {
    console.log(`error occured >>> ${e}`);
} finally {
    console.log('complete');
}