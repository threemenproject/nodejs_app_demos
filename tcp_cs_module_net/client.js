const net = require("net");

var client = new net.Socket();
client.setEncoding("utf8");

const port = 8080;
const server_addr = "127.0.0.1";

//connect to server
client.connect(port, server_addr, function() {
	console.log("connected to server");
	client.write("who needs a browser to communicate ?");
});

//prepare for input from terminal
process.stdin.resume();

//when receive data, send to server
process.stdin.on("data", function(data) {
	client.write(data);
});

//when receive data bac
client.on("data", function(data) {
	console.log("data from server : " + data);
});

//when server closed
client.on("close", function() {
	console.log("connection was closed by server");
});