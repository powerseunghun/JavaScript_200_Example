const arr = [
    {name: 'woorim', age: 2},
    {name: 'hyuna', age: 5},
    {name: 'tan', age: 30},
    {name: 'hyunil', age: 3},
    {name: 'hyerim', age: 6}
];

const myFriend = arr.find(a => a.age === 30);
console.log(myFriend);