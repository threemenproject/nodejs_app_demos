var app = require("http").createServer(handler)
, io = require("socket.io").listen(app)
, fs = require("fs");


app.listen(8124);

function handler(req, res) {
	console.log("http get");
	fs.readFile(__dirname + "/index.html", function(err, data) {
		if(err) {
			res.writeHead(500);
			return res.end("error loading index.html");
		}
		res.writeHead(200);
		res.end(data);
	});
}

io.sockets.on("connection", function (socket) {
		console.log("1 client connected");
		
		socket.on("addme", function(username) {
		socket.username = username;
		socket.emit("chat", "SERVER", "You have connected");
		socket.broadcast.emit("chat", "SERVER", username + "is on deck");
	});

	socket.on("sendchat", function(data) {
	console.log("get client chat text");
		io.sockets.emit("chat", socket.username, data);
	});

	socket.on("disconnect", function() {
		io.sockets.emit("chat", socket.username += "has left the building");
	});
});