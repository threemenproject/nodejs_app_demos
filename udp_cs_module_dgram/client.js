const dgram = require("dgram");
const port = 8124;
var client = dgram.createSocket("udp4");

//prepare for input from terminal
process.stdin.resume();

process.stdin.on("data", function(data) {
	console.log(data.toString("utf8"));
	client.send(data, 0, data.length, port, "127.0.0.1",
		function (err, bytes) {
			if(err)
				console.log("error : " + err);
			else
				console.log("sucessfully");
		});
});

console.log("Please input some which will be sent")