"use strict"

const http = require('http');
const fs = require('fs');
const path = require('path');
// const file = fs.readFileSync(process.env.MY_SECRET_PATH);

// console.log(process.env.PARENT_PATH);
// console.log(__dirname);
// console.log(process.env);
// console.log(process.env.FULL_PATH.toUpperCase());
// console.log(process.env.PARENT_PATH);
// console.log(process.env.MY_SECRET_PATH);

// console.log('file contents: ' + file);
// const pathToSecretFile = path.join(__dirname, 'app', 'secrets');
// console.log(pathToSecretFile);

fs.readFile(`/app/secretfile.json`, {encoding: 'utf-8'}, (err, data) => {
    if (err) throw err;
    console.log(data);
  });