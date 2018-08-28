"use strict"

const http = require('http');
const fs = require('fs');

const requestHandler = (request, response) => {
    console.log(request.url);
    console.log(process.env);
	// if( request.url === "/favicon.ico" ){
	// 	serveFavicon(request, response);
	// } else {
	// 	response.setHeader("Content-Type","text/html");
	// 	if (isPalindrome(request.url)) {
	// 		response.end('<span style="border:1px solid red">Welcome to the PALINDOME page</span>');
	// 	} else {
	// 		response.end('<span style="border:1px solid red">Welcome to the standard page</span>');
	// 	}
		
	// }

};

// function isPalindrome(str){
// 	for(var i=0,j=str.length-1 ; i<j ; i++,j--){
// 		console.log(str[i],"<->",str[j]);
// 		if(str[i] !== str[j]) return false;
// 	}
// 	return true;
// }

// function serveFavicon(request, response){
// 	fs.readFile('static/howestIcon.ico', (e,d)=>{
// 		if (e) {
// 			console.log("something went wrong while reading the image");
// 		} else {
// 			response.end(d);
// 		}
// 	});
// }

const server = http.createServer(requestHandler);

server.listen(9000,()=>{
	console.log("listening");
});