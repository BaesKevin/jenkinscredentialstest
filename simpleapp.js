const fs = require('fs');

fs.readDirSync('/containersecrets').forEach(f => console.log('mounted file: '));
fs.readFile('/containersecrets/secretfile.json', 'utf8', (err, data) => {
    if (err) console.log(err);
    else console.log('secretfile data ':data);
});

