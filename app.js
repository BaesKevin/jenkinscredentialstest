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
// const pathToSecretFile = path.join(__dirname, 'app', 'secrets');
// console.log(pathToSecretFile);

const file = fs.readFileSync('/app/secrets');
console.log(file);
fs.readdirSync('/app').forEach(file => {
    console.
    console.log(file);
});