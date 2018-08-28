"use strict"

const http = require('http');
const fs = require('fs');

const secret = process.env.MY_SECRET;
console.log('This is the secret: ' + secret);