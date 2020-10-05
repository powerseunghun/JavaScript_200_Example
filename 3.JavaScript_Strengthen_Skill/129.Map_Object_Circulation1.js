const map = new Map();

map.set('one', 1);
map.set('two', 2);

console.log('print only key info');
for (let key of map.keys()) {
    console.log(key);
}

console.log('print only value info');
for (let value of map.values()) {
    console.log(value);
}

console.log('[for..of, entries] key, value print');
for (let [key, value] of map.entries()) {
    console.log(`key is ${key}, value is ${value}`);
}
console.log('[for..of] key, value print');
for (let [key, value] of map) {
    console.log(`key is ${key}, value is ${value}`);
}

console.log('[forEach] key, value print');
map.forEach((value, key) => {
    console.log(`key is ${key}, value is ${value}`);
});