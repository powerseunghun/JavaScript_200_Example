var condition = 5 > 10;
condition ? console.log('Left') : console.log('Right');

var result = condition ? (
    console.log("First Expression"),
    "Expression1"
) : (
    console.log("Second Expression"),
    "Expression2"
);

console.log(result);