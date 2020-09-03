function createCounterClosure() {
    let count = 0;
    return {
        increase: function() {
            count++;
        },
        getCount: function() {
            return count;
        }
    };
}

const counter1 = createCounterClosure();
const counter2 = createCounterClosure();

counter1.increase();
counter1.increase();

console.log('counter1\'s value : ' + counter1.getCount());
counter2.increase();
console.log('counter2\'s value : ' + counter2.getCount());

// closer : Function that remeber the Lexical Environment
// when a function is defined