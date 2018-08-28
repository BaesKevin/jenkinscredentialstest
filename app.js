"use strict"

const fs = require('fs');
fs.readFile(`/app/secretfile.json`, {encoding: 'utf-8'}, (err, data) => {
    if (err) throw err;
    console.log(data);
});