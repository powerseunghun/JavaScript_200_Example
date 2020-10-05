const prevList = [1, 2, 3];
const currentList = [4, 5, 6];
const nextList = [7, 8, 9];

console.log(prevList.concat(currentList));
console.log(prevList.concat(currentList, nextList));

console.log(['Array'].concat('Combine'));
console.log(['Array'].concat('Combine', 'JavaScript200'));