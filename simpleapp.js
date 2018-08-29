const fs = require('fs');
fs.readFile('/containersecrets/secretfile.json', 'utf8', (err, data) => {
    if (err) console.log(err);
    console.log(data);
});