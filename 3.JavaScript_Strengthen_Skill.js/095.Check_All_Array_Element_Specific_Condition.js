const arr = [
    {id: 0, name: 'hyerim', age: 6},
    {id: 1, name: 'hyunil', age: 3},
    {id: 2, name: 'hyuna', age: 5},
    {id: 3, name: 'woorim', age: 2}
];
const isHyunAHere = arr.every(e1 => e1.name == 'hyuna');
const olderThanSix = arr.every(e1 => e1.age < 7);

console.log(isHyunAHere);
console.log(olderThanSix);