"use strict"

const fs = require('fs');
const http = require('http');
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

// function createCalendarConfig() {
//     const template = {
//         type: "service_account",
//         project_id: "steadfast-bebop-176513",
//         private_key_id: "",
//         private_key: "",
//         client_email: "kevinbaes@steadfast-bebop-176513.iam.gserviceaccount.com",
//         client_id: "110761424735295424611",
//         auth_uri: "https://accounts.google.com/o/oauth2/auth",
//         token_uri: "https://accounts.google.com/o/oauth2/token",
//         auth_provider_x509_cert_url: "https://www.googleapis.com/oauth2/v1/certs",
//         client_x509_cert_url: "https://www.googleapis.com/robot/v1/metadata/x509/kevinbaes%40steadfast-bebop-176513.iam.gserviceaccount.com"
//     };

//     template.private_key_id = process.env.GCAL_PRIVATE_KEY_ID;
//     template.private_key = process.env.GCAL_PRIVATE_KEY;
    
//     return template;
// }

// const config = createCalendarConfig();

// fs.writeFile('service_account_credentials.json', JSON.stringify(config), 'utf8', (err) => {
//     if (err) console.log(err);
// }); // write it back 

// fs.readFile('service_account_credentials.json', 'utf8', (err, data) => {
//     if (err) console.log(err);
//     console.log(data);
// })

const requestHandler = (request, response) => {
    response.end("Hello world");

};

const server = http.createServer(requestHandler);

fs.readFile('/mountedtestvolume/secretfile.json', 'utf8', (err, data) => {
    if (err) console.log(err);
    console.log(data);
});

server.listen(8080,()=>{
	console.log("listening");
});