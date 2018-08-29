"use strict"

const fs = require('fs');
// const { exec } = require('child_process');
// exec('ls -lR /secrets', (err, stdout, stderr) => {
//   if (err) {
//     // node couldn't execute the command
//     return;
//   }

//   // the *entire* stdout and stderr (buffered)
//   console.log(`stdout: ${stdout}`);
//   console.log(`stderr: ${stderr}`);
// });

const config = {
    publicKey: 'irrelevantinfo'
}

config.privateKey = process.env.PRIVATE_KEY;

fs.writeFile('myjsonfile.json', JSON.stringify(config), 'utf8', (err) => {
    if(err) console.log(err);
}); // write it back 

fs.readFile('myjsonfile.json', 'utf8', (err,data) => {
    if(err) console.log(err);
    console.log(data);
})