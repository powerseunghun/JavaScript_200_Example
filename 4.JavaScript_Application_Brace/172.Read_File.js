"use strict";

const fs = require('fs');
const path = require('path');

const filePath = path.join(__dirname, 'js200', 'hello.txt');

fs.open(filePath, 'r', (err, fd) => {
    if (err && err.code === 'ENOENT') {
        return console.log('Can\'t read File');
    }
    if (err) return console.log(err);

    console.log('Can File Read Normally');

    fs.readFile(filePath, 'utf-8', (err, data) => {
        if(err) return console.log(err);

        console.log(data);
    });

    try {
        const data = fs.readFileSync(filePath, 'utf-8');
        console.log(data);
    } catch(err) {
        console.log(err);
    }
});