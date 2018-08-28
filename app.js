"use strict"

const http = require('http');
const fs = require('fs');

const file = fs.readFileSync(process.env.MY_SECRET_PATH);

console.log('file contents: ' + file);