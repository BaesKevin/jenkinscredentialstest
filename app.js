"use strict"

const http = require('http');
const fs = require('fs');

// const file = fs.readFileSync(process.env.MY_SECRET_PATH);

const path = process.env.MY_SECRET_PATH.split('').join(' ');
console.log(path);
console.log(process.env.MY_SECRET_PATH);

// console.log('file contents: ' + file);