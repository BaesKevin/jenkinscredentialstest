"use strict"

const http = require('http');
const fs = require('fs');
const path = require('path');
// const file = fs.readFileSync(process.env.MY_SECRET_PATH);

console.log(__dirname);
// const path = process.env.MY_SECRET_PATH.split('').join(' ');
// console.log(path);
// console.log(process.env.MY_SECRET_PATH);

// console.log('file contents: ' + file);
const path = path.join(__dirname, 'secrets');
console.log(path);
fs.readdirSync(path).forEach(file => {
    console.log(file);
});