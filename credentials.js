"use strict"

const fs = require('fs');
const http = require('http');
// const { exec } = require('child_process');
// exec('find / -name "secretfile.json"', (err, stdout, stderr) => {
//   if (err) {
//     // node couldn't execute the command
//     console.log(err);
//     return;
//   }

//   // the *entire* stdout and stderr (buffered)
//   console.log(`secretfile locations: ${stdout}`);
// });
// exec('whoami', (err, stdout, stderr) => {
//     if (err) {
//       // node couldn't execute the command
//       return;
//     }
  
//     // the *entire* stdout and stderr (buffered)
//     console.log(`whoami: ${stdout}`);
//   });
  
//   exec('ls -l /secretfilestash', (err, stdout, stderr) => {
//     if (err) {
//       // node couldn't execute the command
//       return;
//     }
  
//     // the *entire* stdout and stderr (buffered)
//     console.log(`secret file stash: ${stdout}`);
//   });
  
function createCalendarConfig() {
    const template = {
        type: "service_account",
        project_id: "steadfast-bebop-176513",
        private_key_id: "",
        private_key: "",
        client_email: "kevinbaes@steadfast-bebop-176513.iam.gserviceaccount.com",
        client_id: "110761424735295424611",
        auth_uri: "https://accounts.google.com/o/oauth2/auth",
        token_uri: "https://accounts.google.com/o/oauth2/token",
        auth_provider_x509_cert_url: "https://www.googleapis.com/oauth2/v1/certs",
        client_x509_cert_url: "https://www.googleapis.com/robot/v1/metadata/x509/kevinbaes%40steadfast-bebop-176513.iam.gserviceaccount.com"
    };

    template.type = "service_account";
    template.project_id = process.env.GCAL_PROJECT_ID;
    template.private_key_id = process.env.GCAL_PRIVATE_KEY_ID;
    template.private_key = process.env.GCAL_PRIVATE_KEY;
    template.client_email = process.env.GCAL_CLIENT_EMAIL;
    template.client_id = process.env.GCAL_CLIENT_ID;
    template.auth_uri = process.env.GCAL_AUTH_URI;
    template.token_uri = process.env.GCAL_TOKEN_URI;
    template.auth_provider_x509_cert_url = process.env.GCAL_AUTH_PROVIDEER_X509_CERT_URL;
    template.client_x509_cert_url = process.env.GCAL_CLIENT_X509_CERT_URL;

    for(key in template){
        if(template.hasOwnProperty(key)){
            if(template[key] === undefined){
                console.log(key + ' is not defined');
            }
        }
    }
    
    return template;
}


function writeConfig(calendarConfig, path){
    fs.writeFileSync(path, JSON.stringify(calendarConfig), 'utf8');
}

function readConfig(path, cb){
    fs.readFile(path, 'utf8', cb);
}

const calendarConfig = createCalendarConfig();
const credsPath = 'service_account_credentials.json'
writeConfig(calendarConfig, credsPath);

readConfig(credsPath, (err, content) => {
    if(err) console.log(err);
    console.log(content);
});

// const requestHandler = (request, response) => {
//     response.end("Hello world");

// };

// const server = http.createServer(requestHandler);

// fs.readFile('/app/meetingroomplannersecrets/', 'utf8', (err, data) => {
//     if (err) console.log(err);
//     console.log(data);
// });

// server.listen(8080,()=>{
// 	console.log("listening");
// });