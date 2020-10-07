"use strict";

const fs = require('fs');
const path = require('path');

const removePath = (p, callback) => {
    fs.stat(p, (err, stats) => {
        if(err) return callback(err);

        if (!stats.isDirectory()) {
            console.log("This path is File");
            return fs.unlink(p, err => err ? callback(err) : callback(null, p));
        }

        console.log('This path is folder');
        fs.rmdir(p, (err) => {
            if (err) return callback(err);

            return callback(null, p);
        });
    });
};

const printResult = (err, result) => {
    if (err) return console.log(err);

    console.log(`${result} Remove`);
};

const p = path.join(__dirname, 'js200');

try {
    const files = fs.readdirSync(p);
    if (files.length) {
        files.forEach(f => removePath(path.join(p, f), printResult));
    }
} catch(err) {
    if (err) return console.log(err);
}

removePath(p, printResult);