const products = [{name: "Bag"}, {name: "Notebook"}];

for (const item of products) {
    console.log(item.name);
}

const iter = products[Symbol.iterator]();
console.log(iter.next());
console.log(iter.next());
console.log(iter.next());