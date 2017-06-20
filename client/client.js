const http  = require("http");
const hostname = "127.0.0.1";
const port = 3000;

var client_opts = {
	host : "127.0.0.1",
	port : "3000",
	path : ""
};

var cb_func = function(response) {
	var body = "";
	response.on("data", function(data) {
		body += data;
	});

	response.on("end", function() {
		console.log(body);
	});
};

var req = http.request(client_opts, cb_func);
req.end();