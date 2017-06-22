var app = require("express")();
var http = require("http").Server(app);
var io = require("socket.io")(http);

app.get("/", function(req, res) {
	//res.send("<h1>Welcome to the chat room</h1>");
	//console.log(__dirname);
	res.sendFile(__dirname + "/index.html");
});

io.on("connection", function(socket) {
	console.log("a user connected");

	socket.on('chat message', function(msg) {
		io.emit('chat message', msg);
	  });

	socket.on("disconnect", function() {
		console.log("user disconnected");
	});
});

var PORT = 8080;
http.listen(PORT, function() {
	console.log("listen to the " + PORT);
});