const dgram = require("dgram");
const port = 8124;

var server = dgram.createSocket("udp4");

server.on("message", function (msg, rinfo) {
	console.log("Message : " + msg + " from " + rinfo.address + " : " + rinfo.port);
});

server.bind(port);