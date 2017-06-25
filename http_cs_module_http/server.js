//create server and callback function
const http = require("http");
const fs = require("fs");
const url = require("url");
const querystring = require("querystring");

http.createServer( function(request, response) {
	var query = url.parse(request.url).query;
	console.log(query);
	file = querystring.parse(query).file;

	//content header
	response.writeHead(200, {"Content-Type" : "text/plain"});

	//increment global, write to client
	for(var i = 0; i < 100; i++)
	{
		response.write(i + "\n");
	}

	//open and read in file contents
	console.log("File : " + file + " will be read and send");
	var data = fs.readFileSync(file, "utf8");
	response.write(data);
	response.end();
}).listen("./node-server-sock");
