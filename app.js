"use strict"

const http = require('http');
const fs = require('fs');
const path = require('path');
// const file = fs.readFileSync(process.env.MY_SECRET_PATH);

// console.log(process.env.PARENT_PATH);
console.log(__dirname);
console.log(process.env.PARENT_PATH);
const path = process.env.PARENT_PATH.split('').join(' ');
console.log(path);
// console.log(process.env.MY_SECRET_PATH);

// console.log('file contents: ' + file);
// const pathToSecretFile = path.join(__dirname, 'app', 'secrets');
// console.log(pathToSecretFile);

fs.readdirSync('/app/secrets').forEach(file => {
    console.log(file);
});