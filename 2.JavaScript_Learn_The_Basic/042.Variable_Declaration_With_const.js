// if modfy const keyword 
// error occured
const URL = 'http://js.com';
URL = 'http://js.com';

// if defined const variable within block.
// access outside block error occured
if (true) {
    const URL2 = 'http://js.com';
}

console.log(URL2);

const CONST_USER = {name: 'jay', age: 30};
console.log(CONST_USER.name, CONST_USER.age);
CONST_USER.name = 'jay2';
CONST_USER.age = 31;
console.log(CONST_USER.name, CONST_USER.age);
// error occurd
// Assignment to constant variable
CONST_USER = {name: 'bbo'};