const s = new Set();

s.add('one');
s.add('two');

console.log('print only key info');
for (let key of s.keys()) {
    console.log(key);
}

console.log('print only value info');
for (let value of s.values()) {
    console.log(value);
}

console.log('[for..of, entries] key, value print');
for (let [key, value] of s.entries()) {
    console.log(`key is ${key}, value is ${value}`);
}

console.log('[forEach] key, value print');
s.forEach((value, key) => {
    console.log(`key is ${key}, value is ${value}`);
});