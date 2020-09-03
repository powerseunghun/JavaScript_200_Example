// If Want Scope Chain..
// Understand Execution Context, Lexical Environment

var person = 'harin';

function print() {
    var person2 = 'jay';

    function innerPrint() {
        console.log(person);
        console.log(person2);
    }

    innerPrint();

    console.log('print finished');
}

print();

console.log('finished');

// ExecutionContext = {
//     LexicalEnvironment: {
//         EnvironmentRecord: {

//         },
//         OuterLexicalEnvironment: Ref
//     }
// }