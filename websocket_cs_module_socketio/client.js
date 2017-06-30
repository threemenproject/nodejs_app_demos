const io = require("socket.io-client");

var socket = io.connect("ws://127.0.0.1:8124");

socket.on("news", function(data) {

	try
	{
		console.log("new data from server : " + data.news);
		socket.emit("echo", {back: data.news});
	}
	catch (e)
	{
		console.log(e.message);
	}
});

socket.emit("echo", {back: "fuck u!"});