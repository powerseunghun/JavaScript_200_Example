"use strict";

const fs = require('fs');
const { syncBuiltinESMExports } = require('module');
const path = require('path');

const makeFile = (path, callback) => {
    fs.writeFile(path, 'New File, New content', 'utf8', (err) => {
        if(err) return callback(err);

        console.log('file create');
        callback(null);
    });
};

const appendFile = (path, callback) => {
    fs.appendFile(path, '\nUpdate file', (err) => {
        if(err) return callback(err);

        console.log('file append');
        callback(null);
    });
};

const printErrIfExist = (err) => {
    if (err) console.log(err);
}

const filePath = path.join(__dirname, 'js200', 'hello.txt');

fs.open(filePath, 'wx', (err, fd) => {
    if (err && err.code === 'EEXIST') {
        console.log("H1");
        return appendFile(filePath, (err) => printErrIfExist(err));
    }
    if (err) {
        return callback(err);
    }

    return makeFile(filePath, (err) => printErrIfExist(err));
});