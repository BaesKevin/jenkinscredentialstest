"use strict"

const fs = require('fs');

fs.readdirSync('/secrets').forEach(f=>console.log(f));
fs.readFile(`/secrets/secretfile.json`, {encoding: 'utf-8'}, (err, data) => {
    if (err) throw err;
    console.log(data);
});