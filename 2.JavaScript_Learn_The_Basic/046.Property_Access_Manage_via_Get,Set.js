let user = {};

Object.defineProperty(user, "age", {
    get: function() {
        return this._age;
    },
    set: function(age) {
        if (age < 0) {
            console.error("less than 0");
        }
        else {
            this._age = age;
        }
    },
    enumerable: true
});
user.age = 10;
console.log(user.age);
// less than 0
user.age = -1;

let user2 = {
    get name() {
        return this._name;
    },
    set name(val) {
        if(val.length < 3) {
            throw new Error('must least than 3');
        }
        this._name = val;
    }
}
user2.name = 'harin';
console.log(user2.name);
user2.name = 'ha';