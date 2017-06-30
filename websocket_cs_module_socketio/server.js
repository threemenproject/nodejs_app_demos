var app = require("http").createServer(handler)
	, io = require("socket.io").listen(app)
	, fs = require("fs")

var counter;

app.listen(8124);

function handler(req, res) {
	fs.readFile(__dirname + "/client.html", function(err, data) {
		if(err) {
			res.writeHead(500);
			return res.end("error loading client.html");
		}
		counter = 1;
		res.writeHead(200);
		res.end(data);
	});
}

io.sockets.on("connection", function (socket) {
	socket.emit("news", {news: "hello world!"});

	socket.on("echo", function(data) {
		console.log("echo data from client : " + data.back);
		if(counter <= 50) {
			counter++;
			data.back += counter;
			socket.emit("news", {news: data.back});
		}
	});
});