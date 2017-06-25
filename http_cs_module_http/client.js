const http = require("http");

var options = {
	method : "GET",
	socketPath : "./node-server-sock",
	path : "/?file=index.html"
};

var request = http.request(options, function(response) {
	console.log("STATUS : " + response.statusCode);
	console.log("HEADERS" + JSON.stringify(response.headers));
	response.setEncoding("utf8");
	response.on("data", function(chunk) {
		console.log("chunk o\" data : " + chunk);
	});

});

request.on("error", function(e) {
	console.log("problem with request : " + e.message);
});

//write data to request body
request.write("fuck you\n");
request.write("屌你\n");
request.end();