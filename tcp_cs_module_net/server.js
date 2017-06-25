const net = require("net");
const port = 8080;
var server = net.createServer(function(sock) {
	console.log("a client connection");

		sock.on("data", function(data) {
			console.log("data from client" + sock.remoteAddress + " : " + 
				sock.remotePort + " : " + data);

		sock.write("fuck you");
	});

	sock.on("close", function() {
		console.log("bull shit not here");
	});
}).listen(port);

console.log("listening on : " + port);