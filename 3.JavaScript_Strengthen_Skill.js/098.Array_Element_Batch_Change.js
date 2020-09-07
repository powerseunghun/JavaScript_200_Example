const arr = [
    {id: 0, name: 'hyerim', age: 6},
    {id: 1, name: 'hyunil', age: 3},
    {id: 2, name: 'hyuna', age: 5},
    {id: 3, name: 'woorim', age: 2}
];

const arr2 = arr.map(el => {
    el.age = el.age + 1;
    return el;
});

const arr3 = arr.map(el => el.name);
console.log(arr2)
console.log(arr3);