"use strict"

const fs = require('fs');
const path = require('path');

const filePath = path.join(__dirname, 'js200', 'hello.txt');

fs.access(filePath, fs.constants.F_OK, (err) => {
    if (err) return console.log('Can\'t Remove File');

    fs.unlink(filePath, (err) => err ? 
        console.log(err) : console.log(`${filePath} remove`));
});