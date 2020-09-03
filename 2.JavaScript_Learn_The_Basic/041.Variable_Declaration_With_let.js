if (true) {
    var functionScopeValue = 'global';
    let blockScopeValue = 'local';
}

console.log(functionScopeValue);
// blockScopeValue is not defined
console.log(blockScopeValue);

// Cannot Access 'value'
// if local value is not declaration
// print "Outer Value"
let value = "Outer Value";
if (true) {
    console.log(value);
    let value = "Inner Value";
}