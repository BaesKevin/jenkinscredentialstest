"use strict"

const http = require('http');
const fs = require('fs');

const file = fs.readFileSync(process.env.service_account_credentials.json);

console.log('file contents: ' + file);