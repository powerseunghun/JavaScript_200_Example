console.log('2018-08-03 07-23-14'.replace('-', ':'));
console.log('2018-08-03 07-23-14'.replace(/-/g, ':'));
console.log('2018-08-03 07-23-14'.replace(/\d/g, '9'));

const littleWomen = 'Meg March, Jo March, Beth March, Amy March';
console.log(littleWomen.replace(/\w+ March/ig, 'Mrs.$&'));
console.log(littleWomen.replace(/\w+ March/ig, (str, d1, d2, d3, d4, 
    offset, s) => {
        let tag = '';

        if (/Meg/.test(str)) tag = 'First'
        else if (/Jo/.test(str)) tag = 'Second'
        else if (/Beth/.test(str)) tag = 'Third'
        else if (/Amy/.test(str)) tag = 'Fourth'

        console.log(`Character ${str} is ${tag}`);
        return tag;
    }));

const name = 'March Amy';
console.log(name.replace(/(March) (Amy)/, '$2 $1'));
console.log(name.replace(/(March) (Amy)/, (str, first, second, offset, s) => {
    console.log(`${second} is name, ${first} is first name.`);
    return `${second} ${first}`;
}));
